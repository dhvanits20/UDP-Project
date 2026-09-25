import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

const AdminReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchReviews();
  }, [navigate]);

  const fetchReviews = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    
    try {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const response = await axios.get('http://localhost:5000/api/admin/reviews', config);
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews', error);
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this review?")) {
      try {
        const token = localStorage.getItem('token');
        const config = { headers: { Authorization: `Bearer ${token}` } };
        await axios.delete(`http://localhost:5000/api/admin/reviews/${id}`, config);
        fetchReviews();
      } catch (error) {
        console.error('Error deleting review', error);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
    window.location.reload();
  };

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
                PRO ADMIN
              </div>
            </div>
          </Link>
        </div>

        <nav className="dashboard-sidebar-nav">
          <div className="dashboard-sidebar-section-title">Core</div>
          <Link to="/admin/dashboard" className="dash-nav-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              <span>Overview</span>
            </div>
          </Link>

          <Link to="/" className="dash-nav-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
              <span>Live Site</span>
            </div>
          </Link>

          <div className="dashboard-sidebar-section-title">Management</div>
          <Link to="/admin/games" className="dash-nav-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
              <span>Games</span>
            </div>
          </Link>

          <Link to="/admin/requests" className="dash-nav-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>Requests</span>
            </div>
          </Link>

          <Link to="/admin/users" className="dash-nav-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              <span>Users & Devs</span>
            </div>
          </Link>

          <Link to="/admin/reviews" className="dash-nav-item active">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
              <span>Reviews</span>
            </div>
          </Link>
        </nav>

        <div className="dashboard-sidebar-footer">
          <button onClick={handleLogout} className="dash-btn-secondary" style={{ width: '100%', padding: '8px', fontSize: '12px' }}>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="dashboard-header-title">
            <h2>Community Reviews Moderation</h2>
            <p>Review, moderate, and remove spam or inappropriate ratings.</p>
          </div>
          <Link to="/admin/dashboard" className="dash-btn-secondary">
            ← Overview
          </Link>
        </header>

        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <h3>
              <svg style={{ width: '20px', height: '20px', color: '#d946ef' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
              User Reviews ({reviews.length})
            </h3>
          </div>

          <div className="dash-table-wrapper">
            {loading ? (
              <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>Loading reviews...</div>
            ) : (
              <table className="dash-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Game</th>
                    <th>Rating</th>
                    <th>Comment</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.length > 0 ? (
                    reviews.map((review, idx) => (
                      <tr key={idx}>
                        <td style={{ fontWeight: 700, color: '#fff' }}>{review.user_id?.name || 'Player'}</td>
                        <td style={{ color: '#d946ef', fontWeight: 600 }}>{review.game_id?.title || 'Game'}</td>
                        <td style={{ color: '#fbbf24', fontSize: '15px' }}>
                          {'★'.repeat(review.rating || 5)}{'☆'.repeat(5 - (review.rating || 5))}
                        </td>
                        <td style={{ color: '#cbd5e1', maxWidth: '300px' }}>{review.comment}</td>
                        <td style={{ textAlign: 'right' }}>
                          <button 
                            onClick={() => handleDelete(review._id)}
                            className="dash-btn-secondary"
                            style={{ padding: '6px 12px', fontSize: '12px', color: '#f87171', borderColor: 'rgba(239, 68, 68, 0.3)', background: 'rgba(239, 68, 68, 0.1)' }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" style={{ textAlign: 'center', padding: '30px', color: '#94a3b8' }}>No reviews found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminReviews;
