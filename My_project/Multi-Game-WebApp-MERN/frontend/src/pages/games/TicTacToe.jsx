import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { useGameLimit } from '../../hooks/useGameLimit';
import './TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameMode, setGameMode] = useState(null); // 'pvp' | 'pvc' | null
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState([]);
  const [modalMessage, setModalMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const { checkLimitAndIncrement } = useGameLimit();

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]              // Diagonals
  ];

  const startGame = (mode) => {
    setGameMode(mode);
    resetGameLocal();
  };

  const checkWinner = (currentBoard) => {
    for (let combo of winningCombinations) {
      if (
        currentBoard[combo[0]] !== '' &&
        currentBoard[combo[0]] === currentBoard[combo[1]] &&
        currentBoard[combo[1]] === currentBoard[combo[2]]
      ) {
        return { winner: currentBoard[combo[0]], line: combo };
      }
    }
    return null;
  };

  const makeMove = (index) => {
    if (!gameActive || board[index] !== '' || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const winResult = checkWinner(newBoard);
    
    if (winResult) {
      setWinner(winResult.winner);
      setWinningLine(winResult.line);
      setGameActive(false);
      setTimeout(() => {
        setModalMessage(`Player ${winResult.winner} Wins! 🎉`);
        setShowModal(true);
        if (winResult.winner === 'X') setScoreX(prev => prev + 1);
        else setScoreO(prev => prev + 1);
      }, 500);
      return;
    }

    if (!newBoard.includes('')) {
      setGameActive(false);
      setTimeout(() => {
        setModalMessage("It's a Draw! 🤝");
        setShowModal(true);
      }, 500);
      return;
    }

    const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
    setCurrentPlayer(nextPlayer);
  };

  useEffect(() => {
    if (gameActive && gameMode === 'pvc' && currentPlayer === 'O') {
      const timer = setTimeout(() => {
        computerMove();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentPlayer, gameActive, gameMode]);

  const findWinningMove = (player, currentBoard) => {
    for (let combo of winningCombinations) {
      const values = combo.map(i => currentBoard[i]);
      if (values.filter(v => v === player).length === 2 && values.includes('')) {
        return combo[values.indexOf('')];
      }
    }
    return null;
  };

  const computerMove = () => {
    let move = findWinningMove('O', board);
    if (move !== null) { makeMove(move); return; }
    
    move = findWinningMove('X', board);
    if (move !== null) { makeMove(move); return; }

    if (board[4] === '') { makeMove(4); return; }

    const corners = [0, 2, 6, 8];
    const availableCorners = corners.filter(i => board[i] === '');
    if (availableCorners.length > 0) {
      makeMove(availableCorners[Math.floor(Math.random() * availableCorners.length)]);
      return;
    }

    const available = board.map((cell, idx) => cell === '' ? idx : null).filter(idx => idx !== null);
    if (available.length > 0) {
      makeMove(available[Math.floor(Math.random() * available.length)]);
    }
  };

  const resetGameLocal = () => {
    if (!checkLimitAndIncrement()) return;

    setBoard(Array(9).fill(''));
    setCurrentPlayer('X');
    setGameActive(true);
    setWinner(null);
    setWinningLine([]);
    setShowModal(false);
  };

  const backToMenu = () => {
    setGameMode(null);
    setGameActive(false);
    setShowModal(false);
  };

  return (
    <Layout>
      <section className="page-top-section set-bg" style={{ backgroundImage: "url('/assets/img/page-top-bg/1.jpg')" }}>
        <div className="page-info">
          <h2>Tic Tac Toe</h2>
          <div className="site-breadcrumb">
            <Link to="/">Home</Link> /
            <Link to="/games">Games</Link> /
            <span>Tic Tac Toe</span>
          </div>
        </div>
      </section>

      <section className="games-single-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-7 game-single-content">
              <div className="gs-meta">Dynamic / in <a href="#">Offline Games</a></div>
              <h2 className="gs-title">Tic Tac Toe</h2>
              
              <div className="tic-tac-toe-container mt-5">
                <div className="game-card">
                  
                  {!gameMode ? (
                    <div className="mode-selection" id="modeSelection">
                      <h2 className="text-white mb-4 text-center">Choose Game Mode</h2>
                      <div className="mode-buttons d-flex gap-3 justify-content-center">
                        <button className="site-btn" onClick={() => startGame('pvp')}>👥 Player vs Player</button>
                        <button className="site-btn" style={{ background: '#f093fb' }} onClick={() => startGame('pvc')}>🤖 Player vs Computer</button>
                      </div>
                    </div>
                  ) : (
                    <div className="game-info" id="gameInfo">
                      <div className="scoreboard d-flex justify-content-around mb-4 p-3 bg-dark rounded border border-primary">
                        <div className="score player-x text-center">
                          <div className="score-label text-muted">Player X</div>
                          <div className="score-value h2 text-primary">{scoreX}</div>
                        </div>
                        <div className="score player-o text-center">
                          <div className="score-label text-muted">Player O</div>
                          <div className="score-value h2 text-danger">{scoreO}</div>
                        </div>
                      </div>
                      
                      <div className={`current-turn text-center h4 mb-4 p-2 rounded text-white ${currentPlayer === 'X' ? 'bg-primary' : 'bg-danger'}`}>
                        Player {currentPlayer}'s Turn
                      </div>
                      
                      <div className="board">
                        {[0, 1, 2].map(row => (
                          <div className="row no-gutters" key={`row-${row}`}>
                            {[0, 1, 2].map(col => {
                              const index = row * 3 + col;
                              const isWinnerCell = winningLine.includes(index);
                              const cellValue = board[index];
                              return (
                                <div className="col-4 p-1" key={index}>
                                  <button 
                                    className={`cell-btn ${cellValue.toLowerCase()} ${isWinnerCell ? 'winner' : ''}`}
                                    onClick={() => makeMove(index)}
                                    disabled={!gameActive || cellValue !== ''}
                                  >
                                    {cellValue}
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        ))}
                      </div>

                      <div className="controls mt-4 d-flex justify-content-center gap-2">
                        <button className="site-btn mr-2" onClick={resetGameLocal}>🔄 Reset</button>
                        <button className="site-btn" style={{ background: '#6c757d' }} onClick={backToMenu}>🏠 Menu</button>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </div>
            
            <div className="col-xl-3 col-lg-4 col-md-5 sidebar game-page-sideber">
              <div id="stickySidebar">
                <div className="widget-item">
                  <div className="rating-widget">
                    <h4 className="widget-title">Ratings</h4>
                    <ul>
                      <li>Fun<span>5.0/5</span></li>
                      <li>Strategy<span>4.0/5</span></li>
                      <li>Replayability<span>4.5/5</span></li>
                    </ul>
                    <div className="rating">
                      <h5><i>Rating</i><span>4.5</span> / 5</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark text-white border-primary">
              <div className="modal-header border-0">
                <h5 className="modal-title h3 w-100 text-center text-primary">{modalMessage}</h5>
              </div>
              <div className="modal-footer border-0 justify-content-center">
                <button type="button" className="site-btn" onClick={resetGameLocal}>Play Again</button>
                <button type="button" className="site-btn" style={{ background: '#6c757d' }} onClick={backToMenu}>Main Menu</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default TicTacToe;
