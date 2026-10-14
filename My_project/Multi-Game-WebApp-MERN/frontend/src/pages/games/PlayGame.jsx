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
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submittingReview, setSubmittingReview] = useState(false);
  const [reviewFeedback, setReviewFeedback] = useState({ type: '', text: '' });
  const { checkLimitAndIncrement } = useGameLimit();

  const token = localStorage.getItem('token');

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
    fetchReviews();
  }, [id]);

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/games/${id}/reviews`);
      setReviews(res.data);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  };

  const handleStartGame = () => {
    if (!checkLimitAndIncrement()) return;
    setGameActive(true);
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      setReviewFeedback({ type: 'error', text: 'Please log in to submit a review and earn +15 coins!' });
      return;
    }

    setSubmittingReview(true);
    setReviewFeedback({ type: '', text: '' });

    try {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const res = await axios.post(`http://localhost:5000/api/games/${id}/reviews`, { rating, comment }, config);
      setReviewFeedback({ type: 'success', text: res.data.message || 'Review submitted! +15 Coins awarded 🪙' });
      setComment('');
      fetchReviews();

      if (res.data.totalCoins !== undefined) {
        const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
        localStorage.setItem('user', JSON.stringify({ ...storedUser, coins: res.data.totalCoins }));
      }
    } catch (err) {
      console.error("Error submitting review:", err);
      setReviewFeedback({ type: 'error', text: err.response?.data?.message || 'Failed to submit review' });
    } finally {
      setSubmittingReview(false);
    }
  };

  const avgRating = reviews.length > 0 
    ? (reviews.reduce((acc, r) => acc + (r.rating || 0), 0) / reviews.length).toFixed(1)
    : null;

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

      <section className="games-single-page spad" style={{ background: '#130424', minHeight: '80vh', padding: '60px 0 100px 0' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-7 game-single-content">
              <div className="gs-meta" style={{ color: '#d946ef', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                Developer / <span style={{ color: '#fff' }}>{game.developer_name || game.developer_email || 'Community'}</span>
              </div>
              <h2 className="gs-title" style={{ color: '#fff', fontSize: '36px', fontWeight: 800, marginTop: '8px' }}>{game.title}</h2>
              
              {/* Game Viewport Container */}
              <div className="game-container mt-4" style={{ background: '#1c0f36', padding: '24px', borderRadius: '18px', border: '1px solid rgba(176, 27, 165, 0.4)', boxShadow: '0 15px 35px rgba(0,0,0,0.5)' }}>
                {!gameActive ? (
                  <div className="start-screen text-center py-5">
                    <img src={game.image_url} alt={game.title} style={{ maxWidth: '320px', borderRadius: '12px', marginBottom: '24px', boxShadow: '0 10px 25px rgba(0,0,0,0.6)' }} />
                    <h3 className="text-white mb-3" style={{ fontWeight: 800 }}>Ready to Play?</h3>
                    <p className="text-white-50 mb-4" style={{ maxWidth: '540px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>{game.description}</p>
                    <button className="site-btn" onClick={handleStartGame} style={{ padding: '14px 34px', fontSize: '15px' }}>▶ Start Game</button>
                  </div>
                ) : (
                  <div className="iframe-container" style={{ position: 'relative', width: '100%', height: '620px', overflow: 'hidden', borderRadius: '12px' }}>
                    <iframe 
                      src={game.game_file} 
                      title={game.title}
                      style={{ width: '100%', height: '100%', border: 'none' }}
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>

              {/* Player Reviews & Feedback Section */}
              <div style={{ marginTop: '50px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '14px' }}>
                  <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: 800, margin: 0 }}>
                    Player Reviews ({reviews.length})
                  </h3>
                  {avgRating && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(251, 191, 36, 0.1)', padding: '6px 14px', borderRadius: '20px', border: '1px solid rgba(251, 191, 36, 0.3)' }}>
                      <span style={{ color: '#fbbf24', fontSize: '16px' }}>★</span>
                      <span style={{ color: '#fff', fontWeight: 800, fontSize: '15px' }}>{avgRating} / 5</span>
                    </div>
                  )}
                </div>

                {/* Submit Review Card */}
                <div style={{ background: '#1c0933', border: '1px solid rgba(176, 27, 165, 0.35)', borderRadius: '16px', padding: '24px', marginBottom: '32px' }}>
                  <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: 700, marginBottom: '12px' }}>
                    Rate & Review this Game
                  </h4>
                  <p style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '20px' }}>
                    Leave an honest review for {game.title} and earn <strong style={{ color: '#fbbf24' }}>+15 Gamer Coins</strong> into your wallet!
                  </p>

                  {reviewFeedback.text && (
                    <div style={{
                      padding: '12px 16px',
                      borderRadius: '10px',
                      marginBottom: '16px',
                      fontSize: '14px',
                      fontWeight: 600,
                      background: reviewFeedback.type === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                      color: reviewFeedback.type === 'success' ? '#34d399' : '#f87171',
                      border: `1px solid ${reviewFeedback.type === 'success' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
                    }}>
                      {reviewFeedback.text}
                    </div>
                  )}

                  {token ? (
                    <form onSubmit={handleReviewSubmit}>
                      {/* Interactive Star Picker */}
                      <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', color: '#cbd5e1', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
                          Your Rating
                        </label>
                        <div style={{ display: 'flex', gap: '6px', cursor: 'pointer' }}>
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span
                              key={star}
                              onMouseEnter={() => setHoverRating(star)}
                              onMouseLeave={() => setHoverRating(0)}
                              onClick={() => setRating(star)}
                              style={{
                                fontSize: '28px',
                                color: (hoverRating || rating) >= star ? '#fbbf24' : '#475569',
                                transition: 'color 0.15s, transform 0.15s',
                                transform: (hoverRating || rating) >= star ? 'scale(1.15)' : 'scale(1)'
                              }}
                            >
                              ★
                            </span>
                          ))}
                          <span style={{ marginLeft: '12px', alignSelf: 'center', color: '#fbbf24', fontWeight: 700, fontSize: '14px' }}>
                            {rating} / 5 Stars
                          </span>
                        </div>
                      </div>

                      {/* Comment Input */}
                      <div style={{ marginBottom: '16px' }}>
                        <label style={{ display: 'block', color: '#cbd5e1', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>
                          Your Review
                        </label>
                        <textarea
                          rows="3"
                          placeholder="What did you think of the gameplay, mechanics, and design?"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.12)',
                            borderRadius: '10px',
                            color: '#fff',
                            fontSize: '14px',
                            resize: 'vertical',
                            boxSizing: 'border-box'
                          }}
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={submittingReview}
                        className="site-btn"
                        style={{ padding: '10px 24px', fontSize: '13px' }}
                      >
                        {submittingReview ? 'Submitting...' : 'Post Review (+15 🪙)'}
                      </button>
                    </form>
                  ) : (
                    <div style={{ padding: '16px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ color: '#94a3b8', fontSize: '14px' }}>You must be logged in to leave a review and earn gamer coins.</span>
                      <Link to="/login" className="site-btn" style={{ padding: '8px 18px', fontSize: '12px' }}>
                        Log In Now
                      </Link>
                    </div>
                  )}
                </div>

                {/* Reviews List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {reviews.length > 0 ? (
                    reviews.map((rev) => (
                      <div
                        key={rev._id}
                        style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          borderRadius: '12px',
                          padding: '18px 20px'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '50%',
                              background: 'linear-gradient(135deg, #b01ba5, #771680)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontWeight: 800,
                              fontSize: '12px',
                              color: '#fff'
                            }}>
                              {(rev.user_id?.name || 'Player').substring(0, 2).toUpperCase()}
                            </div>
                            <span style={{ color: '#fff', fontWeight: 700, fontSize: '15px' }}>
                              {rev.user_id?.name || 'Player'}
                            </span>
                          </div>
                          <div style={{ color: '#fbbf24', fontSize: '14px' }}>
                            {'★'.repeat(rev.rating || 5)}{'☆'.repeat(5 - (rev.rating || 5))}
                          </div>
                        </div>
                        {rev.comment && (
                          <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: 1.6, margin: '8px 0 0 0' }}>
                            {rev.comment}
                          </p>
                        )}
                        <div style={{ color: '#64748b', fontSize: '11px', marginTop: '10px' }}>
                          Posted on {new Date(rev.createdAt).toLocaleDateString()}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div style={{ textAlign: 'center', padding: '36px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', color: '#94a3b8' }}>
                      <p style={{ margin: 0, fontSize: '15px' }}>No reviews yet for this title. Be the first player to rate it above!</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            {/* Sidebar Game Info */}
            <div className="col-xl-3 col-lg-4 col-md-5 sidebar game-page-sideber">
              <div id="stickySidebar">
                <div className="widget-item">
                  <div className="rating-widget" style={{ background: '#1c0f36', padding: '24px', borderRadius: '16px', border: '1px solid rgba(176, 27, 165, 0.3)' }}>
                    <h4 className="widget-title" style={{ color: '#fff', fontSize: '18px', fontWeight: 800, borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '12px', marginBottom: '16px' }}>
                      Game Info
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#94a3b8', fontSize: '14px' }}>
                        <span>Category</span>
                        <strong style={{ color: '#fff' }}>{game.category_id?.name || 'Uncategorized'}</strong>
                      </li>
                      <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#94a3b8', fontSize: '14px' }}>
                        <span>Developer</span>
                        <strong style={{ color: '#fff' }}>{game.developer_name || 'Community'}</strong>
                      </li>
                      <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#94a3b8', fontSize: '14px' }}>
                        <span>Rating</span>
                        <strong style={{ color: '#fbbf24' }}>
                          {avgRating ? `★ ${avgRating} / 5` : 'Not Rated'}
                        </strong>
                      </li>
                      <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', color: '#94a3b8', fontSize: '14px' }}>
                        <span>Total Reviews</span>
                        <strong style={{ color: '#fff' }}>{reviews.length}</strong>
                      </li>
                    </ul>
                    <div className="rating mt-4" style={{ textAlign: 'center' }}>
                      <h5 style={{ color: '#d946ef', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase' }}>
                        <i>Play & Review!</i>
                      </h5>
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
