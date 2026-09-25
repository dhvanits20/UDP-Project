import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../components/Layout';
import { useGameLimit } from '../../hooks/useGameLimit';

const PlayGame = () => {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [gameActive, setGameActive] = useState(false);
  const { checkLimitAndIncrement } = useGameLimit();

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/games/${id}`);
        setGame(res.data);
      } catch (error) {
        console.error("Error fetching game:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGame();
  }, [id]);

  const handleStartGame = () => {
    if (!checkLimitAndIncrement()) return;
    setGameActive(true);
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen d-flex align-items-center justify-content-center text-white" style={{ background: '#2d1854' }}>
          <h2>Loading Game...</h2>
        </div>
      </Layout>
    );
  }

  if (!game) {
    return (
      <Layout>
        <div className="min-h-screen d-flex align-items-center justify-content-center text-white" style={{ background: '#2d1854' }}>
          <h2>Game Not Found</h2>
          <Link to="/games" className="site-btn ml-3">Back to Games</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="page-top-section set-bg" style={{ backgroundImage: `url('${game.image_url || '/assets/img/page-top-bg/1.jpg'}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="page-info" style={{ background: 'rgba(0,0,0,0.6)', padding: '20px', borderRadius: '10px' }}>
          <h2>{game.title}</h2>
          <div className="site-breadcrumb">
            <Link to="/">Home</Link> /
            <Link to="/games">Games</Link> /
            <span>{game.title}</span>
          </div>
        </div>
      </section>

      <section className="games-single-page spad">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-7 game-single-content">
              <div className="gs-meta">Developer / <a href="#">{game.developer_name || 'Community'}</a></div>
              <h2 className="gs-title">{game.title}</h2>
              
              <div className="game-container mt-5" style={{ background: '#1c0f36', padding: '20px', borderRadius: '15px', border: '1px solid #b01ba5' }}>
                {!gameActive ? (
                  <div className="start-screen text-center py-5">
                    <img src={game.image_url} alt={game.title} style={{ maxWidth: '300px', borderRadius: '10px', marginBottom: '30px', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }} />
                    <h3 className="text-white mb-4">Ready to Play?</h3>
                    <p className="text-white-50 mb-4">{game.description}</p>
                    <button className="site-btn" onClick={handleStartGame}>▶ Start Game</button>
                  </div>
                ) : (
                  <div className="iframe-container" style={{ position: 'relative', width: '100%', height: '600px', overflow: 'hidden', borderRadius: '10px' }}>
                    <iframe 
                      src={game.game_file} 
                      title={game.title}
                      style={{ width: '100%', height: '100%', border: 'none' }}
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
            
            <div className="col-xl-3 col-lg-4 col-md-5 sidebar game-page-sideber">
              <div id="stickySidebar">
                <div className="widget-item">
                  <div className="rating-widget">
                    <h4 className="widget-title">Game Info</h4>
                    <ul>
                      <li>Category<span>{game.category_id?.name || 'Uncategorized'}</span></li>
                      <li>Developer<span>{game.developer_name || 'N/A'}</span></li>
                    </ul>
                    <div className="rating mt-4">
                      <h5><i>Play Now!</i></h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PlayGame;
