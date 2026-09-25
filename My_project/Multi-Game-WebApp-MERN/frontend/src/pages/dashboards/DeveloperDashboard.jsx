import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

const DeveloperDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [stats, setStats] = useState({ totalGames: 0, totalPlays: 0, totalReviews: 0, pendingSubmissions: 0 });
  const [myGames, setMyGames] = useState([]);
  const [mySubmissions, setMySubmissions] = useState([]);
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
        const response = await axios.get('http://localhost:5000/api/developer/dashboard', config);
        
        setUserData(response.data.user);
        setStats({
          totalGames: response.data.totalGames || 0,
          totalPlays: response.data.totalPlays || 0,
          totalReviews: response.data.totalReviews || 0,
          pendingSubmissions: response.data.pendingSubmissions || 0
        });
        setMyGames(response.data.myGames || []);
        setMySubmissions(response.data.mySubmissions || []);
      } catch (error) {
        console.error('Error fetching developer dashboard data', error);
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

  const toggleVisibility = async (gameId) => {
    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.patch(`http://localhost:5000/api/games/${gameId}/toggle-status`, {}, config);
      
      setMyGames(myGames.map(game => {
        if (game._id === gameId) {
          return { ...game, status: game.status === 'public' ? 'private' : 'public' };
        }
        return game;
      }));
    } catch (error) {
      console.error('Failed to toggle visibility', error);
    }
  };

  if (!userData) {
    return (
      <div className="dashboard-wrapper" style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '48px', height: '48px', border: '4px solid #b01ba5', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 16px' }}></div>
          <p style={{ color: '#fff', fontSize: '16px', fontWeight: 600 }}>Loading Developer Portal...</p>
        </div>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="dashboard-sidebar-header">
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'linear-gradient(135deg, #b01ba5 0%, #771680 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(176,27,165,0.4)', flexShrink: 0 }}>
              <span style={{ color: '#fff', fontWeight: 900, fontSize: '18px', fontFamily: "'Roboto', sans-serif" }}>E</span>
            </div>
            <div className="site-logo-text" style={{ lineHeight: 1 }}>
              <span style={{ color: '#b01ba5', fontSize: '20px', fontWeight: 900, letterSpacing: '-0.5px' }}>END</span>
              <span style={{ color: '#fff', fontSize: '20px', fontWeight: 900, letterSpacing: '-0.5px' }}>GAME</span>
              <div style={{ color: '#d946ef', fontSize: '9px', fontWeight: 700, letterSpacing: '1px', marginTop: '2px', textTransform: 'uppercase' }}>
                DEVELOPER
              </div>
            </div>
          </Link>
        </div>

        <nav className="dashboard-sidebar-nav">
          <div className="dashboard-sidebar-section-title">Navigation</div>
          <Link to="/developer/dashboard" className="dash-nav-item active">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              <span>Dashboard</span>
            </div>
          </Link>

          <Link to="/developer/submit-game" className="dash-nav-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
              <span>Submit Game</span>
            </div>
          </Link>

          <Link to="/" className="dash-nav-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
              <span>View Website</span>
            </div>
          </Link>
        </nav>

        {/* Profile Footer */}
        <div className="dashboard-sidebar-footer">
          <div className="dash-profile-card">
            <div className="dash-avatar">
              {userData.name?.substring(0, 2).toUpperCase() || 'DV'}
            </div>
            <div className="dash-profile-info">
              <div className="dash-profile-name">{userData.name}</div>
              <div className="dash-profile-role">{userData.studio_name || 'Developer'}</div>
            </div>
            <button onClick={handleLogout} className="dash-logout-btn" title="Logout">
              <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="dashboard-header-title">
            <h2>Developer Dashboard</h2>
            <p>Welcome back, <strong style={{ color: '#fff' }}>{userData.name}</strong>. Manage your published games and submissions.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Link to="/" className="dash-btn-secondary">
              <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
              Back to Site
            </Link>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '12px', background: 'rgba(34, 197, 94, 0.12)', border: '1px solid rgba(34, 197, 94, 0.3)', color: '#4ade80', fontSize: '12px', fontWeight: 700 }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#4ade80', display: 'inline-block', boxShadow: '0 0 8px #4ade80' }}></span>
              DEVELOPER MODE
            </div>
          </div>
        </header>

        {/* 4 Stat Cards */}
        <div className="dash-stat-grid">
          <div className="dash-stat-card">
            <div className="dash-stat-icon purple">
              <svg style={{ width: '22px', height: '22px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 11-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
            </div>
            <div className="dash-stat-label">My Games</div>
            <div className="dash-stat-val">{stats.totalGames}</div>
            <div className="dash-stat-sub">{stats.totalGames > 0 ? 'Live on platform' : 'No games published yet'}</div>
          </div>

          <div className="dash-stat-card">
            <div className="dash-stat-icon blue">
              <svg style={{ width: '22px', height: '22px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
            </div>
            <div className="dash-stat-label">Total Plays</div>
            <div className="dash-stat-val">{stats.totalPlays}</div>
            <div className="dash-stat-sub">{stats.totalPlays > 0 ? 'Players engaged' : 'Growing audience'}</div>
          </div>

          <div className="dash-stat-card">
            <div className="dash-stat-icon pink">
              <svg style={{ width: '22px', height: '22px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
            </div>
            <div className="dash-stat-label">Total Reviews</div>
            <div className="dash-stat-val">{stats.totalReviews}</div>
            <div className="dash-stat-sub">{stats.totalReviews > 0 ? 'Community feedback' : 'Awaiting reviews'}</div>
          </div>

          <div className="dash-stat-card">
            <div className="dash-stat-icon amber">
              <svg style={{ width: '22px', height: '22px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div className="dash-stat-label">Pending Requests</div>
            <div className="dash-stat-val">{stats.pendingSubmissions}</div>
            <div className="dash-stat-sub">{stats.pendingSubmissions > 0 ? 'Under review' : 'All approved'}</div>
          </div>
        </div>

        {/* Content Columns: My Games & Quick Actions */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '30px' }}>
          {/* My Games */}
          <div className="dashboard-card" style={{ gridColumn: 'span 2' }}>
            <div className="dashboard-card-header">
              <h3>
                <svg style={{ width: '20px', height: '20px', color: '#d946ef' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
                My Games
              </h3>
              <span style={{ fontSize: '12px', color: '#d946ef', fontWeight: 700 }}>{stats.totalGames} TOTAL</span>
            </div>

            {myGames.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {myGames.map((game, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', borderRadius: '14px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '10px', overflow: 'hidden', background: 'linear-gradient(135deg, #b01ba5, #771680)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#fff', flexShrink: 0 }}>
                        {game.image_url ? (
                          <img src={game.image_url} alt={game.title} style={{ width: '100%', height: '100%', objectCover: 'cover' }} />
                        ) : (
                          game.title.substring(0, 1).toUpperCase()
                        )}
                      </div>
                      <div>
                        <h4 style={{ fontSize: '15px', fontWeight: 700, margin: 0, color: '#fff' }}>{game.title}</h4>
                        <p style={{ fontSize: '12px', color: '#94a3b8', margin: '2px 0 0' }}>{game.category_id?.name || 'Category'} • {game.reviews_count || 0} reviews</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span className={`dash-badge ${game.status === 'public' ? 'dash-badge-success' : 'dash-badge-danger'}`}>
                        {game.status === 'public' ? 'Active' : 'Private'}
                      </span>
                      <button onClick={() => toggleVisibility(game._id)} style={{ background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', color: '#fff', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '12px', fontWeight: 600 }} title="Toggle Public / Private">
                        Toggle
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'rgba(176, 27, 165, 0.12)', color: '#d946ef', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                  <svg style={{ width: '28px', height: '28px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 11-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path></svg>
                </div>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>No games published yet</h4>
                <p style={{ color: '#94a3b8', fontSize: '13px', marginTop: '4px' }}>Submit a new game request below to have it reviewed and published on the platform.</p>
              </div>
            )}
          </div>

          {/* Quick Actions & Profile */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <h3>Quick Actions</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link to="/developer/submit-game" className="dash-btn-primary" style={{ width: '100%' }}>
                  <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                  Submit New Game
                </Link>
                <Link to="/" className="dash-btn-secondary" style={{ width: '100%' }}>
                  <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                  View Live Site
                </Link>
              </div>
            </div>

            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <h3>Developer Profile</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#94a3b8' }}>Studio Name</span>
                  <p style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginTop: '2px' }}>{userData.studio_name || 'Independent Creator'}</p>
                </div>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.8px', color: '#94a3b8' }}>Email Address</span>
                  <p style={{ fontSize: '14px', color: '#d946ef', marginTop: '2px' }}>{userData.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submissions Tracker Table */}
        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <h3>
              <svg style={{ width: '20px', height: '20px', color: '#d946ef' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              My Submissions
            </h3>
            <Link to="/developer/submit-game" style={{ color: '#d946ef', fontSize: '13px', fontWeight: 700, textDecoration: 'none' }}>
              + New Request
            </Link>
          </div>

          <div className="dash-table-wrapper">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Game Title</th>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Date Submitted</th>
                </tr>
              </thead>
              <tbody>
                {mySubmissions.length > 0 ? (
                  mySubmissions.map((sub, idx) => (
                    <tr key={idx}>
                      <td style={{ fontWeight: 700, color: '#fff' }}>{sub.title}</td>
                      <td>{sub.category_id?.name || 'General'}</td>
                      <td>
                        <span className={`dash-badge ${sub.status === 'approved' ? 'dash-badge-success' : sub.status === 'pending' ? 'dash-badge-warning' : 'dash-badge-danger'}`}>
                          {sub.status}
                        </span>
                      </td>
                      <td style={{ color: '#94a3b8' }}>{new Date(sub.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" style={{ textAlign: 'center', padding: '30px', color: '#94a3b8' }}>
                      No game submissions found. Click "+ New Request" to submit your first game.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DeveloperDashboard;
