import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        };
        const { data } = await axios.get('http://localhost:5000/api/scores/my-scores', config);
        setScores(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    if (user) {
      fetchScores();
    }
  }, [user]);

  if (!user) {
    return <div className="loading">Please login to view dashboard.</div>;
  }

  return (
    <div className="dashboard-container">
      <h2>Welcome, {user.name}</h2>
      
      <div className="dashboard-grid">
        <div className="dashboard-card profile-card">
          <h3>Profile Info</h3>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Coins:</strong> {user.coins || 0}</p>
        </div>

        <div className="dashboard-card scores-card">
          <h3>My Recent Scores</h3>
          {loading ? (
            <p>Loading scores...</p>
          ) : scores.length > 0 ? (
            <ul className="score-list">
              {scores.map((score) => (
                <li key={score._id}>
                  <span className="game-title">{score.gameId?.title || 'Unknown Game'}</span>
                  <span className="score-value">{score.score} pts</span>
                  <span className="score-date">{new Date(score.createdAt).toLocaleDateString()}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>You haven't submitted any scores yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
