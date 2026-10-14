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
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email: formData.email.trim().toLowerCase(),
        password: formData.password
      });

      const { token, _id, name, email, role, studio_name } = response.data;
      const user = { _id, name, email, role, studio_name };

      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      if (user.role === 'admin') {
        navigate('/admin/dashboard');
      } else if (user.role === 'developer') {
        navigate('/developer/dashboard');
      } else {
        navigate('/user/dashboard');
      }
      window.location.reload(); 
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid email or password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* Hero Header */}
      <section className="page-top-section set-bg" style={{ backgroundImage: "url('/assets/img/page-top-bg/4.jpg')" }}>
        <div className="page-info">
          <h2>Player & Developer Login</h2>
          <div className="site-breadcrumb">
            <Link to="/">Home</Link> /
            <span>Login</span>
          </div>
        </div>
      </section>

      {/* Main Auth Section with Rich Cyber Atmosphere */}
      <section style={{ 
        position: 'relative', 
        padding: '70px 0 100px', 
        minHeight: '750px',
        overflow: 'hidden'
      }}>
        {/* Ambient Decorative Lighting */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(217, 70, 239, 0.1) 45%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}></div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-6 col-md-8 col-sm-11">
              
              {/* Glassmorphic Auth Card */}
              <div style={{
                background: 'rgba(22, 10, 42, 0.82)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(217, 70, 239, 0.28)',
                borderRadius: '24px',
                padding: '42px 36px',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.65), 0 0 35px rgba(176, 27, 165, 0.15)',
                transition: 'all 0.3s ease'
              }}>

                {/* Card Title & Subtitle */}
                <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    background: 'rgba(217, 70, 239, 0.12)',
                    border: '1px solid rgba(217, 70, 239, 0.3)',
                    color: '#f0abfc',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                    marginBottom: '14px'
                  }}>
                    <span>⚡</span> Welcome Back
                  </div>
                  <h3 style={{ 
                    color: '#fff', 
                    fontSize: '26px', 
                    fontWeight: 900, 
                    letterSpacing: '-0.5px', 
                    marginBottom: '8px',
                    fontFamily: "'Roboto', sans-serif" 
                  }}>
                    Sign In to ENDGAME
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0, lineHeight: 1.5 }}>
                    Access your player profile, global leaderboard stats, or developer studio portal.
                  </p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} style={{ margin: 0 }}>
                  
                  {/* Email Field */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                      Email Address <span style={{ color: '#f43f5e' }}>*</span>
                    </label>
                    <input 
                      type="email" 
                      placeholder="player@example.com or developer@studio.com" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                      autoFocus 
                      style={{
                        width: '100%',
                        height: '50px',
                        padding: '0 18px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#fff',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'all 0.2s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#d946ef';
                        e.target.style.boxShadow = '0 0 16px rgba(217, 70, 239, 0.35)';
                        e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                        e.target.style.boxShadow = 'none';
                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                      }}
                    />
                  </div>

                  {/* Password Field */}
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <label style={{ color: '#cbd5e1', fontSize: '13px', fontWeight: 700, margin: 0 }}>
                        Password <span style={{ color: '#f43f5e' }}>*</span>
                      </label>
                    </div>
                    <input 
                      type="password" 
                      placeholder="Enter your account password" 
                      name="password" 
                      value={formData.password} 
                      onChange={handleChange} 
                      required 
                      style={{
                        width: '100%',
                        height: '50px',
                        padding: '0 18px',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#fff',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'all 0.2s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = '#d946ef';
                        e.target.style.boxShadow = '0 0 16px rgba(217, 70, 239, 0.35)';
                        e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                        e.target.style.boxShadow = 'none';
                        e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                      }}
                    />
                  </div>

                  {/* Remember Me */}
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                    <input
                      type="checkbox"
                      id="rememberMe"
                      name="remember"
                      checked={formData.remember}
                      onChange={handleChange}
                      style={{
                        width: '16px',
                        height: '16px',
                        accentColor: '#d946ef',
                        cursor: 'pointer',
                        marginRight: '8px'
                      }}
                    />
                    <label htmlFor="rememberMe" style={{ color: '#94a3b8', fontSize: '13px', cursor: 'pointer', margin: 0 }}>
                      Remember this device
                    </label>
                  </div>

                  {/* Error Box */}
                  {error && (
                    <div style={{
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: 'rgba(239, 68, 68, 0.15)',
                      border: '1px solid rgba(239, 68, 68, 0.4)',
                      color: '#fca5a5',
                      fontSize: '13px',
                      marginBottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span>⚠️</span>
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Submit Button */}
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
                      fontSize: '15px',
                      fontWeight: 800,
                      letterSpacing: '0.5px',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      border: 'none',
                      color: '#fff',
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
                    <span>{loading ? 'Authenticating...' : 'Sign In to Dashboard'}</span>
                    <img src="/assets/img/icons/double-arrow.png" alt="#" style={{ width: '12px', height: 'auto' }} />
                  </button>

                  {/* Footer Navigation */}
                  <div style={{ 
                    marginTop: '26px', 
                    paddingTop: '20px', 
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    textAlign: 'center'
                  }}>
                    <div style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '14px' }}>
                      Don't have an account yet?{' '}
                      <Link to="/register" style={{ color: '#38bdf8', fontWeight: 700, textDecoration: 'none' }}>
                        Register as Player
                      </Link>
                    </div>

                    <div style={{
                      display: 'inline-block',
                      background: 'rgba(217, 70, 239, 0.08)',
                      border: '1px solid rgba(217, 70, 239, 0.25)',
                      borderRadius: '12px',
                      padding: '10px 18px',
                      width: '100%'
                    }}>
                      <span style={{ color: '#cbd5e1', fontSize: '13px' }}>Game Developer or Studio? </span>
                      <Link to="/developer/register" style={{ color: '#f0abfc', fontWeight: 700, fontSize: '13px', textDecoration: 'none' }}>
                        Join Creator Portal →
                      </Link>
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

export default Login;
