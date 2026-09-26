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
  const [zipFile, setZipFile] = useState(null);
  const [coverImageFile, setCoverImageFile] = useState(null);
  const [useZipUrl, setUseZipUrl] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-fill logged-in developer info
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const u = JSON.parse(storedUser);
        setFormData(prev => ({
          ...prev,
          developer_name: u.name || '',
          developer_email: u.email || ''
        }));
      }
    } catch (e) {
      console.error(e);
    }

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

    if (!zipFile && !formData.game_file) {
      setError('Please choose a game ZIP file (.zip, .rar, .7z) or provide a game package URL.');
      setLoading(false);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const submitData = new FormData();
      submitData.append('title', formData.title);
      submitData.append('category_id', formData.category_id);
      submitData.append('description', formData.description);
      submitData.append('developer_name', formData.developer_name);
      submitData.append('developer_email', formData.developer_email);

      if (coverImageFile) {
        submitData.append('image_file', coverImageFile);
      } else {
        submitData.append('image_url', formData.image_url || '/assets/img/games/1.jpg');
      }

      if (zipFile) {
        submitData.append('game_file', zipFile);
      } else if (formData.game_file) {
        submitData.append('game_file', formData.game_file);
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      };
      
      await axios.post('http://localhost:5000/api/developer/submit-game', submitData, config);
      setSuccess(true);
      setZipFile(null);
      setCoverImageFile(null);
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
                  Submit your complete game details, cover image, and game ZIP file. Once approved by our moderation team, your game goes live instantly!
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

                  {/* Cover Image Upload & URL */}
                  <div className="game-form-group full-width">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <label>Cover Image <span>*</span></label>
                      <span style={{ fontSize: '12px', color: '#94a3b8' }}>JPG, PNG or WebP</span>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: coverImageFile ? '1fr auto' : '1fr', gap: '10px' }}>
                      {coverImageFile ? (
                        <div className="zip-file-selected" style={{ padding: '10px 16px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <span style={{ fontSize: '20px' }}>🖼️</span>
                            <span style={{ color: '#fff', fontSize: '13px', fontWeight: 600 }}>{coverImageFile.name}</span>
                          </div>
                          <button type="button" onClick={() => setCoverImageFile(null)} className="dash-btn-secondary" style={{ padding: '4px 10px', fontSize: '11px' }}>
                            Remove
                          </button>
                        </div>
                      ) : (
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <label className="dash-btn-secondary" style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 20px', whiteSpace: 'nowrap' }}>
                            <svg style={{ width: '18px', height: '18px', color: '#d946ef' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>Browse Image</span>
                            <input 
                              type="file" 
                              accept="image/*" 
                              style={{ display: 'none' }} 
                              onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                  setCoverImageFile(e.target.files[0]);
                                }
                              }} 
                            />
                          </label>
                          <input 
                            type="text" 
                            className="game-form-input" 
                            placeholder="Or enter image URL: https://example.com/cover.jpg" 
                            name="image_url" 
                            value={formData.image_url} 
                            onChange={handleChange} 
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Game ZIP File Upload */}
                  <div className="game-form-group full-width">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <label>Game File (.zip) <span>*</span></label>
                      <button 
                        type="button" 
                        onClick={() => {
                          setUseZipUrl(!useZipUrl);
                          setZipFile(null);
                        }} 
                        style={{ background: 'none', border: 'none', color: '#c084fc', fontSize: '12px', cursor: 'pointer', textDecoration: 'underline' }}
                      >
                        {useZipUrl ? '← Upload .ZIP file instead' : 'Have a direct cloud / ZIP link?'}
                      </button>
                    </div>

                    {useZipUrl ? (
                      <input 
                        type="text" 
                        className="game-form-input" 
                        placeholder="https://example.com/games/my-game-build.zip" 
                        name="game_file" 
                        value={formData.game_file} 
                        onChange={handleChange} 
                      />
                    ) : zipFile ? (
                      <div className="zip-file-selected">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                          <span className="zip-file-icon">📦</span>
                          <div>
                            <div style={{ color: '#fff', fontWeight: 700, fontSize: '15px' }}>{zipFile.name}</div>
                            <div style={{ color: '#34d399', fontSize: '12px', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <span>✓ Ready to upload</span>
                              <span>•</span>
                              <span>{(zipFile.size / (1024 * 1024)).toFixed(2)} MB</span>
                            </div>
                          </div>
                        </div>
                        <button 
                          type="button" 
                          onClick={() => setZipFile(null)} 
                          className="dash-btn-secondary" 
                          style={{ padding: '6px 14px', fontSize: '12px' }}
                        >
                          Change File
                        </button>
                      </div>
                    ) : (
                      <div 
                        className="zip-dropzone" 
                        onClick={() => document.getElementById('gameZipInput').click()}
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={(e) => {
                          e.preventDefault();
                          if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                            setZipFile(e.dataTransfer.files[0]);
                          }
                        }}
                      >
                        <input 
                          type="file" 
                          id="gameZipInput" 
                          accept=".zip,.rar,.7z" 
                          style={{ display: 'none' }} 
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              setZipFile(e.target.files[0]);
                            }
                          }} 
                        />
                        <div className="zip-dropzone-icon">
                          <svg style={{ width: '32px', height: '32px', color: '#d946ef' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                        </div>
                        <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '15px' }}>
                          Choose Game ZIP File or Drag & Drop
                        </div>
                        <div style={{ color: '#94a3b8', fontSize: '12px', marginTop: '6px' }}>
                          Supported archives: <strong style={{ color: '#e2e8f0' }}>.ZIP, .RAR, .7Z</strong> (Max 150MB)
                        </div>
                      </div>
                    )}

                    <div className="game-form-note">
                      <span style={{ fontSize: '16px' }}>💡</span>
                      <span>
                        <strong>Note:</strong> We support both web games (HTML5/JS) and native desktop games (.exe). If it's a web game, ensure your ZIP contains an <code>index.html</code>.
                      </span>
                    </div>
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
                          <span>Uploading & Submitting...</span>
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
