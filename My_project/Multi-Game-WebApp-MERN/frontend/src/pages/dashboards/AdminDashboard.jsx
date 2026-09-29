import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import './Dashboard.css';

const AdminDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [stats, setStats] = useState({ 
    totalGames: 0, 
    totalPlayers: 0, 
    totalDevelopers: 0, 
    pendingSubmissions: 0,
    pendingDevs: 0,
    totalRevenue: 0,
    grossRevenue: 0,
    totalLoss: 0
  });
  const [recentGames, setRecentGames] = useState([]);
  const [topScores, setTopScores] = useState([]);
  const [contactMessages, setContactMessages] = useState([]);
  const [pdfGenerating, setPdfGenerating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
      
      try {
        setLoading(true);
        setError(null);
        const config = { headers: { Authorization: `Bearer ${token}` } };
        const response = await axios.get('http://localhost:5000/api/admin/dashboard', config);
        
        if (response.data && response.data.user) {
          setUserData(response.data.user);
          setStats({
            totalGames: response.data.totalGames || 0,
            totalPlayers: response.data.totalPlayers || 0,
            totalDevelopers: response.data.totalDevelopers || 0,
            pendingSubmissions: response.data.pendingSubmissions || 0,
            pendingDevs: response.data.pendingDevs || 0,
            totalRevenue: response.data.totalRevenue || 0,
            grossRevenue: response.data.grossRevenue || 0,
            totalLoss: response.data.totalLoss || 0,
          });
          setRecentGames(response.data.recentGames || []);
          setTopScores(response.data.topScores || []);

          // Fetch contact messages
          try {
            const contactRes = await axios.get('http://localhost:5000/api/contact/all', config);
            setContactMessages(contactRes.data || []);
          } catch (e) {
            console.log('Contact messages fetch note:', e.message);
          }
        } else {
          throw new Error('Admin data not found');
        }
      } catch (err) {
        console.error('Error fetching admin dashboard data', err);
        const status = err.response?.status;
        if (status === 401 || status === 403 || status === 404) {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          navigate('/login');
          return;
        }
        setError(err.response?.data?.message || err.message || 'Failed to load admin data');
      } finally {
        setLoading(false);
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

  const exportPDF = () => {
    try {
      setPdfGenerating(true);
      const doc = new jsPDF();

      // Title & Header Banner
      doc.setFillColor(28, 8, 46);
      doc.rect(0, 0, 210, 32, 'F');
      
      doc.setFontSize(20);
      doc.setTextColor(255, 255, 255);
      doc.text("ENDGAME Pro Admin - Statistical Report", 14, 20);

      doc.setFontSize(10);
      doc.setTextColor(200, 200, 200);
      doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 27);
      
      // Core Metrics Table
      autoTable(doc, {
        startY: 40,
        theme: 'striped',
        headStyles: { fillColor: [176, 27, 165], textColor: [255, 255, 255], fontStyle: 'bold' },
        head: [['System Metric', 'Current Value']],
        body: [
          ['Total Catalog Games', String(stats.totalGames)],
          ['Registered Players', String(stats.totalPlayers)],
          ['Verified Developers', String(stats.totalDevelopers)],
          ['Pending Game Submissions', String(stats.pendingSubmissions)],
          ['Platform Net Profit', `$${Number(stats.totalRevenue).toLocaleString()}`],
        ],
      });

      const nextY = doc.lastAutoTable ? doc.lastAutoTable.finalY + 15 : 110;

      // Recent Games Table
      if (recentGames.length > 0) {
        doc.setFontSize(13);
        doc.setTextColor(28, 8, 46);
        doc.text("Recently Added Games", 14, nextY);

        autoTable(doc, {
          startY: nextY + 5,
          theme: 'grid',
          headStyles: { fillColor: [119, 22, 128], textColor: [255, 255, 255], fontStyle: 'bold' },
          head: [['Title', 'Category', 'Status', 'Date Added']],
          body: recentGames.map(game => [
            game.title || 'Untitled', 
            game.category_id?.name || 'Uncategorized', 
            game.status === 'public' ? 'Active' : 'Inactive',
            new Date(game.createdAt).toLocaleDateString()
          ]),
        });
      }

      doc.save(`Endgame_Report_${new Date().toISOString().slice(0, 10)}.pdf`);
    } catch (err) {
      console.error("PDF Export Error:", err);
      alert("Failed to export PDF: " + err.message);
    } finally {
      setPdfGenerating(false);
    }
  };

  if (loading) {
    return (
      <div className="dashboard-wrapper" style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '48px', height: '48px', border: '4px solid #b01ba5', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite', margin: '0 auto 16px' }}></div>
          <p style={{ color: '#fff', fontSize: '16px', fontWeight: 600 }}>Loading Admin Suite...</p>
        </div>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (error || !userData) {
    return (
      <div className="dashboard-wrapper" style={{ alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '40px', background: 'rgba(255,255,255,0.04)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', maxWidth: '440px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔒</div>
          <h3 style={{ color: '#fff', marginBottom: '10px' }}>Admin Access Required</h3>
          <p style={{ color: '#94a3b8', marginBottom: '24px', fontSize: '14px' }}>
            {error || 'Your admin session is expired or unauthorized. Please log in with admin credentials.'}
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button onClick={handleLogout} className="dash-btn-primary">
              Log In as Admin
            </button>
            <Link to="/" className="dash-btn-secondary">
              Return Home
            </Link>
          </div>
        </div>
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
                PRO ADMIN
              </div>
            </div>
          </Link>
        </div>

        <nav className="dashboard-sidebar-nav">
          <div className="dashboard-sidebar-section-title">Core</div>
          <Link to="/admin/dashboard" className="dash-nav-item active">
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
            {stats.pendingSubmissions > 0 && (
              <span className="dash-nav-badge">{stats.pendingSubmissions}</span>
            )}
          </Link>

          <Link to="/admin/users" className="dash-nav-item">
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

          <a href="#contact-inbox" className="dash-nav-item">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              <span>Contact Inbox</span>
            </div>
            {contactMessages.length > 0 && (
              <span className="dash-nav-badge" style={{ background: '#38bdf8' }}>{contactMessages.length}</span>
            )}
          </a>
        </nav>

        {/* Profile Footer */}
        <div className="dashboard-sidebar-footer">
          <div className="dash-profile-card">
            <div className="dash-avatar" style={{ background: 'linear-gradient(135deg, #771680 0%, #d946ef 100%)' }}>
              {userData.name?.substring(0, 2).toUpperCase() || 'AD'}
            </div>
            <div className="dash-profile-info">
              <div className="dash-profile-name">{userData.name || 'Admin'}</div>
              <div className="dash-profile-role" style={{ color: '#4ade80' }}>Super Admin</div>
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
            <h2>Admin Control Center</h2>
            <p>System operating at <span style={{ color: '#4ade80', fontWeight: 600 }}>100% capacity</span>. All services active.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <button onClick={exportPDF} className="dash-btn-secondary">
              <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
              Export PDF Report
            </button>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '12px', background: 'rgba(34, 197, 94, 0.12)', border: '1px solid rgba(34, 197, 94, 0.3)', color: '#4ade80', fontSize: '12px', fontWeight: 700 }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#4ade80', display: 'inline-block', boxShadow: '0 0 8px #4ade80' }}></span>
              SYSTEM LIVE
            </div>
          </div>
        </header>

        {/* 5 Stats Cards */}
        <div className="dash-stat-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
          <div className="dash-stat-card">
            <div className="dash-stat-icon purple">
              <svg style={{ width: '22px', height: '22px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
            </div>
            <div className="dash-stat-label">Total Games</div>
            <div className="dash-stat-val">{stats.totalGames}</div>
            <div className="dash-stat-sub">Active catalog</div>
          </div>

          <div className="dash-stat-card">
            <div className="dash-stat-icon blue">
              <svg style={{ width: '22px', height: '22px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
            <div className="dash-stat-label">Total Players</div>
            <div className="dash-stat-val">{stats.totalPlayers}</div>
            <div className="dash-stat-sub">Registered gamers</div>
          </div>

          <div className="dash-stat-card">
            <div className="dash-stat-icon pink">
              <svg style={{ width: '22px', height: '22px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
            </div>
            <div className="dash-stat-label">Developers</div>
            <div className="dash-stat-val">{stats.totalDevelopers}</div>
            <div className="dash-stat-sub">Verified creators</div>
          </div>

          <div className="dash-stat-card">
            <div className="dash-stat-icon amber">
              <svg style={{ width: '22px', height: '22px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div className="dash-stat-label">Pending Requests</div>
            <div className="dash-stat-val">{stats.pendingSubmissions}</div>
            <div className="dash-stat-sub">Require approval</div>
          </div>

          <div className="dash-stat-card" style={{ border: '1px solid rgba(74, 222, 128, 0.25)' }}>
            <div className="dash-stat-icon" style={{ background: 'rgba(34, 197, 94, 0.18)', color: '#4ade80' }}>
              <svg style={{ width: '22px', height: '22px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div className="dash-stat-label">Net Profit</div>
            <div className="dash-stat-val" style={{ color: '#4ade80' }}>${stats.totalRevenue.toLocaleString()}</div>
            <div className="dash-stat-sub">Platform earnings</div>
          </div>
        </div>

        {/* Content Section: Recent Games & Global Top Scores */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {/* Recently Added Games */}
          <div className="dashboard-card" style={{ gridColumn: 'span 2' }}>
            <div className="dashboard-card-header">
              <h3>
                <svg style={{ width: '20px', height: '20px', color: '#d946ef' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"></path></svg>
                Recently Added Games
              </h3>
              <Link to="/admin/games" style={{ color: '#d946ef', fontSize: '13px', fontWeight: 700, textDecoration: 'none' }}>
                Manage All →
              </Link>
            </div>

            <div className="dash-table-wrapper">
              <table className="dash-table">
                <thead>
                  <tr>
                    <th>Game Title</th>
                    <th>Category</th>
                    <th>Date Added</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentGames.length > 0 ? (
                    recentGames.map((game, idx) => (
                      <tr key={idx}>
                        <td style={{ fontWeight: 700, color: '#fff' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'linear-gradient(135deg, #b01ba5, #771680)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#fff', flexShrink: 0 }}>
                              {game.title?.substring(0, 1).toUpperCase()}
                            </div>
                            <span>{game.title}</span>
                          </div>
                        </td>
                        <td style={{ color: '#cbd5e1' }}>{game.category_id?.name || 'Uncategorized'}</td>
                        <td style={{ color: '#94a3b8' }}>{new Date(game.createdAt).toLocaleDateString()}</td>
                        <td>
                          <span className={`dash-badge ${game.status === 'public' ? 'dash-badge-success' : 'dash-badge-danger'}`}>
                            {game.status === 'public' ? 'Active' : 'Inactive'}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" style={{ textAlign: 'center', padding: '30px', color: '#94a3b8' }}>No games found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Quick Actions & Top Scores */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <h3>Quick Actions</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <Link to="/developer/submit-game" className="dash-btn-primary" style={{ width: '100%' }}>
                  <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                  Upload New Game
                </Link>
                <Link to="/admin/requests" className="dash-btn-secondary" style={{ width: '100%' }}>
                  <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Review Pending Requests ({stats.pendingSubmissions})
                </Link>
                <Link to="/admin/users" className="dash-btn-secondary" style={{ width: '100%' }}>
                  <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                  Manage Users & Devs
                </Link>
              </div>
            </div>

            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <h3>
                  <svg style={{ width: '20px', height: '20px', color: '#fbbf24' }} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path></svg>
                  Top Global Scores
                </h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {topScores.length > 0 ? (
                  topScores.slice(0, 5).map((score, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.03)' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span style={{ fontWeight: 800, color: '#d946ef', fontSize: '13px', width: '20px' }}>#{idx + 1}</span>
                        <div>
                          <p style={{ fontWeight: 700, color: '#fff', fontSize: '13px', margin: 0 }}>{score.user_id?.name || 'Player'}</p>
                          <p style={{ fontSize: '11px', color: '#94a3b8', margin: 0 }}>{score.game_id?.title || 'Game'}</p>
                        </div>
                      </div>
                      <span style={{ fontWeight: 800, color: '#fbbf24', fontFamily: "'Orbitron', sans-serif", fontSize: '15px' }}>
                        {score.score.toLocaleString()}
                      </span>
                    </div>
                  ))
                ) : (
                  <p style={{ color: '#94a3b8', fontSize: '13px', textAlign: 'center', padding: '20px 0' }}>No high scores recorded yet.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Inquiries Inbox (Full Width Down Below) */}
        <div className="dashboard-card" id="contact-inbox" style={{ marginTop: '28px' }}>
          <div className="dashboard-card-header">
            <h3>
              <svg style={{ width: '20px', height: '20px', color: '#38bdf8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              Contact Inquiries Inbox ({contactMessages.length})
            </h3>
            <span style={{ fontSize: '12px', color: '#94a3b8' }}>
              Forwarded directly to: <strong style={{ color: '#e2e8f0' }}>dhvanitcshah172006@gmail.com</strong>
            </span>
          </div>

          <div className="dash-table-wrapper">
            <table className="dash-table">
              <thead>
                <tr>
                  <th>Sender</th>
                  <th>Subject</th>
                  <th>Message</th>
                  <th>Date</th>
                  <th style={{ textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {contactMessages.length > 0 ? (
                  contactMessages.map((msg, idx) => (
                    <tr key={idx}>
                      <td>
                        <div style={{ fontWeight: 700, color: '#fff' }}>{msg.name}</div>
                        <div style={{ fontSize: '12px', color: '#94a3b8' }}>{msg.email}</div>
                      </td>
                      <td style={{ color: '#d946ef', fontWeight: 600 }}>{msg.subject}</td>
                      <td style={{ color: '#cbd5e1', maxWidth: '380px' }}>
                        {msg.message}
                      </td>
                      <td style={{ color: '#94a3b8', fontSize: '12px' }}>
                        {new Date(msg.createdAt).toLocaleDateString()}
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <a 
                          href={`mailto:${msg.email}?subject=Re: ${encodeURIComponent(msg.subject)}`}
                          className="dash-btn-secondary"
                          style={{ padding: '6px 12px', fontSize: '11px', display: 'inline-flex', alignItems: 'center', gap: '5px', textDecoration: 'none' }}
                        >
                          <svg style={{ width: '12px', height: '12px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path></svg>
                          Reply
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center', padding: '30px', color: '#94a3b8' }}>No contact inquiries received yet.</td>
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

export default AdminDashboard;
