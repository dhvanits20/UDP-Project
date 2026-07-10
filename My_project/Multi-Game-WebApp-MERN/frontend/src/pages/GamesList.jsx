import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './GamesList.css';

const GamesList = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/games');
        setGames(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) return <div className="loading">Loading games...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="games-container">
      <h2>Available Games</h2>
      <div className="games-grid">
        {games.length > 0 ? (
          games.map((game) => (
            <div key={game._id} className="game-card">
              {game.thumbnailUrl && (
                <img src={game.thumbnailUrl} alt={game.title} className="game-thumbnail" />
              )}
              <div className="game-info">
                <h3>{game.title}</h3>
                <p>{game.description.substring(0, 100)}...</p>
                <div className="game-developer">
                  By: {game.developerId?.name || 'Unknown'}
                </div>
                <Link to={`/play/${game._id}`} className="play-btn">Play Now</Link>
              </div>
            </div>
          ))
        ) : (
          <p>No games available right now.</p>
        )}
      </div>
    </div>
  );
};

export default GamesList;
