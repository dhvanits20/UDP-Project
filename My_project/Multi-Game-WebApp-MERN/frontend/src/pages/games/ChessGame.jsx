import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Chess } from 'chess.js';
import Layout from '../../components/Layout';
import { useGameLimit } from '../../hooks/useGameLimit';
import './ChessGame.css';

const PIECE_SYMBOLS = {
  w: { k: '♔', q: '♕', r: '♖', b: '♗', n: '♘', p: '♙' },
  b: { k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟' }
};

const ChessGame = () => {
  const [game, setGame] = useState(new Chess());
  const [gameMode, setGameMode] = useState(null); // 'pvp' | 'pvc'
  const [playerColor, setPlayerColor] = useState('w');
  const [difficulty, setDifficulty] = useState(2);
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [legalMoves, setLegalMoves] = useState([]);
  const [boardHistory, setBoardHistory] = useState([]);
  const [board, setBoard] = useState(game.board());
  const [status, setStatus] = useState("Loading...");
  const [gameOver, setGameOver] = useState(false);
  const [winReason, setWinReason] = useState("");
  const [winnerTitle, setWinnerTitle] = useState("");
  const [showPromoModal, setShowPromoModal] = useState(false);
  const [pendingPromotion, setPendingPromotion] = useState(null);
  const { checkLimitAndIncrement } = useGameLimit();

  useEffect(() => {
    updateStatus();
    setBoard(game.board());
  }, [game]);

  const startGame = (mode) => {
    if (!checkLimitAndIncrement()) return;

    setGameMode(mode);
    const newGame = new Chess();
    setGame(newGame);
    setBoard(newGame.board());
    setBoardHistory([]);
    setSelectedSquare(null);
    setLegalMoves([]);
    setGameOver(false);
    updateStatus(newGame);
    
    if (mode === 'pvc' && playerColor === 'b') {
      setTimeout(() => computerMove(newGame), 500);
    }
  };

  const updateStatus = (currentGame = game) => {
    if (currentGame.isCheckmate()) {
      const winner = currentGame.turn() === 'w' ? 'Black' : 'White';
      setWinnerTitle(`${winner} Wins!`);
      setWinReason('Checkmate');
      setGameOver(true);
      setStatus(`Checkmate! ${winner} wins! 🎉`);
    } else if (currentGame.isDraw() || currentGame.isStalemate() || currentGame.isThreefoldRepetition()) {
      setWinnerTitle('Draw!');
      setWinReason('Draw');
      setGameOver(true);
      setStatus('Game Over - Draw');
    } else {
      setStatus(`${currentGame.turn() === 'w' ? 'White' : 'Black'}'s Turn${currentGame.isCheck() ? ' (In Check!)' : ''}`);
    }
  };

  const onSquareClick = (sq) => {
    if (gameOver) return;
    if (gameMode === 'pvc' && game.turn() !== playerColor) return;

    if (!selectedSquare) {
      const p = game.get(sq);
      if (p && p.color === game.turn()) {
        setSelectedSquare(sq);
        const moves = game.moves({ square: sq, verbose: true });
        setLegalMoves(moves.map(m => m.to));
      }
    } else {
      if (legalMoves.includes(sq)) {
        if (isPromotionMove(selectedSquare, sq)) {
          setPendingPromotion({ from: selectedSquare, to: sq });
          setShowPromoModal(true);
        } else {
          applyMove(selectedSquare, sq);
        }
      } else {
        const p = game.get(sq);
        if (p && p.color === game.turn()) {
          setSelectedSquare(sq);
          const moves = game.moves({ square: sq, verbose: true });
          setLegalMoves(moves.map(m => m.to));
        } else {
          setSelectedSquare(null);
          setLegalMoves([]);
        }
      }
    }
  };

  const isPromotionMove = (from, to) => {
    const p = game.get(from);
    if (!p || p.type !== 'p') return false;
    return (p.color === 'w' && to[1] === '8') || (p.color === 'b' && to[1] === '1');
  };

  const applyMove = (from, to, promotion = 'q') => {
    try {
      const newGame = new Chess(game.fen());
      const move = newGame.move({ from, to, promotion });
      if (move) {
        setGame(newGame);
        setSelectedSquare(null);
        setLegalMoves([]);
        
        if (gameMode === 'pvc' && !newGame.isGameOver()) {
          setTimeout(() => computerMove(newGame), 500);
        }
      }
    } catch (e) {
      console.log('Invalid move', e);
    }
  };

  const computerMove = (currentGame) => {
    if (currentGame.isGameOver()) return;
    
    const moves = currentGame.moves();
    if (moves.length === 0) return;
    
    const move = moves[Math.floor(Math.random() * moves.length)];
    const newGame = new Chess(currentGame.fen());
    newGame.move(move);
    setGame(newGame);
  };

  const handlePromotion = (piece) => {
    setShowPromoModal(false);
    applyMove(pendingPromotion.from, pendingPromotion.to, piece);
  };

  const backToMenu = () => {
    setGameMode(null);
    setGameOver(false);
  };

  const flipped = gameMode === 'pvc' && playerColor === 'b';

  return (
    <Layout>
      <section className="page-top-section set-bg" style={{ backgroundImage: "url('/assets/img/page-top-bg/1.jpg')" }}>
        <div className="page-info">
          <h2>Chess</h2>
          <div className="site-breadcrumb">
            <Link to="/">Home</Link> /
            <Link to="/games">Games</Link> /
            <span>Chess</span>
          </div>
        </div>
      </section>

      <section className="games-single-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-7 game-single-content">
              <div className="gs-meta">Dynamic / in <a href="#">Strategy Games</a></div>
              <h2 className="gs-title">Chess</h2>
              
              <div className="chess-container mt-5">
                <div className="game-card">
                  {!gameMode ? (
                    <div className="mode-selection text-center">
                      <h2 className="text-white mb-4">Choose Game Mode</h2>
                      <div className="mode-buttons d-flex gap-3 justify-content-center flex-wrap">
                        <button className="site-btn" onClick={() => startGame('pvp')}>👥 Pass and Play</button>
                        <button className="site-btn" style={{ background: '#f093fb' }} onClick={() => startGame('pvc')}>🤖 Play vs Computer</button>
                      </div>
                    </div>
                  ) : (
                    <div id="gameContent">
                      <div className="board-header d-flex justify-content-between align-items-center mb-4 p-3 bg-dark rounded border border-primary">
                        <div className="status-msg h5 mb-0 text-white">{status}</div>
                        <div className="pills d-flex gap-2">
                          <span className={`badge p-2 ${game.turn() === 'w' ? 'bg-light text-dark' : 'bg-dark text-white border'}`}>
                            Turn: {game.turn() === 'w' ? 'White' : 'Black'}
                          </span>
                          <span className="badge badge-info p-2">Mode: {gameMode === 'pvp' ? 'Local PvP' : 'vs CPU'}</span>
                        </div>
                      </div>

                      <div className="board-wrap">
                        {gameOver && (
                          <div className="game-over-overlay">
                            <div className="overlay-content">
                              <h2 style={{ color: winnerTitle.includes('White') ? '#fff' : winnerTitle.includes('Black') ? '#b01ba5' : '#00ffff' }}>
                                {winnerTitle}
                              </h2>
                              <p className="text-magenta">{winReason}</p>
                              <button className="site-btn" onClick={() => startGame(gameMode)}>Play Again</button>
                            </div>
                          </div>
                        )}
                        <div className="chess-board">
                          {[...Array(8)].map((_, rIdx) => {
                            const r = flipped ? 7 - rIdx : rIdx;
                            return (
                              <div className="chess-row" key={`row-${r}`}>
                                {[...Array(8)].map((_, cIdx) => {
                                  const c = flipped ? 7 - cIdx : cIdx;
                                  const sq = String.fromCharCode(97 + c) + String(8 - r);
                                  const isLight = (r + c) % 2 === 0;
                                  const piece = game.get(sq);
                                  const isSelected = selectedSquare === sq;
                                  const isLegalMove = legalMoves.includes(sq);

                                  return (
                                    <div 
                                      className={`square ${isLight ? 'light' : 'dark'} ${isSelected ? 'sel' : ''}`}
                                      key={sq}
                                      onClick={() => onSquareClick(sq)}
                                    >
                                      {isLegalMove && <div className={piece ? 'captureRing' : 'hintDot'}></div>}
                                      {piece && <span className="piece">{PIECE_SYMBOLS[piece.color][piece.type]}</span>}
                                    </div>
                                  );
                                })}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="board-footer mt-4">
                        <div className="controls d-flex flex-wrap justify-content-center gap-2 mb-4">
                          <button className="site-btn" onClick={() => startGame(gameMode)}>🔄 New Game</button>
                          <button className="site-btn" style={{ background: '#dc3545' }} onClick={backToMenu}>🏠 Main Menu</button>
                        </div>

                        {gameMode === 'pvc' && (
                          <div className="toggles d-flex flex-wrap justify-content-center gap-3 p-3 bg-dark rounded border border-secondary shadow-sm">
                            <div className="d-flex align-items-center gap-2">
                              <span className="text-white-50 small">Play As:</span>
                              <select className="custom-select custom-select-sm bg-dark text-white border-secondary" value={playerColor} onChange={(e) => setPlayerColor(e.target.value)}>
                                <option value="w">White</option>
                                <option value="b">Black</option>
                              </select>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Sidebar with Ratings - same as original */}
            <div className="col-xl-3 col-lg-4 col-md-5 sidebar game-page-sideber">
              <div id="stickySidebar">
                <div className="widget-item">
                  <div className="rating-widget">
                    <h4 className="widget-title">Ratings</h4>
                    <ul>
                      <li>Fun<span>4.8/5</span></li>
                      <li>Strategy<span>5.0/5</span></li>
                      <li>Replayability<span>4.9/5</span></li>
                    </ul>
                    <div className="rating">
                      <h5><i>Rating</i><span>4.9</span> / 5</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Promotion Modal */}
      {showPromoModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark text-white border-primary">
              <div className="modal-header border-0">
                <h5 className="modal-title h4 w-100 text-center text-primary">Promote Pawn To:</h5>
              </div>
              <div className="modal-body">
                <div className="d-flex justify-content-center gap-3">
                  {['q', 'r', 'b', 'n'].map(p => (
                    <button key={p} className="promoBtn" onClick={() => handlePromotion(p)}>
                      {PIECE_SYMBOLS[game.turn()][p]}
                    </button>
                  ))}
                </div>
              </div>
              <div className="modal-footer border-0 justify-content-center">
                <button type="button" className="site-btn" style={{ background: '#6c757d' }} onClick={() => setShowPromoModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default ChessGame;
