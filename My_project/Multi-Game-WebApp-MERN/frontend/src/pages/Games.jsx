import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Layout from '../components/Layout';
import axios from 'axios';

const Games = () => {
  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const genre = queryParams.get('genre');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [gamesRes, catRes] = await Promise.all([
          axios.get('http://localhost:5000/api/games'),
          axios.get('http://localhost:5000/api/games/categories')
        ]);
        setGames(gamesRes.data);
        setCategories(catRes.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredGames = genre ? games.filter(g => g.category_id?.name === genre) : games;

  return (
    <Layout>
      <section className="page-top-section set-bg" style={{ backgroundImage: "url('/assets/img/page-top-bg/1.jpg')" }}>
        <div className="page-info">
          <h2>Games</h2>
          <div className="site-breadcrumb">
            <Link to="/">Home</Link> /
            {genre ? (
              <>
                <Link to="/games">Games</Link> /
                <span>{genre}</span>
              </>
            ) : (
              <span>Games</span>
            )}
          </div>
        </div>
      </section>

      <section className="games-section">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-9 col-md-12">
              <div className="row">
                {loading ? (
                  <div className="col-12 text-white"><p>Loading games...</p></div>
                ) : filteredGames.length > 0 ? (
                  filteredGames.map(game => (
                    <div className="col-lg-4 col-md-6 mb-4" key={game._id}>
                      <div className="game-item position-relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '12px', transition: '0.3s', marginBottom: '30px' }}>
                        {game.category_id && (
                          <div className="category-tag" style={{ position: 'absolute', top: '25px', right: '25px', background: '#b01ba5', color: '#fff', fontSize: '10px', padding: '2px 10px', borderRadius: '20px', textTransform: 'uppercase', fontWeight: 'bold', zIndex: 10, boxShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>
                            {game.category_id.name}
                          </div>
                        )}
                        <Link to={game.title === 'Tic Tac Toe' ? '/tictactoe' : game.title === 'Chess' ? '/chess' : `/play/${game._id}`} className="text-decoration-none">
                          <img src={game.image_url} alt={game.title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '8px' }} />
                          <h5 className="mt-3 text-white">{game.title}</h5>
                        </Link>
                        <p className="text-white-50 small mb-2">{game.category_id?.name || 'Uncategorized'}</p>
                        <Link to={game.title === 'Tic Tac Toe' ? '/tictactoe' : game.title === 'Chess' ? '/chess' : `/play/${game._id}`} className="read-more">
                          Play Now <img src="/assets/img/icons/double-arrow.png" alt="#" />
                        </Link>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-white">
                    <p>No games available at the moment.</p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="col-xl-3 col-lg-4 col-md-5 sidebar game-page-sideber">
              <div id="stickySidebar">
                <div className="widget-item">
                  <div className="categories-widget">
                    <h4 className="widget-title">Categories / Genres</h4>
                    <ul>
                      <li><Link to="/games" style={!genre ? { color: '#ff00ff', fontWeight: 'bold' } : {}}>All Games</Link></li>
                      {categories.map(cat => (
                        <li key={cat._id}>
                          <Link to={`/games?genre=${cat.name}`} style={genre === cat.name ? { color: '#ff00ff', fontWeight: 'bold' } : {}}>
                            {cat.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
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

export default Games;
