import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../components/Layout';
import './Dashboard.css';

const SubmitGame = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    category_id: '',
    description: '',
    image_url: '',
    game_file: '',
    developer_name: '',
    developer_email: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/games/categories');
        setCategories(res.data);
        if (res.data.length > 0) {
          setFormData(prev => ({ ...prev, category_id: res.data[0]._id }));
        }
      } catch (err) {
        console.error("Failed to load categories", err);
      }
    };
    
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      
      await axios.post('http://localhost:5000/api/developer/submit-game', formData, config);
      setSuccess(true);
      setFormData({
        title: '',
        category_id: categories.length > 0 ? categories[0]._id : '',
        description: '',
        image_url: '',
        game_file: '',
        developer_name: '',
        developer_email: ''
      });
      
      setTimeout(() => {
        navigate('/developer/dashboard');
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong submitting your game');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="page-top-section set-bg" style={{ backgroundImage: "url('/assets/img/page-top-bg/2.jpg')" }}>
        <div className="page-info">
          <h2>Submit Game</h2>
          <div className="site-breadcrumb">
            <Link to="/">Home</Link> /
            <Link to="/developer/dashboard">Developer</Link> /
            <span>Submit Game</span>
          </div>
        </div>
      </section>

      <section style={{ padding: '60px 0 100px 0', background: 'linear-gradient(180deg, #1c082e 0%, #120420 100%)' }}>
        <div className="container">
          <div className="game-submit-container">
            <div className="game-submit-card">
              <div className="game-submit-header">
                <h3>Submit New Game for Review</h3>
                <p>Publish your web game to thousands of daily active players on ENDGAME.</p>
              </div>

              <div className="game-submit-banner">
                <svg style={{ width: '22px', height: '22px', color: '#d946ef', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>
                  Provide direct public URLs or hosted iframe embed links. Once approved by our moderation team, your game goes live instantly.
                </span>
              </div>

              {error && (
                <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.35)', color: '#fca5a5', padding: '14px 20px', borderRadius: '12px', marginBottom: '24px', fontSize: '14px' }}>
                  ⚠️ {error}
                </div>
              )}

              {success && (
                <div style={{ background: 'rgba(34, 197, 94, 0.15)', border: '1px solid rgba(34, 197, 94, 0.35)', color: '#86efac', padding: '14px 20px', borderRadius: '12px', marginBottom: '24px', fontSize: '14px' }}>
                  🎉 Game submitted successfully! Redirecting you to Developer Dashboard...
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="game-form-grid">
                  {/* Game Title */}
                  <div className="game-form-group">
                    <label>Game Title <span>*</span></label>
                    <input 
                      type="text" 
                      className="game-form-input" 
                      placeholder="e.g. Cyber Rush 2099" 
                      name="title" 
                      required 
                      value={formData.title} 
                      onChange={handleChange} 
                    />
                  </div>

                  {/* Category Selection */}
                  <div className="game-form-group">
                    <label>Category <span>*</span></label>
                    <select 
                      name="category_id" 
                      required 
                      className="game-form-select" 
                      value={formData.category_id} 
                      onChange={handleChange}
                    >
                      <option value="">Select a Category</option>
                      {categories.map(c => (
                        <option key={c._id} value={c._id}>{c.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Developer Name */}
                  <div className="game-form-group">
                    <label>Developer / Studio Name <span>*</span></label>
                    <input 
                      type="text" 
                      className="game-form-input" 
                      placeholder="e.g. Neon Pixel Games" 
                      name="developer_name" 
                      required 
                      value={formData.developer_name} 
                      onChange={handleChange} 
                    />
                  </div>

                  {/* Developer Email */}
                  <div className="game-form-group">
                    <label>Contact Email <span>*</span></label>
                    <input 
                      type="email" 
                      className="game-form-input" 
                      placeholder="dev@studio.com" 
                      name="developer_email" 
                      required 
                      value={formData.developer_email} 
                      onChange={handleChange} 
                    />
                  </div>

                  {/* Cover Image URL */}
                  <div className="game-form-group full-width">
                    <label>Cover Image URL <span>*</span></label>
                    <input 
                      type="url" 
                      className="game-form-input" 
                      placeholder="https://example.com/images/banner.jpg" 
                      name="image_url" 
                      required 
                      value={formData.image_url} 
                      onChange={handleChange} 
                    />
                  </div>

                  {/* Game File or Iframe URL */}
                  <div className="game-form-group full-width">
                    <label>Game File / Iframe Playable URL <span>*</span></label>
                    <input 
                      type="url" 
                      className="game-form-input" 
                      placeholder="https://itch.io/embed/12345 or direct html5 URL" 
                      name="game_file" 
                      value={formData.game_file} 
                      onChange={handleChange} 
                    />
                  </div>

                  {/* Description */}
                  <div className="game-form-group full-width">
                    <label>Game Description & Instructions <span>*</span></label>
                    <textarea 
                      className="game-form-textarea" 
                      placeholder="Describe the gameplay mechanics, story, controls, and features..." 
                      name="description" 
                      required 
                      rows="4" 
                      value={formData.description} 
                      onChange={handleChange} 
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="full-width" style={{ marginTop: '12px', display: 'flex', justifyContent: 'flex-end', gap: '14px', alignItems: 'center' }}>
                    <Link to="/developer/dashboard" className="dash-btn-secondary">
                      Cancel
                    </Link>
                    <button 
                      className="dash-btn-primary" 
                      type="submit" 
                      disabled={loading}
                      style={{ padding: '14px 36px', fontSize: '15px' }}
                    >
                      {loading ? (
                        <>
                          <div style={{ width: '18px', height: '18px', border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }}></div>
                          <span>Submitting Game...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Game for Review</span>
                          <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SubmitGame;
