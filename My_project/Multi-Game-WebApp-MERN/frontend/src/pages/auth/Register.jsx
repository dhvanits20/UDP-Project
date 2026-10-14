import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
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
      setError('Please provide a valid email address.');
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
        email: formData.email.trim().toLowerCase(),
        password: formData.password
      });
      
      const { token, _id, name, email, role } = response.data;
      const user = { _id, name, email, role };
      
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      navigate('/user/dashboard');
      window.location.reload(); 
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {/* Hero Header */}
      <section className="page-top-section set-bg" style={{ backgroundImage: "url('/assets/img/page-top-bg/4.jpg')" }}>
        <div className="page-info">
          <h2>Player Registration</h2>
          <div className="site-breadcrumb">
            <Link to="/">Home</Link> /
            <span>Register</span>
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
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(217, 70, 239, 0.16) 0%, rgba(124, 58, 237, 0.08) 45%, transparent 70%)',
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

                {/* Role Switcher Tabs */}
                <div style={{
                  display: 'flex',
                  background: 'rgba(0, 0, 0, 0.35)',
                  padding: '5px',
                  borderRadius: '14px',
                  marginBottom: '28px',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
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
                    <span>🎮</span> Player Account
                  </div>

                  <Link to="/developer/register" style={{
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
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#f0abfc'; e.currentTarget.style.background = 'rgba(217, 70, 239, 0.1)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'transparent'; }}
                  >
                    <span>⚡</span> Developer Studio
                  </Link>
                </div>

                {/* Card Title & Subtitle */}
                <div style={{ textAlign: 'center', marginBottom: '26px' }}>
                  <h3 style={{ 
                    color: '#fff', 
                    fontSize: '24px', 
                    fontWeight: 900, 
                    letterSpacing: '-0.5px', 
                    marginBottom: '8px',
                    fontFamily: "'Roboto', sans-serif" 
                  }}>
                    Create Your Account
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '14px', margin: 0, lineHeight: 1.5 }}>
                    Join the arena, play games, compete on leaderboards & earn coins.
                  </p>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} style={{ margin: 0 }}>
                  
                  {/* Name Field */}
                  <div style={{ marginBottom: '18px' }}>
                    <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                      Player Username <span style={{ color: '#f43f5e' }}>*</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. CyberKnight" 
                      name="name" 
                      value={formData.name} 
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

                  {/* Email Field */}
                  <div style={{ marginBottom: '18px' }}>
                    <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                      Email Address <span style={{ color: '#f43f5e' }}>*</span>
                    </label>
                    <input 
                      type="email" 
                      placeholder="player@example.com" 
                      name="email" 
                      value={formData.email} 
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

                  {/* Password Field */}
                  <div style={{ marginBottom: '18px' }}>
                    <label style={{ display: 'block', color: '#cbd5e1', fontSize: '13px', fontWeight: 700, marginBottom: '6px' }}>
                      Password (min. 6 characters) <span style={{ color: '#f43f5e' }}>*</span>
                    </label>
                    <input 
                      type="password" 
                      placeholder="Enter a strong password" 
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

                  {/* Confirm Password Field */}
                  <div style={{ marginBottom: '22px' }}>
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
                    <span>{loading ? 'Registering Player...' : 'Create Player Account'}</span>
                    <img src="/assets/img/icons/double-arrow.png" alt="#" style={{ width: '12px', height: 'auto' }} />
                  </button>

                  {/* Footer Navigation */}
                  <div style={{ 
                    marginTop: '24px', 
                    paddingTop: '20px', 
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    textAlign: 'center'
                  }}>
                    <div style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '12px' }}>
                      Already have an account?{' '}
                      <Link to="/login" style={{ color: '#38bdf8', fontWeight: 700, textDecoration: 'none' }}>
                        Login here
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
                      <span style={{ color: '#cbd5e1', fontSize: '13px' }}>Want to publish and monetize games? </span>
                      <Link to="/developer/register" style={{ color: '#f0abfc', fontWeight: 700, fontSize: '13px', textDecoration: 'none' }}>
                        Register as Developer →
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

export default Register;
