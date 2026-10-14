import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '', remember: false });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      const { token, _id, name, email, role } = response.data;
      const user = { _id, name, email, role };

      // Store auth token
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Redirect based on role
      if (user.role === 'admin') navigate('/admin/dashboard');
      else if (user.role === 'developer') navigate('/developer/dashboard');
      else navigate('/user/dashboard');

      // We will need a proper AuthContext to refresh header state globally later.
      window.location.reload();
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid login credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="page-top-section set-bg" style={{ backgroundImage: "url('/assets/img/page-top-bg/4.jpg')" }}>
        <div className="page-info">
          <h2>Login</h2>
          <div className="site-breadcrumb">
            <Link to="/">Home</Link> /
            <span>Login</span>
          </div>
        </div>
      </section>

      <section className="contact-page">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column: Login Form */}
            <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
              <div className="section-title text-white" style={{ marginBottom: '30px' }}>
                <h2 style={{ margin: 0 }}>Login to your account</h2>
              </div>
              <form className="contact-form" onSubmit={handleSubmit} style={{ margin: 0 }}>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoFocus
                  />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  {error && (
                    <div style={{ 
                      padding: '10px 16px', 
                      borderRadius: '8px', 
                      background: 'rgba(239, 68, 68, 0.15)', 
                      border: '1px solid rgba(239, 68, 68, 0.4)', 
                      color: '#fca5a5', 
                      fontSize: '13px', 
                      marginBottom: '20px' 
                    }}>
                      ⚠️ {error}
                    </div>
                  )}
                </div>
                <div>
                  <div className="form-check" style={{ marginBottom: '20px', paddingLeft: 0 }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="remember"
                      id="remember"
                      checked={formData.remember}
                      onChange={handleChange}
                      style={{ width: 'auto', height: 'auto', display: 'inline-block', marginRight: '5px' }}
                    />
                    <label className="form-check-label text-white" htmlFor="remember">
                      Remember Me
                    </label>
                  </div>
                  <button className="site-btn" type="submit" disabled={loading} style={{ minWidth: '180px' }}>
                    {loading ? 'Logging in...' : 'Login'} <img src="/assets/img/icons/double-arrow.png" alt="#" />
                  </button>
                  <div className="mt-3 d-flex flex-wrap align-items-center gap-3">
                    <div>
                      <span className="text-white">New Player? </span>
                      <Link to="/register" className="text-primary font-weight-bold">Create Account</Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Column: Aesthetic Developer & Studio Hub Showcase Card */}
            <div className="col-lg-6 col-md-12 pl-lg-5">
              <div style={{
                background: 'linear-gradient(145deg, rgba(32, 10, 52, 0.85) 0%, rgba(18, 6, 33, 0.92) 100%)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(217, 70, 239, 0.35)',
                borderRadius: '24px',
                padding: '36px 32px',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(176, 27, 165, 0.15)',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {/* Decorative Top Accent Light */}
                <div style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '180px',
                  height: '180px',
                  background: 'radial-gradient(circle, rgba(217, 70, 239, 0.25) 0%, transparent 70%)',
                  borderRadius: '50%',
                  pointerEvents: 'none'
                }}></div>

                {/* Badge Header */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px', borderRadius: '20px', background: 'rgba(217, 70, 239, 0.15)', border: '1px solid rgba(217, 70, 239, 0.4)', marginBottom: '16px' }}>
                  <span style={{ fontSize: '13px' }}>⚡</span>
                  <span style={{ color: '#f0abfc', fontSize: '12px', fontWeight: 800, letterSpacing: '0.8px', textTransform: 'uppercase' }}>
                    ENDGAME Creator & Studio Hub
                  </span>
                </div>

                <h3 style={{ color: '#fff', fontSize: '24px', fontWeight: 900, marginBottom: '8px', letterSpacing: '-0.3px' }}>
                  Build, Publish & Showcase Your Games
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px' }}>
                  Are you a game developer or studio? Log in or create your developer account to access the creator suite.
                </p>

                {/* Highlights */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '26px' }}>
                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(217, 70, 239, 0.2)', border: '1px solid rgba(217, 70, 239, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                      📦
                    </div>
                    <div>
                      <h5 style={{ color: '#fff', fontSize: '14px', fontWeight: 700, margin: '0 0 2px' }}>Direct ZIP & WebGL Publishing</h5>
                      <p style={{ color: '#94a3b8', fontSize: '12px', margin: 0, lineHeight: 1.5 }}>
                        Upload packaged game builds (.zip), HTML5 bundles, or Unity WebGL with custom cover art and descriptions.
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(56, 189, 248, 0.2)', border: '1px solid rgba(56, 189, 248, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                      📊
                    </div>
                    <div>
                      <h5 style={{ color: '#fff', fontSize: '14px', fontWeight: 700, margin: '0 0 2px' }}>Dedicated Developer Dashboard</h5>
                      <p style={{ color: '#94a3b8', fontSize: '12px', margin: 0, lineHeight: 1.5 }}>
                        Track live gameplay metrics, review submissions, and manage your published portfolio in real time.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Developer Register CTA Button */}
                <div style={{
                  padding: '18px 20px',
                  borderRadius: '14px',
                  background: 'rgba(217, 70, 239, 0.12)',
                  border: '1px solid rgba(217, 70, 239, 0.4)',
                  textAlign: 'center'
                }}>
                  <Link 
                    to="/developer/register" 
                    style={{ 
                      display: 'block',
                      width: '100%',
                      padding: '14px 20px', 
                      borderRadius: '10px', 
                      background: 'linear-gradient(135deg, #b01ba5 0%, #771680 100%)', 
                      color: '#fff', 
                      fontSize: '14px', 
                      fontWeight: 800, 
                      textDecoration: 'none',
                      boxShadow: '0 6px 20px rgba(176, 27, 165, 0.5)',
                      letterSpacing: '0.5px'
                    }}
                  >
                    🚀 Register as Game Developer & Studio →
                  </Link>
                  <p style={{ color: '#94a3b8', fontSize: '12px', margin: '10px 0 0' }}>
                    Instant access to submission portal & creator dashboard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
