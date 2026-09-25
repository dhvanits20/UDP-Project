/*
  Offline Chess UI
  - Pure HTML/CSS/JS (no build step)
  - Uses chess.js for rules + move generation/validation
*/

(() => {
  'use strict'

  // ---------- DOM ----------
  const $ = (sel) => document.querySelector(sel)

  const boardEl = $('#board')
  const statusEl = $('#status')
  const movesEl = $('#moves')
  const capWhiteEl = $('#capWhite')
  const capBlackEl = $('#capBlack')

  const newGameBtn = $('#newGameBtn')
  const undoBtn = $('#undoBtn')
  const flipBtn = $('#flipBtn')

  const vsComputerToggle = $('#vsComputerToggle')
  const difficultyEl = $('#difficulty')
  const difficultyLabel = $('#difficultyLabel')
  const playerColorEl = $('#playerColor')

  const turnPill = $('#turnPill')
  const modePill = $('#modePill')

  const promoModal = $('#promoModal')
  const promoRow = $('#promoRow')
  const promoCancel = $('#promoCancel')

  // ---------- Chess engine ----------
  const game = new Chess()

  // ---------- UI state ----------
  let flipped = false
  let selected = null // square like 'e2'
  let legalTargets = new Set()
  let lastMove = null // {from,to}

  let pendingPromotion = null // {from,to,color}

  // Unicode pieces (fully offline, no asset licensing issues)
  const PIECE = {
    w: { k: '♔', q: '♕', r: '♖', b: '♗', n: '♘', p: '♙' },
    b: { k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟' },
  }

  const PIECE_VALUE = { p: 100, n: 320, b: 330, r: 500, q: 900, k: 20000 }

  // ---------- Helpers ----------
  function squareToRC(square) {
    const file = square.charCodeAt(0) - 97 // a=0
    const rank = parseInt(square[1], 10) - 1 // 1->0
    return { r: 7 - rank, c: file }
  }

  function rcToSquare(r, c) {
    const file = String.fromCharCode(97 + c)
    const rank = String(8 - r)
    return file + rank
  }

  function boardAt(square) {
    return game.get(square) // {type,color} | null
  }

  function clearSelection() {
    selected = null
    legalTargets.clear()
    pendingPromotion = null
    hidePromotion()
  }

  function isPlayerTurn() {
    if (!vsComputerToggle.checked) return true
    const player = playerColorEl.value
    return game.turn() === player
  }

  function currentModeLabel() {
    if (!vsComputerToggle.checked) return '2 players'
    return `vs computer (${playerColorEl.value === 'w' ? 'you=White' : 'you=Black'})`
  }

  function setStatus() {
    let s = ''
    if (game.in_checkmate()) {
      s = `Checkmate — ${game.turn() === 'w' ? 'Black' : 'White'} wins.`
    } else if (game.in_stalemate()) {
      s = 'Stalemate — draw.'
    } else if (game.in_draw()) {
      s = 'Draw.'
    } else {
      const side = game.turn() === 'w' ? 'White' : 'Black'
      s = `${side} to move${game.in_check() ? ' (check)' : ''}.`
    }

    statusEl.textContent = s
    turnPill.textContent = `Turn: ${game.turn() === 'w' ? 'White' : 'Black'}`
    modePill.textContent = `Mode: ${currentModeLabel()}`

    undoBtn.disabled = game.history().length === 0
  }

  function setDifficultyLabel() {
    difficultyLabel.textContent = difficultyEl.value
  }

  function renderMoves() {
    movesEl.innerHTML = ''
    const history = game.history({ verbose: true })
    for (let i = 0; i < history.length; i += 2) {
      const li = document.createElement('li')
      const moveNo = (i / 2) + 1
      const w = history[i] ? history[i].san : ''
      const b = history[i + 1] ? history[i + 1].san : ''
      li.textContent = `${moveNo}. ${w}${b ? '   ' + b : ''}`
      movesEl.appendChild(li)
    }
    movesEl.scrollTop = movesEl.scrollHeight
  }

  function renderCaptured() {
    const history = game.history({ verbose: true })
    const capW = []
    const capB = []

    for (const mv of history) {
      if (mv.captured) {
        const capturedSymbol = PIECE[mv.color === 'w' ? 'b' : 'w'][mv.captured]
        if (mv.color === 'w') capW.push(capturedSymbol)
        else capB.push(capturedSymbol)
      }
    }

    capWhiteEl.textContent = capW.join(' ')
    capBlackEl.textContent = capB.join(' ')
  }

  function isPromotionMove(from, to) {
    const piece = boardAt(from)
    if (!piece || piece.type !== 'p') return false
    const targetRank = to[1]
    if (piece.color === 'w' && targetRank !== '8') return false
    if (piece.color === 'b' && targetRank !== '1') return false

    // Ensure that a legal move exists that is marked promotion
    const candidates = game.moves({ square: from, verbose: true })
    return candidates.some(m => m.to === to && String(m.flags || '').includes('p'))
  }

  function applyMove(from, to, promotion) {
    const moveObj = { from, to }
    if (promotion) moveObj.promotion = promotion

    const mv = game.move(moveObj)
    if (!mv) return null

    lastMove = { from: mv.from, to: mv.to }
    clearSelection()

    setStatus()
    renderAll()

    maybeComputerMove()

    return mv
  }

  function showPromotion(color) {
    promoRow.innerHTML = ''
    const options = ['q', 'r', 'b', 'n']
    for (const p of options) {
      const btn = document.createElement('button')
      btn.className = 'promoBtn'
      btn.type = 'button'
      btn.title = `Promote to ${p.toUpperCase()}`
      btn.textContent = PIECE[color][p]
      btn.addEventListener('click', () => {
        if (!pendingPromotion) return
        const { from, to } = pendingPromotion
        hidePromotion()
        applyMove(from, to, p)
      })
      promoRow.appendChild(btn)
    }

    promoModal.classList.add('show')
    promoModal.setAttribute('aria-hidden', 'false')
  }

  function hidePromotion() {
    promoModal.classList.remove('show')
    promoModal.setAttribute('aria-hidden', 'true')
  }

  // ---------- Board rendering ----------
  function boardSquaresInDisplayOrder() {
    const rows = []
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        rows.push({ r, c })
      }
    }

    if (!flipped) return rows

    // Flip: invert both axes
    return rows.map(({ r, c }) => ({ r: 7 - r, c: 7 - c }))
  }

  function renderBoard() {
    boardEl.innerHTML = ''

    const checkSquare = (() => {
      if (!game.in_check()) return null
      const color = game.turn()
      // Find king of side to move (in check)
      const b = game.board()
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          const p = b[r][c]
          if (p && p.type === 'k' && p.color === color) return rcToSquare(r, c)
        }
      }
      return null
    })()

    for (const { r, c } of boardSquaresInDisplayOrder()) {
      const square = rcToSquare(r, c)
      const isLight = (r + c) % 2 === 0

      const sq = document.createElement('div')
      sq.className = `square ${isLight ? 'light' : 'dark'}`
      sq.dataset.square = square
      sq.tabIndex = 0

      // Coordinates (only on edge squares)
      const showFile = (r === (flipped ? 0 : 7))
      const showRank = (c === (flipped ? 7 : 0))
      if (showFile) {
        const file = document.createElement('div')
        file.className = 'coord file'
        file.textContent = square[0]
        sq.appendChild(file)
      }
      if (showRank) {
        const rank = document.createElement('div')
        rank.className = 'coord rank'
        rank.textContent = square[1]
        sq.appendChild(rank)
      }

      // Highlights
      if (selected === square) sq.classList.add('sel')
      if (lastMove && (lastMove.from === square || lastMove.to === square)) sq.classList.add('last')
      if (checkSquare === square) sq.classList.add('check')

      // Move dots
      if (selected && legalTargets.has(square)) {
        const targetPiece = boardAt(square)
        if (targetPiece) {
          const ring = document.createElement('div')
          ring.className = 'captureRing'
          sq.appendChild(ring)
        } else {
          const dot = document.createElement('div')
          dot.className = 'hintDot'
          sq.appendChild(dot)
        }
      }

      // Piece
      const piece = boardAt(square)
      if (piece) {
        const span = document.createElement('span')
        span.className = 'piece'
        span.textContent = PIECE[piece.color][piece.type]
        span.draggable = isPlayerTurn() // only player can drag when vs computer
        span.dataset.from = square
        span.setAttribute('aria-label', `${piece.color === 'w' ? 'White' : 'Black'} ${piece.type}`)

        span.addEventListener('dragstart', (e) => {
          if (!isPlayerTurn()) { e.preventDefault(); return }
          const from = square
          e.dataTransfer.setData('text/plain', from)
          // Prepare highlights
          selectSquare(from)
        })

        sq.appendChild(span)
      }

      // Interactions
      sq.addEventListener('click', () => onSquareClick(square))

      sq.addEventListener('dragover', (e) => {
        e.preventDefault()
      })
      sq.addEventListener('drop', (e) => {
        e.preventDefault()
        if (!isPlayerTurn()) return
        const from = e.dataTransfer.getData('text/plain')
        const to = square
        if (!from) return
        attemptMove(from, to)
      })

      boardEl.appendChild(sq)
    }
  }

  function selectSquare(square) {
    selected = square
    legalTargets.clear()

    const piece = boardAt(square)
    if (!piece) return

    // In vs computer mode, allow selection only for player's side
    if (vsComputerToggle.checked && piece.color !== playerColorEl.value) return

    const moves = game.moves({ square, verbose: true })
    for (const m of moves) legalTargets.add(m.to)
  }

  function onSquareClick(square) {
    if (promoModal.classList.contains('show')) return

    // If nothing selected, try selecting
    if (!selected) {
      const piece = boardAt(square)
      if (!piece) return
      if (vsComputerToggle.checked && piece.color !== playerColorEl.value) return
      selectSquare(square)
      renderBoard()
      return
    }

    // Click same square => deselect
    if (selected === square) {
      clearSelection()
      renderBoard()
      return
    }

    // If clicked another own piece, switch selection
    const piece = boardAt(square)
    if (piece && (!vsComputerToggle.checked || piece.color === playerColorEl.value)) {
      selectSquare(square)
      renderBoard()
      return
    }

    // Otherwise attempt to move selected -> square
    attemptMove(selected, square)
  }

  function attemptMove(from, to) {
    if (!isPlayerTurn()) return

    // Only allow moves that are legal targets when selected is set
    if (selected && from === selected && legalTargets.size > 0 && !legalTargets.has(to)) {
      // Not legal, keep selection
      return
    }

    // Promotion handling
    if (isPromotionMove(from, to)) {
      pendingPromotion = { from, to, color: boardAt(from).color }
      showPromotion(boardAt(from).color)
      return
    }

    const mv = applyMove(from, to)
    if (!mv) {
      // illegal, keep selection but refresh highlights
      selectSquare(from)
      renderBoard()
    }
  }

  function renderAll() {
    renderBoard()
    renderMoves()
    renderCaptured()
  }

  // ---------- Computer player (simple minimax) ----------
  function evaluateBoard() {
    // Material + a small mobility bonus
    let score = 0
    const b = game.board()
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        const p = b[r][c]
        if (!p) continue
        const v = PIECE_VALUE[p.type]
        score += (p.color === 'w') ? v : -v
      }
    }

    // Mobility (lightweight)
    const turn = game.turn()
    const moves = game.moves().length
    if (turn === 'w') score += moves
    else score -= moves

    return score
  }

  function pickBestMove(depth) {
    const maximizeForWhite = true

    function minimax(d, alpha, beta) {
      if (d === 0 || game.game_over()) return evaluateBoard()

      const moves = game.moves({ verbose: true })

      // Simple move ordering: captures first
      moves.sort((a, b) => (b.captured ? 1 : 0) - (a.captured ? 1 : 0))

      if (game.turn() === 'w') {
        let best = -Infinity
        for (const mv of moves) {
          game.move(mv)
          const val = minimax(d - 1, alpha, beta)
          game.undo()
          best = Math.max(best, val)
          alpha = Math.max(alpha, best)
          if (beta <= alpha) break
        }
        return best
      } else {
        let best = Infinity
        for (const mv of moves) {
          game.move(mv)
          const val = minimax(d - 1, alpha, beta)
          game.undo()
          best = Math.min(best, val)
          beta = Math.min(beta, best)
          if (beta <= alpha) break
        }
        return best
      }
    }

    const moves = game.moves({ verbose: true })
    if (moves.length === 0) return null
    moves.sort((a, b) => (b.captured ? 1 : 0) - (a.captured ? 1 : 0))

    let bestMove = moves[0]
    let bestScore = (game.turn() === 'w') ? -Infinity : Infinity

    for (const mv of moves) {
      game.move(mv)
      const score = minimax(depth - 1, -Infinity, Infinity)
      game.undo()

      if (game.turn() === 'w') {
        if (score > bestScore) { bestScore = score; bestMove = mv }
      } else {
        if (score < bestScore) { bestScore = score; bestMove = mv }
      }
    }

    return bestMove
  }

  function maybeComputerMove() {
    if (!vsComputerToggle.checked) return
    if (game.game_over()) return

    const player = playerColorEl.value
    const computer = player === 'w' ? 'b' : 'w'

    if (game.turn() !== computer) return

    const depth = parseInt(difficultyEl.value, 10) // 1..3

    // Let UI breathe
    setTimeout(() => {
      const best = pickBestMove(depth)
      if (!best) return

      // Ensure promotion has a choice (default to queen)
      const promotion = best.promotion || (String(best.flags || '').includes('p') ? 'q' : undefined)

      game.move({ from: best.from, to: best.to, promotion })
      lastMove = { from: best.from, to: best.to }
      clearSelection()
      setStatus()
      renderAll()
    }, 120)
  }

  // ---------- Actions ----------
  function newGame() {
    game.reset()
    lastMove = null
    clearSelection()
    setStatus()
    renderAll()

    // If player chose Black vs computer, computer (White) moves first
    maybeComputerMove()
  }

  function undo() {
    if (promoModal.classList.contains('show')) return

    if (!vsComputerToggle.checked) {
      game.undo()
    } else {
      // Undo both sides so it's player's turn again
      game.undo()
      game.undo()
    }

    lastMove = null
    clearSelection()
    setStatus()
    renderAll()
  }

  function flip() {
    flipped = !flipped
    renderBoard()
  }

  // ---------- Events ----------
  newGameBtn.addEventListener('click', newGame)
  undoBtn.addEventListener('click', undo)
  flipBtn.addEventListener('click', flip)

  vsComputerToggle.addEventListener('change', () => {
    clearSelection()
    setStatus()
    renderBoard()
    maybeComputerMove()
  })

  playerColorEl.addEventListener('change', () => {
    clearSelection()
    setStatus()
    renderAll()
    // If player switched to black mid-game, computer may need to move
    maybeComputerMove()
  })

  difficultyEl.addEventListener('input', () => {
    setDifficultyLabel()
  })

  promoCancel.addEventListener('click', () => {
    pendingPromotion = null
    hidePromotion()
  })

  window.addEventListener('keydown', (e) => {
    const k = e.key.toLowerCase()
    if (k === 'n') { newGame(); return }
    if (k === 'u') { undo(); return }
    if (k === 'f') { flip(); return }
    if (e.key === 'Escape') {
      pendingPromotion = null
      hidePromotion()
      clearSelection()
      renderBoard()
    }
  })

  // Click outside modal closes it
  promoModal.addEventListener('click', (e) => {
    if (e.target === promoModal) {
      pendingPromotion = null
      hidePromotion()
    }
  })

  // ---------- Init ----------
  setDifficultyLabel()
  setStatus()
  renderAll()

  // Expose a tiny debug handle
  window.__chess = { game }
})()
