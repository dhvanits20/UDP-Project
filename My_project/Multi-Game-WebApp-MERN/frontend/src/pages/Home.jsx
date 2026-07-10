import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="hero">
        <h1>Welcome to Multi-Game WebApp</h1>
        <p>Play games, earn rewards, and become a developer!</p>
        <Link to="/games" className="cta-btn">Browse Games</Link>
      </header>
      
      <section className="features">
        <div className="feature-card">
          <h3>🎮 Play Games</h3>
          <p>Enjoy classic games like Tic-Tac-Toe, Chess, and more.</p>
        </div>
        <div className="feature-card">
          <h3>🏆 Earn Rewards</h3>
          <p>Get high scores and unlock achievements.</p>
        </div>
        <div className="feature-card">
          <h3>👨‍💻 Publish Games</h3>
          <p>Become a developer and publish your own HTML5 games.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
