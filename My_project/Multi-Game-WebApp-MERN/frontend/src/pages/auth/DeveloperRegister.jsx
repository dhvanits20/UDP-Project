import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import axios from 'axios';

const DeveloperRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    studio_name: '',
    email: '',
    portfolio_url: '',
    specialization: 'HTML5 / JavaScript',
    bio: '',
    password: '',
    password_confirmation: ''
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(formData.email.trim())) {
      setError('Please provide a valid professional email address.');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    if (formData.password !== formData.password_confirmation) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', {
        name: formData.name.trim(),
        studio_name: formData.studio_name.trim(),
        email: formData.email.trim().toLowerCase(),
        portfolio_url: formData.portfolio_url.trim(),
        specialization: formData.specialization,
        bio: formData.bio.trim(),
        password: formData.password,
        role: 'developer'
      });

      const { token, _id, name, email, role, studio_name } = response.data;
      const user = { _id, name, email, role, studio_name };

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Redirect directly to Developer Dashboard
      navigate('/developer/dashboard');
      window.location.reload();
    } catch (err) {
      setError(err.response?.data?.message || 'Developer registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%',
    height: '50px',
    padding: '0 18px',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
    transition: 'all 0.2s ease',
    marginBottom: 0
  };

  const handleInputFocus = (e) => {
    e.target.style.borderColor = '#d946ef';
    e.target.style.boxShadow = '0 0 16px rgba(217, 70, 239, 0.35)';
    e.target.style.background = 'rgba(255, 255, 255, 0.08)';
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
    e.target.style.boxShadow = 'none';
    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
  };

  return (
    <Layout>
      {/* Hero Header */}
      <section className="page-top-section set-bg" style={{ backgroundImage: "url('/assets/img/page-top-bg/2.jpg')" }}>
        <div className="page-info">
          <h2>Developer Portal</h2>
          <div className="site-breadcrumb">
            <Link to="/">Home</Link> /
            <span>Developer Registration</span>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ 
        position: 'relative', 
        padding: '60px 0 90px', 
        minHeight: '800px',
        overflow: 'hidden' 
      }}>
        {/* Ambient Decorative Lighting */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '20%',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(217, 70, 239, 0.14) 0%, rgba(56, 189, 248, 0.08) 45%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Header Banner */}
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 18px', borderRadius: '30px', background: 'rgba(217, 70, 239, 0.15)', border: '1px solid rgba(217, 70, 239, 0.4)', marginBottom: '16px' }}>
              <span style={{ fontSize: '14px' }}>⚡</span>
              <span style={{ color: '#f0abfc', fontSize: '13px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                ENDGAME Creator Network
              </span>
            </div>
            <h2 style={{ color: '#fff', fontSize: '34px', fontWeight: 900, letterSpacing: '-0.5px', marginBottom: '12px' }}>
              Register as a Game Developer
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: 1.6, margin: 0 }}>
              Publish your web games, upload game builds (.zip), track player traffic, and earn platform rewards through your dedicated Developer Dashboard.
            </p>
          </div>

          <div className="row justify-content-center">
            {/* Value Props Sidebar */}
            <div className="col-lg-4 col-md-5 mb-4">
              <div style={{ 
                background: 'rgba(22, 10, 42, 0.82)', 
                backdropFilter: 'blur(20px)', 
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(217, 70, 239, 0.28)', 
                borderRadius: '24px', 
                padding: '32px 28px', 
                height: '100%',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
              }}>
                <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: 800, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span>🚀</span> Developer Privileges
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(217, 70, 239, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0, border: '1px solid rgba(217, 70, 239, 0.3)' }}>
                      📦
                    </div>
                    <div>
                      <h5 style={{ color: '#fff', fontSize: '15px', fontWeight: 700, margin: '0 0 4px' }}>Direct ZIP Game Publishing</h5>
                      <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>
                        Upload your HTML5, WebGL, or zipped packages with custom thumbnails and descriptions.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(56, 189, 248, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0, border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                      📊
                    </div>
                    <div>
                      <h5 style={{ color: '#fff', fontSize: '15px', fontWeight: 700, margin: '0 0 4px' }}>Creator Analytics</h5>
                      <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>
                        Monitor review scores, submission status, and real player engagement live.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(251, 191, 36, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0, border: '1px solid rgba(251, 191, 36, 0.3)' }}>
                      🛡️
                    </div>
                    <div>
                      <h5 style={{ color: '#fff', fontSize: '15px', fontWeight: 700, margin: '0 0 4px' }}>Dedicated Dashboard</h5>
                      <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>
                        Special developer control panel tailored for creators, studios, and indie devs.
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '34px', paddingTop: '22px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ color: '#cbd5e1', fontSize: '13px' }}>Just want to play games?</span>
                  <Link to="/register" style={{ display: 'block', color: '#38bdf8', fontWeight: 700, fontSize: '14px', marginTop: '6px', textDecoration: 'none' }}>
                    Join as a Player instead →
                  </Link>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="col-lg-8 col-md-7">
              <div style={{ 
                background: 'rgba(22, 10, 42, 0.82)', 
                backdropFilter: 'blur(20px)', 
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(217, 70, 239, 0.28)', 
                borderRadius: '24px', 
                padding: '36px 32px',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.65), 0 0 35px rgba(176, 27, 165, 0.15)'
              }}>
                
                {/* Role Switcher Tabs */}
                <div style={{
                  display: 'flex',
                  background: 'rgba(0, 0, 0, 0.35)',
                  padding: '5px',
                  borderRadius: '14px',
                  marginBottom: '26px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <Link to="/register" style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    color: '#94a3b8',
                    fontWeight: 600,
                    fontSize: '13px',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'transparent'; }}
                  >
                    <span>🎮</span> Player Account
                  </Link>

                  <div style={{
                    flex: 1,
                    textAlign: 'center',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, #b01ba5 0%, #771680 100%)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '13px',
                    letterSpacing: '0.5px',
                    boxShadow: '0 4px 15px rgba(176, 27, 165, 0.4)',
                    cursor: 'default',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}>
                    <span>⚡</span> Developer Studio
                  </div>
                </div>

                <form onSubmit={handleSubmit} style={{ margin: 0 }}>
                  <div className="row">
                    {/* Developer Name */}
                    <div className="col-md-6 mb-3">
                      <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                        Lead Developer Name <span style={{ color: '#f43f5e' }}>*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Alex Rivera"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                      />
                    </div>

                    {/* Studio / Team Name */}
                    <div className="col-md-6 mb-3">
                      <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                        Studio / Team Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Nebula Interactive"
                        name="studio_name"
                        value={formData.studio_name}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                      />
                    </div>

                    {/* Professional Email */}
                    <div className="col-md-6 mb-3">
                      <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                        Professional Email <span style={{ color: '#f43f5e' }}>*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="developer@studio.com"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                      />
                    </div>

                    {/* Portfolio / GitHub URL */}
                    <div className="col-md-6 mb-3">
                      <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                        Portfolio / GitHub / Itch.io URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://github.com/your-studio"
                        name="portfolio_url"
                        value={formData.portfolio_url}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                      />
                    </div>

                    {/* Primary Game Engine */}
                    <div className="col-md-6 mb-3">
                      <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                        Primary Engine / Technology
                      </label>
                      <select
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleChange}
                        style={{ 
                          ...inputStyle,
                          cursor: 'pointer'
                        }}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                      >
                        <option value="HTML5 / JavaScript" style={{ background: '#1c082e', color: '#fff' }}>HTML5 / Canvas / Phaser</option>
                        <option value="Unity WebGL" style={{ background: '#1c082e', color: '#fff' }}>Unity WebGL</option>
                        <option value="Godot Engine" style={{ background: '#1c082e', color: '#fff' }}>Godot Engine (HTML5 export)</option>
                        <option value="Unreal Engine" style={{ background: '#1c082e', color: '#fff' }}>Unreal Engine</option>
                        <option value="Custom Engine" style={{ background: '#1c082e', color: '#fff' }}>Custom Engine / WebAssembly</option>
                      </select>
                    </div>

                    {/* Short Bio */}
                    <div className="col-md-6 mb-3">
                      <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                        Creator Bio / Tagline
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Indie creator specializing in roguelikes"
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        style={inputStyle}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                      />
                    </div>

                    {/* Password */}
                    <div className="col-md-6 mb-3">
                      <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                        Password (min. 6 characters) <span style={{ color: '#f43f5e' }}>*</span>
                      </label>
                      <input
                        type="password"
                        placeholder="Create a strong password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                      />
                    </div>

                    {/* Confirm Password */}
                    <div className="col-md-6 mb-3">
                      <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                        Confirm Password <span style={{ color: '#f43f5e' }}>*</span>
                      </label>
                      <input
                        type="password"
                        placeholder="Repeat your password"
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                      />
                    </div>

                    {/* Error display */}
                    {error && (
                      <div className="col-12 mb-3">
                        <div style={{ padding: '12px 16px', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.4)', color: '#fca5a5', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span>⚠️</span>
                          <span>{error}</span>
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <div className="col-12 mt-3">
                      <button 
                        className="site-btn" 
                        type="submit" 
                        disabled={loading}
                        style={{ 
                          width: '100%', 
                          height: '54px',
                          background: 'linear-gradient(135deg, #b01ba5 0%, #771680 100%)',
                          boxShadow: '0 8px 25px rgba(176, 27, 165, 0.4)',
                          borderRadius: '12px',
                          border: 'none',
                          color: '#fff',
                          fontSize: '15px',
                          fontWeight: 800,
                          cursor: loading ? 'not-allowed' : 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '10px',
                          transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          if (!loading) {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 12px 30px rgba(176, 27, 165, 0.6)';
                          }
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 8px 25px rgba(176, 27, 165, 0.4)';
                        }}
                      >
                        <span>{loading ? 'Creating Developer Account...' : 'Register as Developer & Launch Dashboard'}</span>
                        <img src="/assets/img/icons/double-arrow.png" alt="#" style={{ width: '12px', height: 'auto' }} />
                      </button>

                      <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <span style={{ color: '#94a3b8', fontSize: '14px' }}>Already registered as a developer? </span>
                        <Link to="/login" style={{ color: '#d946ef', fontWeight: 700, fontSize: '14px', textDecoration: 'none' }}>
                          Sign in to Developer Dashboard
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DeveloperRegister;
