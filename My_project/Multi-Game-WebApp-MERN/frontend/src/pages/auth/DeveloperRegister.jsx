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

  return (
    <Layout>
      <section className="page-top-section set-bg" style={{ backgroundImage: "url('/assets/img/page-top-bg/2.jpg')" }}>
        <div className="page-info">
          <h2>Developer Portal</h2>
          <div className="site-breadcrumb">
            <Link to="/">Home</Link> /
            <span>Developer Registration</span>
          </div>
        </div>
      </section>

      <section className="contact-page" style={{ padding: '60px 0 80px' }}>
        <div className="container">
          {/* Header Banner */}
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '30px', background: 'rgba(217, 70, 239, 0.15)', border: '1px solid rgba(217, 70, 239, 0.4)', marginBottom: '16px' }}>
              <span style={{ fontSize: '14px' }}>⚡</span>
              <span style={{ color: '#f0abfc', fontSize: '13px', fontWeight: 700, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                Join the ENDGAME Creator Network
              </span>
            </div>
            <h2 style={{ color: '#fff', fontSize: '34px', fontWeight: 900, letterSpacing: '-0.5px', marginBottom: '12px' }}>
              Register as a Game Developer
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '16px', lineHeight: 1.6 }}>
              Publish your web games, upload game builds (.zip), track player traffic, and earn platform coin rewards through your dedicated Developer Dashboard.
            </p>
          </div>

          <div className="row justify-content-center">
            {/* Value Props Sidebar */}
            <div className="col-lg-4 col-md-5 mb-4">
              <div style={{ background: 'rgba(28, 8, 46, 0.7)', backdropFilter: 'blur(10px)', border: '1px solid rgba(176, 27, 165, 0.3)', borderRadius: '20px', padding: '28px', height: '100%' }}>
                <h4 style={{ color: '#fff', fontSize: '18px', fontWeight: 800, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>🚀</span> Developer Privileges
                </h4>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(217, 70, 239, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                      📦
                    </div>
                    <div>
                      <h5 style={{ color: '#fff', fontSize: '15px', fontWeight: 700, margin: '0 0 4px' }}>Direct ZIP Game Publishing</h5>
                      <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>
                        Upload your HTML5, WebGL, or zipped packages with thumbnails and descriptions.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                      📊
                    </div>
                    <div>
                      <h5 style={{ color: '#fff', fontSize: '15px', fontWeight: 700, margin: '0 0 4px' }}>Creator Analytics</h5>
                      <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0, lineHeight: 1.5 }}>
                        Monitor review scores, submission status, and player play metrics live.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(251, 191, 36, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
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

                <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ color: '#cbd5e1', fontSize: '14px' }}>Just want to play games?</span>
                  <Link to="/register" style={{ display: 'block', color: '#38bdf8', fontWeight: 700, fontSize: '14px', marginTop: '6px', textDecoration: 'none' }}>
                    Join as a Player instead →
                  </Link>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="col-lg-8 col-md-7">
              <div style={{ background: 'rgba(28, 8, 46, 0.7)', backdropFilter: 'blur(10px)', border: '1px solid rgba(176, 27, 165, 0.3)', borderRadius: '20px', padding: '36px' }}>
                <form className="contact-form" onSubmit={handleSubmit} style={{ margin: 0 }}>
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
                        style={{ width: '100%', marginBottom: 0 }}
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
                        style={{ width: '100%', marginBottom: 0 }}
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
                        style={{ width: '100%', marginBottom: 0 }}
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
                        style={{ width: '100%', marginBottom: 0 }}
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
                          width: '100%', 
                          height: '52px', 
                          padding: '0 20px', 
                          borderRadius: '10px', 
                          background: 'rgba(255, 255, 255, 0.08)', 
                          border: '1px solid rgba(255, 255, 255, 0.15)', 
                          color: '#fff', 
                          fontSize: '14px',
                          outline: 'none'
                        }}
                      >
                        <option value="HTML5 / JavaScript" style={{ background: '#1c082e' }}>HTML5 / Canvas / Phaser</option>
                        <option value="Unity WebGL" style={{ background: '#1c082e' }}>Unity WebGL</option>
                        <option value="Godot Engine" style={{ background: '#1c082e' }}>Godot Engine (HTML5 export)</option>
                        <option value="Unreal Engine" style={{ background: '#1c082e' }}>Unreal Engine</option>
                        <option value="Custom Engine" style={{ background: '#1c082e' }}>Custom Engine / WebAssembly</option>
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
                        style={{ width: '100%', marginBottom: 0 }}
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
                        style={{ width: '100%', marginBottom: 0 }}
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
                        style={{ width: '100%', marginBottom: 0 }}
                      />
                    </div>

                    {/* Error display */}
                    {error && (
                      <div className="col-12 mb-3">
                        <div style={{ padding: '12px 16px', borderRadius: '10px', background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.4)', color: '#fca5a5', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                          background: 'linear-gradient(135deg, #b01ba5 0%, #771680 100%)',
                          boxShadow: '0 8px 25px rgba(176, 27, 165, 0.4)',
                          padding: '16px',
                          fontSize: '16px'
                        }}
                      >
                        {loading ? 'Creating Developer Account...' : 'Register as Developer & Launch Dashboard'} 
                        <img src="/assets/img/icons/double-arrow.png" alt="#" style={{ marginLeft: '10px' }} />
                      </button>

                      <div style={{ textAlign: 'center', marginTop: '16px' }}>
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
