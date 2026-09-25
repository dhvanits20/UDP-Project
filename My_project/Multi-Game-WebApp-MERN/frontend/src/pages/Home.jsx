import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [gamesRes, catRes] = await Promise.all([
          axios.get('http://localhost:5000/api/games'),
          axios.get('http://localhost:5000/api/games/categories')
        ]);
        setGames(gamesRes.data);
        setCategories(catRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const initScripts = () => {
      if (window.jQuery) {
        const $ = window.jQuery;
        
        // Background Set
        $('.set-bg').each(function() {
          var bg = $(this).data('setbg');
          if (bg) {
            $(this).css('background-image', 'url(' + bg + ')');
          }
        });

        // Hero Slider
        if ($('.hero-slider').length > 0) {
          if ($('.hero-slider').hasClass('owl-loaded')) {
            $('.hero-slider').trigger('destroy.owl.carousel');
            $('.hero-slider').find('.owl-stage-outer').children().unwrap();
            $('.hero-slider').removeClass('owl-center owl-loaded owl-text-select-on');
          }

          $('.hero-slider').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            mouseDrag: false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items: 1,
            autoplay: true,
            autoplayTimeout: 10000,
          });

          var dot = $('.hero-slider .owl-dot');
          dot.each(function() {
            var index = $(this).index() + 1;
            if(index < 10){
              $(this).html('0').append(index + '.');
            }else{
              $(this).html(index + '.');
            }
          });
        }
      }
    };
    
    setTimeout(initScripts, 200);
  }, [loading]); // Re-run when loading finishes and content is rendered

  // Prepare game data
  const spotlightGame = games.length > 0 ? games[0] : null;
  const otherGames = games.length > 1 ? games.slice(1, 4) : [];
  const trendingGames = games.slice(0, 3);

  return (
    <Layout>
      <section className="hero-section overflow-hidden">
        <div className="hero-slider owl-carousel">
          <div className="hero-item set-bg d-flex align-items-center justify-content-center text-center" data-setbg="/assets/img/slider-bg-1.jpg">
            <div className="container">
              <h2>Game on!</h2>
              <p>Fusce erat dui, venenatis et erat in, vulputate dignissim lacus. Donec vitae tempus dolor,<br/>sit amet elementum lorem. Ut cursus tempor turpis.</p>
              <Link to="/games" className="site-btn">Read More <img src="/assets/img/icons/double-arrow.png" alt="#" /></Link>
            </div>
          </div>
          <div className="hero-item set-bg d-flex align-items-center justify-content-center text-center" data-setbg="/assets/img/slider-bg-2.jpg">
            <div className="container">
              <h2>Game on!</h2>
              <p>Fusce erat dui, venenatis et erat in, vulputate dignissim lacus. Donec vitae tempus dolor,<br/>sit amet elementum lorem. Ut cursus tempor turpis.</p>
              <Link to="/games" className="site-btn">Read More <img src="/assets/img/icons/double-arrow.png" alt="#" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="intro-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="intro-text-box text-box text-white">
                <div className="top-meta">11.11.18 / in <Link to="/games">Games</Link></div>
                <h3>The best online game is out now!</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida....</p>
                <Link to="/games" className="read-more">Read More <img src="/assets/img/icons/double-arrow.png" alt="#" /></Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="intro-text-box text-box text-white">
                <div className="top-meta">11.11.18 / in <Link to="/games">Playstation</Link></div>
                <h3>Top 5 best games in november</h3>
                <p>Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum labore suspendisse ultrices gravida....</p>
                <Link to="/games" className="read-more">Read More <img src="/assets/img/icons/double-arrow.png" alt="#" /></Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="intro-text-box text-box text-white">
                <div className="top-meta">11.11.18 / in <Link to="/games">Reviews</Link></div>
                <h3>Get this game at a promo price</h3>
                <p>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida ncididunt ut labore ....</p>
                <Link to="/games" className="read-more">Read More <img src="/assets/img/icons/double-arrow.png" alt="#" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog section */}
      <section className="blog-section spad">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-7">
              <div className="section-title text-white">
                <h2>Latest Games</h2>
              </div>
              <ul className="blog-filter" style={{ position: 'relative', zIndex: 1000, pointerEvents: 'auto' }}>
                {categories.map(cat => (
                  <li key={cat._id}><Link to={`/games?genre=${cat.name}`}>{cat.name}</Link></li>
                ))}
              </ul>
              
              {!loading && spotlightGame && (
                <div className="blog-item" style={{ marginTop: '50px', overflow: 'hidden', display: 'flex', alignItems: 'flex-start' }}>
                  <div className="blog-thumb" style={{ flex: '0 0 320px', marginRight: '30px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', background: '#1a0628' }}>
                    <Link to={spotlightGame.title === 'Tic Tac Toe' ? '/tictactoe' : (spotlightGame.title === 'Chess' ? '/chess' : `/play/${spotlightGame._id}`)}>
                      <img src={spotlightGame.image_url} alt={spotlightGame.title} style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
                    </Link>
                  </div>
                  <div className="blog-text text-box text-white" style={{ flex: 1, marginBottom: 0, paddingTop: 0 }}>
                    <div className="top-meta" style={{ color: '#847ea1', fontSize: '13px', textTransform: 'uppercase', fontWeight: 700, marginBottom: '8px', letterSpacing: '1px' }}>
                      Recently Added / in <Link to={`/games?genre=${spotlightGame.category_id?.name}`} style={{ color: '#ff00ff' }}>{spotlightGame.category_id?.name || 'Strategy'}</Link>
                    </div>
                    <Link to={spotlightGame.title === 'Tic Tac Toe' ? '/tictactoe' : (spotlightGame.title === 'Chess' ? '/chess' : `/play/${spotlightGame._id}`)}>
                      <h3 className="text-white" style={{ fontSize: '26px', marginBottom: '15px', lineHeight: 1.2 }}>{spotlightGame.title}</h3>
                    </Link>
                    {spotlightGame.developer_name && (
                      <p className="mb-2 text-white-50" style={{ fontSize: '0.9rem' }}>By {spotlightGame.developer_name}</p>
                    )}
                    <p style={{ color: '#aaa6c7', fontSize: '15px', lineHeight: 1.6, marginBottom: '15px' }}>{spotlightGame.description}</p>
                    <Link to={spotlightGame.title === 'Tic Tac Toe' ? '/tictactoe' : (spotlightGame.title === 'Chess' ? '/chess' : `/play/${spotlightGame._id}`)} className="read-more">
                      PLAY GAME <img src="/assets/img/icons/double-arrow.png" alt="#" />
                    </Link>
                  </div>
                </div>
              )}

              {!loading && otherGames.map(og => (
                <div className="blog-item" key={og._id} style={{ marginTop: '50px', overflow: 'hidden', display: 'flex', alignItems: 'flex-start' }}>
                  <div className="blog-thumb" style={{ flex: '0 0 320px', marginRight: '30px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)', background: '#1a0628' }}>
                    <Link to={og.title === 'Tic Tac Toe' ? '/tictactoe' : (og.title === 'Chess' ? '/chess' : `/play/${og._id}`)}>
                      <img src={og.image_url} alt={og.title} style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
                    </Link>
                  </div>
                  <div className="blog-text text-box text-white" style={{ flex: 1, marginBottom: 0, paddingTop: 0 }}>
                    <div className="top-meta" style={{ color: '#847ea1', fontSize: '13px', textTransform: 'uppercase', fontWeight: 700, marginBottom: '8px', letterSpacing: '1px' }}>
                      Recently Added / in <Link to={`/games?genre=${og.category_id?.name}`} style={{ color: '#ff00ff' }}>{og.category_id?.name || 'Games'}</Link>
                    </div>
                    <Link to={og.title === 'Tic Tac Toe' ? '/tictactoe' : (og.title === 'Chess' ? '/chess' : `/play/${og._id}`)}>
                      <h3 className="text-white" style={{ fontSize: '26px', marginBottom: '15px', lineHeight: 1.2 }}>{og.title}</h3>
                    </Link>
                    <p style={{ color: '#aaa6c7', fontSize: '15px', lineHeight: 1.6, marginBottom: '15px' }}>{og.description}</p>
                    <Link to={og.title === 'Tic Tac Toe' ? '/tictactoe' : (og.title === 'Chess' ? '/chess' : `/play/${og._id}`)} className="read-more">
                      PLAY GAME <img src="/assets/img/icons/double-arrow.png" alt="#" />
                    </Link>
                  </div>
                </div>
              ))}
              
              {loading && <p className="text-white mt-5">Loading games...</p>}
              {!loading && games.length === 0 && <p className="text-white mt-5">No games found.</p>}
            </div>
            
            <div className="col-xl-3 col-lg-4 col-md-5 sidebar">
              <div id="stickySidebar">
                <div className="widget-item">
                  <h4 className="widget-title">Trending</h4>
                  <div className="trending-widget">
                    {trendingGames.map(game => (
                      <div className="tw-item" key={game._id} style={{ marginBottom: '25px', display: 'flex', alignItems: 'center' }}>
                        <div className="tw-thumb" style={{ flex: '0 0 70px', marginRight: '15px', borderRadius: '5px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                          <Link to={game.title === 'Tic Tac Toe' ? '/tictactoe' : (game.title === 'Chess' ? '/chess' : `/play/${game._id}`)}>
                            <img src={game.image_url} alt={game.title} style={{ width: '100%', height: '70px', objectFit: 'cover' }} />
                          </Link>
                        </div>
                        <div className="tw-text" style={{ flex: 1 }}>
                          <div className="tw-meta" style={{ fontSize: '12px', color: '#847ea1', marginBottom: '2px' }}>
                            <Link to={`/games?genre=${game.category_id?.name}`} style={{ color: '#ff00ff' }}>{game.category_id?.name || 'Games'}</Link>
                          </div>
                          <Link to={game.title === 'Tic Tac Toe' ? '/tictactoe' : (game.title === 'Chess' ? '/chess' : `/play/${game._id}`)}>
                            <h5 className="text-white" style={{ fontSize: '16px', marginBottom: '5px', lineHeight: 1.3 }}>{game.title}</h5>
                          </Link>
                        </div>
                      </div>
                    ))}
                    {!loading && trendingGames.length === 0 && (
                      <div className="tw-item"><div className="tw-text"><h5 className="text-white">No games found</h5></div></div>
                    )}
                  </div>
                </div>
                
                <div className="widget-item">
                  <div className="categories-widget">
                    <h4 className="widget-title">Categories</h4>
                    <ul>
                      {categories.map(cat => (
                        <li key={cat._id}><Link to={`/games?genre=${cat.name}`}>{cat.name}</Link></li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro video section */}
      <section className="intro-video-section set-bg d-flex align-items-end" data-setbg="/assets/img/promo-bg.jpg">
        <a href="https://www.youtube.com/watch?v=uFsGy5x_fyQ" className="video-play-btn video-popup">
          <img src="/assets/img/icons/solid-right-arrow.png" alt="#" />
        </a>
        <div className="container">
          <div className="video-text">
            <h2>Promo video of the game</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section className="tournaments-section spad">
        <div className="container">
          <div className="tournament-title">Meet Our Top Developers</div>
          <div className="row">
            <div className="col-md-4">
              <div className="tournament-item mb-4 mb-lg-0">
                <div className="ti-bg set-bg" style={{ backgroundImage: "url('/assets/img/review/1.jpg')" }}></div>
                <div className="ti-text">
                  <h4>Acme Studios</h4>
                  <p>Strategy & Puzzle Masterminds</p>
                  <span>15 Games Published</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="tournament-item mb-4 mb-lg-0">
                <div className="ti-bg set-bg" style={{ backgroundImage: "url('/assets/img/review/2.jpg')" }}></div>
                <div className="ti-text">
                  <h4>Neo Games</h4>
                  <p>Action & Adventure Specialists</p>
                  <span>8 Games Published</span>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="tournament-item">
                <div className="ti-bg set-bg" style={{ backgroundImage: "url('/assets/img/review/3.jpg')" }}></div>
                <div className="ti-text">
                  <h4>IndieDev Collective</h4>
                  <p>Retro & Arcade Creators</p>
                  <span>12 Games Published</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter section */}
      <section className="newsletter-section">
        <div className="container">
          <h2>Subscribe to our newsletter</h2>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="ENTER YOUR E-MAIL" />
            <button className="site-btn">subscribe <img src="/assets/img/icons/double-arrow.png" alt="#" /></button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
