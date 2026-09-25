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
        
        // Use Promise.all if multiple endpoints exist, otherwise one unified endpoint
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

  if (!userData) {
    return (
      <Layout>
        <div style={{ padding: '100px 0', textAlign: 'center', color: '#fff' }}>Loading Dashboard...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="page-top-section set-bg" style={{ backgroundImage: "url('/assets/img/page-top-bg/4.jpg')" }}>
        <div className="page-info">
          <h2>User Dashboard</h2>
          <div className="site-breadcrumb">
            <Link to="/">Home</Link> /
            <span>Dashboard</span>
          </div>
        </div>
      </section>

      <section className="contact-page" style={{ paddingTop: '50px', paddingBottom: '100px' }}>
        <div className="container">
          <div className="row">
            {/* Sidebar Tabs */}
            <div className="col-md-3 mb-4">
              <div className="nav flex-column nav-pills">
                <button 
                  className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`} 
                  onClick={() => setActiveTab('profile')}
                >
                  Profile Info
                </button>
                <button 
                  className={`nav-link ${activeTab === 'scores' ? 'active' : ''}`} 
                  onClick={() => setActiveTab('scores')}
                >
                  My Scores
                </button>
                <button 
                  className={`nav-link ${activeTab === 'achievements' ? 'active' : ''}`} 
                  onClick={() => setActiveTab('achievements')}
                >
                  Achievements
                </button>
                <button 
                  className={`nav-link ${activeTab === 'rewards' ? 'active' : ''}`} 
                  onClick={() => setActiveTab('rewards')}
                >
                  Rewards
                </button>
                <button 
                  className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`} 
                  onClick={() => setActiveTab('reviews')}
                >
                  My Reviews
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="col-md-9">
              <div className="tab-content">
                
                {/* Profile Tab */}
                {activeTab === 'profile' && (
                  <div className="dashboard-card">
                    <h3>Overview</h3>
                    <div className="row text-white mb-4">
                      <div className="col-md-6 mb-3">
                        <h5 style={{ color: '#b01ba5' }}>Name</h5>
                        <p className="fs-5">{userData.name}</p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <h5 style={{ color: '#b01ba5' }}>Email</h5>
                        <p className="fs-5">{userData.email}</p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <h5 style={{ color: '#b01ba5' }}>Total Coins</h5>
                        <p className="fs-5" style={{ color: '#ffd700', fontWeight: 'bold' }}>
                          <i className="fa fa-money"></i> {userData.coins || 0}
                        </p>
                      </div>
                      <div className="col-md-6 mb-3">
                        <h5 style={{ color: '#b01ba5' }}>Member Since</h5>
                        <p className="fs-5">{new Date(userData.createdAt).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Scores Tab */}
                {activeTab === 'scores' && (
                  <div className="dashboard-card">
                    <h3>Recent Scores</h3>
                    {scores.length > 0 ? (
                      <div className="table-responsive">
                        <table className="table table-dark table-hover text-white">
                          <thead>
                            <tr>
                              <th>Game</th>
                              <th>Score</th>
                              <th>Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            {scores.map((score, idx) => (
                              <tr key={idx}>
                                <td>{score.game_id?.title || 'Unknown Game'}</td>
                                <td style={{ color: '#b01ba5', fontWeight: 'bold' }}>{score.score}</td>
                                <td>{new Date(score.createdAt).toLocaleDateString()}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <>
                        <p className="text-white">You haven't played any games yet. Start playing to build up your score!</p>
                        <Link to="/games" className="site-btn mt-3">Play Games <img src="/assets/img/icons/double-arrow.png" alt="#" /></Link>
                      </>
                    )}
                  </div>
                )}

                {/* Achievements Tab */}
                {activeTab === 'achievements' && (
                  <div className="dashboard-card">
                    <h3>Earned Achievements</h3>
                    <p className="text-white">You haven't unlocked any achievements yet. Keep playing to earn them!</p>
                  </div>
                )}

                {/* Rewards Tab */}
                {activeTab === 'rewards' && (
                  <div className="dashboard-card">
                    <h3>Rewards Shop</h3>
                    <p className="text-white mb-4">You have <strong style={{ color: '#ffd700' }}>{userData.coins || 0} coins</strong> available on your account.</p>
                    <p className="text-white">There are currently no rewards available in the shop.</p>
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === 'reviews' && (
                  <div className="dashboard-card">
                    <h3>My Reviews</h3>
                    {reviews.length > 0 ? (
                      reviews.map((review, idx) => (
                        <div key={idx} className="mb-4 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <h5 className="text-white mb-0">{review.game_id?.title || 'Unknown Game'}</h5>
                            <div className="ratings text-warning">
                              {[...Array(5)].map((_, i) => (
                                <i key={i} className={`fa ${i < review.rating ? 'fa-star' : 'fa-star-o'}`}></i>
                              ))}
                            </div>
                          </div>
                          <p className="text-muted">{review.comment}</p>
                        </div>
                      ))
                    ) : (
                      <>
                        <p className="text-white">You haven't written any reviews yet.</p>
                        <Link to="/reviews" className="site-btn mt-3">Read Reviews <img src="/assets/img/icons/double-arrow.png" alt="#" /></Link>
                      </>
                    )}
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UserDashboard;
