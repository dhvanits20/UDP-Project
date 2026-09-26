import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import axios from 'axios';
import './Dashboard.css';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState(null);
  const [scores, setScores] = useState([]);
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
      
      try {
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const response = await axios.get('http://localhost:5000/api/users/dashboard', config);
        
        setUserData(response.data.user);
        setScores(response.data.scores || []);
        setReviews(response.data.reviews || []);
      } catch (error) {
        console.error('Error fetching dashboard data', error);
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
        }
      }
    };

    fetchDashboardData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
    window.location.reload();
  };

  if (!userData) {
    return (
      <Layout>
        <div style={{ padding: '120px 0', textAlign: 'center', background: '#1c082e', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '48px', height: '48px', border: '4px solid #b01ba5', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite', marginBottom: '16px' }}></div>
          <p style={{ color: '#fff', fontSize: '18px', fontWeight: 600 }}>Loading Gamer Profile...</p>
        </div>
      </Layout>
    );
  }

  const initials = userData.name ? userData.name.substring(0, 2).toUpperCase() : 'GM';

  return (
    <Layout>
      <section className="page-top-section set-bg" style={{ backgroundImage: "url('/assets/img/page-top-bg/4.jpg')" }}>
        <div className="page-info">
          <h2>Player Profile</h2>
          <div className="site-breadcrumb">
            <Link to="/">Home</Link> /
            <span>Dashboard</span>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0 100px 0', background: 'linear-gradient(180deg, #1c082e 0%, #120420 100%)' }}>
        <div className="container">
          <div className="row">
            
            {/* Redesigned Left Gaming Profile Sidebar */}
            <div className="col-lg-4 col-md-5 mb-4">
              <aside className="user-dash-sidebar">
                <div className="user-dash-profile-card">
                  <div className="user-dash-avatar">
                    {initials}
                  </div>
                  <h3 className="user-dash-name">{userData.name}</h3>
                  <div className="user-dash-role-badge">
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', display: 'inline-block' }}></span>
                    PRO GAMER
                  </div>
                  <div>
                    <div className="user-dash-coins-pill">
                      <span>🪙</span>
                      <span>{userData.coins || 0} Coins</span>
                    </div>
                  </div>
                </div>

                <nav className="user-dash-nav">
                  <button 
                    className={`user-dash-btn ${activeTab === 'profile' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('profile')}
                  >
                    <div className="user-dash-btn-content">
                      <svg className="user-dash-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>Overview</span>
                    </div>
                  </button>

                  <button 
                    className={`user-dash-btn ${activeTab === 'scores' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('scores')}
                  >
                    <div className="user-dash-btn-content">
                      <svg className="user-dash-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span>My High Scores</span>
                    </div>
                    {scores.length > 0 && (
                      <span className="dash-nav-badge">{scores.length}</span>
                    )}
                  </button>

                  <button 
                    className={`user-dash-btn ${activeTab === 'achievements' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('achievements')}
                  >
                    <div className="user-dash-btn-content">
                      <svg className="user-dash-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      <span>Achievements</span>
                    </div>
                  </button>

                  <button 
                    className={`user-dash-btn ${activeTab === 'rewards' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('rewards')}
                  >
                    <div className="user-dash-btn-content">
                      <svg className="user-dash-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                      </svg>
                      <span>Rewards Shop</span>
                    </div>
                  </button>

                  <button 
                    className={`user-dash-btn ${activeTab === 'reviews' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('reviews')}
                  >
                    <div className="user-dash-btn-content">
                      <svg className="user-dash-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      <span>My Reviews</span>
                    </div>
                  </button>
                </nav>

                <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <Link to="/games" className="dash-btn-secondary" style={{ width: '100%', marginBottom: '10px' }}>
                    <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Browse All Games
                  </Link>
                  <button onClick={handleLogout} className="dash-btn-secondary" style={{ width: '100%', color: '#f87171' }}>
                    <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                  </button>
                </div>
              </aside>
            </div>

            {/* Right Content Area */}
            <div className="col-lg-8 col-md-7">
              <main className="user-dash-content-card">
                
                {/* 1. OVERVIEW TAB */}
                {activeTab === 'profile' && (
                  <div>
                    <div className="dashboard-card-header" style={{ marginBottom: '10px' }}>
                      <div>
                        <h3>Player Profile Overview</h3>
                        <p style={{ color: '#94a3b8', fontSize: '14px', marginTop: '4px' }}>Welcome back, {userData.name}! Here is your gaming activity snapshot.</p>
                      </div>
                    </div>

                    <div className="user-overview-grid">
                      <div className="user-overview-card">
                        <div className="user-overview-label">Player Name</div>
                        <div className="user-overview-val">{userData.name}</div>
                      </div>

                      <div className="user-overview-card">
                        <div className="user-overview-label">Verified Email</div>
                        <div className="user-overview-val" style={{ fontSize: '15px' }}>{userData.email}</div>
                      </div>

                      <div className="user-overview-card">
                        <div className="user-overview-label">Coin Wallet</div>
                        <div className="user-overview-val" style={{ color: '#fbbf24', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span>🪙</span>
                          <span>{userData.coins || 0}</span>
                        </div>
                      </div>

                      <div className="user-overview-card">
                        <div className="user-overview-label">Member Since</div>
                        <div className="user-overview-val">{new Date(userData.createdAt).toLocaleDateString()}</div>
                      </div>
                    </div>

                    {/* Quick Jump Into Games */}
                    <div style={{ marginTop: '36px' }}>
                      <h4 style={{ fontSize: '18px', color: '#fff', fontWeight: 700, marginBottom: '16px' }}>Quick Play Now</h4>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                        <Link to="/chess" className="user-overview-card" style={{ textDecoration: 'none', display: 'block' }}>
                          <div style={{ fontSize: '24px', marginBottom: '8px' }}>♟️</div>
                          <div style={{ fontWeight: 700, color: '#fff' }}>Classic Chess AI</div>
                          <div style={{ fontSize: '12px', color: '#94a3b8' }}>Challenge engine</div>
                        </Link>
                        <Link to="/tictactoe" className="user-overview-card" style={{ textDecoration: 'none', display: 'block' }}>
                          <div style={{ fontSize: '24px', marginBottom: '8px' }}>❌⭕</div>
                          <div style={{ fontWeight: 700, color: '#fff' }}>Tic-Tac-Toe</div>
                          <div style={{ fontSize: '12px', color: '#94a3b8' }}>Local & AI mode</div>
                        </Link>
                        <Link to="/games" className="user-overview-card" style={{ textDecoration: 'none', display: 'block' }}>
                          <div style={{ fontSize: '24px', marginBottom: '8px' }}>🕹️</div>
                          <div style={{ fontWeight: 700, color: '#fff' }}>Game Catalog</div>
                          <div style={{ fontSize: '12px', color: '#94a3b8' }}>Browse all titles</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. MY SCORES TAB */}
                {activeTab === 'scores' && (
                  <div>
                    <div className="dashboard-card-header">
                      <h3>Recent High Scores</h3>
                      <Link to="/games" className="dash-btn-primary" style={{ padding: '8px 16px', fontSize: '12px' }}>
                        Play More Games
                      </Link>
                    </div>

                    {scores.length > 0 ? (
                      <div className="dash-table-wrapper">
                        <table className="dash-table">
                          <thead>
                            <tr>
                              <th>Game Title</th>
                              <th>Score Earned</th>
                              <th>Date</th>
                              <th style={{ textAlign: 'right' }}>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {scores.map((score, idx) => (
                              <tr key={idx}>
                                <td style={{ fontWeight: 700, color: '#fff' }}>
                                  {score.game_id?.title || 'Unknown Game'}
                                </td>
                                <td>
                                  <span style={{ color: '#d946ef', fontWeight: 800, fontFamily: "'Orbitron', sans-serif" }}>
                                    {score.score} pts
                                  </span>
                                </td>
                                <td style={{ color: '#94a3b8' }}>
                                  {new Date(score.createdAt).toLocaleDateString()}
                                </td>
                                <td style={{ textAlign: 'right' }}>
                                  <Link to={`/play/${score.game_id?._id || ''}`} className="dash-btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>
                                    Play Again
                                  </Link>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div style={{ textAlign: 'center', padding: '50px 20px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px' }}>
                        <div style={{ fontSize: '48px', marginBottom: '14px' }}>🎮</div>
                        <h4 style={{ color: '#fff', marginBottom: '8px' }}>No Scores Recorded Yet</h4>
                        <p style={{ color: '#94a3b8', marginBottom: '24px' }}>Jump into any browser game to set your high scores on the leaderboard!</p>
                        <Link to="/games" className="dash-btn-primary">
                          Explore Games
                        </Link>
                      </div>
                    )}
                  </div>
                )}

                {/* 3. ACHIEVEMENTS TAB */}
                {activeTab === 'achievements' && (
                  <div>
                    <div className="dashboard-card-header">
                      <h3>Gamer Achievements</h3>
                      <span className="dash-badge dash-badge-warning">Rank: Novice</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                      <div className="user-overview-card" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <div style={{ fontSize: '32px' }}>🎯</div>
                        <div>
                          <h5 style={{ color: '#fff', fontSize: '15px', fontWeight: 700 }}>First Blood</h5>
                          <p style={{ fontSize: '12px', color: '#94a3b8' }}>Played your first game on ENDGAME</p>
                          <span className="dash-badge dash-badge-success" style={{ marginTop: '6px' }}>Unlocked</span>
                        </div>
                      </div>

                      <div className="user-overview-card" style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <div style={{ fontSize: '32px' }}>♟️</div>
                        <div>
                          <h5 style={{ color: '#fff', fontSize: '15px', fontWeight: 700 }}>Grandmaster in Training</h5>
                          <p style={{ fontSize: '12px', color: '#94a3b8' }}>Challenge and play against Chess AI</p>
                          <span className="dash-badge dash-badge-success" style={{ marginTop: '6px' }}>Unlocked</span>
                        </div>
                      </div>

                      <div className="user-overview-card" style={{ display: 'flex', gap: '16px', alignItems: 'center', opacity: 0.65 }}>
                        <div style={{ fontSize: '32px' }}>🪙</div>
                        <div>
                          <h5 style={{ color: '#fff', fontSize: '15px', fontWeight: 700 }}>Coin Collector</h5>
                          <p style={{ fontSize: '12px', color: '#94a3b8' }}>Earn 1,000 gaming coins</p>
                          <span className="dash-badge dash-badge-warning" style={{ marginTop: '6px' }}>In Progress (0/1000)</span>
                        </div>
                      </div>

                      <div className="user-overview-card" style={{ display: 'flex', gap: '16px', alignItems: 'center', opacity: 0.65 }}>
                        <div style={{ fontSize: '32px' }}>⭐</div>
                        <div>
                          <h5 style={{ color: '#fff', fontSize: '15px', fontWeight: 700 }}>Top Critic</h5>
                          <p style={{ fontSize: '12px', color: '#94a3b8' }}>Post 5 helpful game reviews</p>
                          <span className="dash-badge dash-badge-warning" style={{ marginTop: '6px' }}>In Progress ({reviews.length}/5)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. REWARDS SHOP TAB */}
                {activeTab === 'rewards' && (
                  <div>
                    <div className="dashboard-card-header">
                      <h3>Gamer Rewards Shop</h3>
                      <div className="user-dash-coins-pill">
                        <span>🪙 {userData.coins || 0} Coins Available</span>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                      <div className="user-overview-card" style={{ textAlign: 'center', padding: '28px 20px' }}>
                        <div style={{ fontSize: '40px', marginBottom: '12px' }}>✨</div>
                        <h5 style={{ color: '#fff', fontWeight: 700, fontSize: '16px' }}>Neon Gamer Avatar</h5>
                        <p style={{ fontSize: '12px', color: '#94a3b8', margin: '8px 0 16px' }}>Glowing violet ring border for your profile</p>
                        <button className="dash-btn-primary" style={{ width: '100%', fontSize: '13px' }} disabled={true}>
                          Redeem for 250 🪙
                        </button>
                      </div>

                      <div className="user-overview-card" style={{ textAlign: 'center', padding: '28px 20px' }}>
                        <div style={{ fontSize: '40px', marginBottom: '12px' }}>⚡</div>
                        <h5 style={{ color: '#fff', fontWeight: 700, fontSize: '16px' }}>2x Coin Booster</h5>
                        <p style={{ fontSize: '12px', color: '#94a3b8', margin: '8px 0 16px' }}>Double coins earned on browser games for 24h</p>
                        <button className="dash-btn-primary" style={{ width: '100%', fontSize: '13px' }} disabled={true}>
                          Redeem for 500 🪙
                        </button>
                      </div>

                      <div className="user-overview-card" style={{ textAlign: 'center', padding: '28px 20px' }}>
                        <div style={{ fontSize: '40px', marginBottom: '12px' }}>👑</div>
                        <h5 style={{ color: '#fff', fontWeight: 700, fontSize: '16px' }}>VIP Player Badge</h5>
                        <p style={{ fontSize: '12px', color: '#94a3b8', margin: '8px 0 16px' }}>Golden crown badge on your reviews</p>
                        <button className="dash-btn-primary" style={{ width: '100%', fontSize: '13px' }} disabled={true}>
                          Redeem for 1000 🪙
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. REVIEWS TAB */}
                {activeTab === 'reviews' && (
                  <div>
                    <div className="dashboard-card-header">
                      <h3>My Submitted Reviews</h3>
                      <Link to="/reviews" className="dash-btn-secondary" style={{ fontSize: '13px' }}>
                        Browse Community Reviews
                      </Link>
                    </div>

                    {reviews.length > 0 ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {reviews.map((review, idx) => (
                          <div key={idx} className="user-overview-card">
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                              <h5 style={{ color: '#fff', fontSize: '16px', fontWeight: 700 }}>
                                {review.game_id?.title || 'Game Review'}
                              </h5>
                              <div style={{ color: '#fbbf24', fontSize: '16px' }}>
                                {[...Array(5)].map((_, i) => (
                                  <span key={i}>{i < review.rating ? '★' : '☆'}</span>
                                ))}
                              </div>
                            </div>
                            <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: 1.6 }}>{review.comment}</p>
                            <div style={{ color: '#64748b', fontSize: '11px', marginTop: '10px' }}>
                              Reviewed on {new Date(review.createdAt).toLocaleDateString()}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div style={{ textAlign: 'center', padding: '50px 20px', background: 'rgba(255,255,255,0.02)', borderRadius: '16px' }}>
                        <div style={{ fontSize: '48px', marginBottom: '14px' }}>📝</div>
                        <h4 style={{ color: '#fff', marginBottom: '8px' }}>No Reviews Yet</h4>
                        <p style={{ color: '#94a3b8', marginBottom: '24px' }}>Play games and share your ratings with the ENDGAME community!</p>
                        <Link to="/games" className="dash-btn-primary">
                          Find Games to Review
                        </Link>
                      </div>
                    )}
                  </div>
                )}

              </main>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UserDashboard;
