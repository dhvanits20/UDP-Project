import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, [navigate]);

  const fetchUsers = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    
    try {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const response = await axios.get('http://localhost:5000/api/admin/users', config);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users', error);
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    } finally {
      setLoading(false);
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

          <Link to="/admin/users" className="dash-nav-item active">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              <span>Users & Devs</span>
            </div>
          </Link>

          <Link to="/admin/reviews" className="dash-nav-item">
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
            <h2>User & Developer Management</h2>
            <p>View, inspect, and manage all accounts on the platform.</p>
          </div>
          <Link to="/admin/dashboard" className="dash-btn-secondary">
            ← Overview
          </Link>
        </header>

        <div className="dashboard-card">
          <div className="dashboard-card-header">
            <h3>
              <svg style={{ width: '20px', height: '20px', color: '#d946ef' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
              Registered Users ({users.length})
            </h3>
          </div>

          <div className="dash-table-wrapper">
            {loading ? (
              <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>Loading users...</div>
            ) : (
              <table className="dash-table">
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Joined Date</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map((user, idx) => (
                      <tr key={idx}>
                        <td style={{ fontWeight: 700, color: '#fff' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: user.role === 'admin' ? 'linear-gradient(135deg, #ef4444, #b91c1c)' : user.role === 'developer' ? 'linear-gradient(135deg, #b01ba5, #771680)' : 'linear-gradient(135deg, #3b82f6, #1d4ed8)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#fff', fontSize: '12px', flexShrink: 0 }}>
                              {user.name?.substring(0, 2).toUpperCase()}
                            </div>
                            <span>{user.name}</span>
                          </div>
                        </td>
                        <td style={{ color: '#cbd5e1' }}>{user.email}</td>
                        <td>
                          <span className={`dash-badge ${user.role === 'admin' ? 'dash-badge-danger' : user.role === 'developer' ? 'dash-badge-warning' : 'dash-badge-success'}`}>
                            {user.role}
                          </span>
                        </td>
                        <td style={{ color: '#94a3b8' }}>{new Date(user.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" style={{ textAlign: 'center', padding: '30px', color: '#94a3b8' }}>No users found.</td>
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

export default AdminUsers;
