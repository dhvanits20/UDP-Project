import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import './GamePlayer.css';

const GamePlayer = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [score, setScore] = useState('');
  const { user } = useContext(AuthContext);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/games/${id}`);
        setGame(data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
        setLoading(false);
      }
    };

    fetchGame();
  }, [id]);

  const handleScoreSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setSubmitMessage('Please login to submit a score.');
      return;
    }
    
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      };
      await axios.post('http://localhost:5000/api/scores', { gameId: id, score: Number(score) }, config);
      setSubmitMessage('Score submitted successfully!');
      setScore('');
    } catch (err) {
      setSubmitMessage(err.response?.data?.message || 'Failed to submit score.');
    }
  };

  if (loading) return <div className="loading">Loading game...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!game) return <div className="error">Game not found</div>;

  return (
    <div className="game-player-container">
      <h2>{game.title}</h2>
      <div className="game-frame-container">
        {/* If the game is hosted externally, we can use an iframe. Otherwise just a placeholder for now */}
        {game.playUrl ? (
          <iframe 
            src={game.playUrl} 
            title={game.title} 
            className="game-iframe"
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        ) : (
          <div className="game-placeholder">
            <p>Game content goes here.</p>
          </div>
        )}
      </div>
      
      <div className="game-details">
        <p>{game.description}</p>
        <div className="score-submission">
          <h3>Submit Your Score</h3>
          <form onSubmit={handleScoreSubmit}>
            <input 
              type="number" 
              value={score} 
              onChange={(e) => setScore(e.target.value)} 
              placeholder="Enter score" 
              required 
            />
            <button type="submit" className="submit-btn">Submit</button>
          </form>
          {submitMessage && <p className="submit-msg">{submitMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default GamePlayer;
