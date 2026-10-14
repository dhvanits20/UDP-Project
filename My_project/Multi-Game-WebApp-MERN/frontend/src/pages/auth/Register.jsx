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
      <section className="page-top-section set-bg" style={{ backgroundImage: "url('/assets/img/page-top-bg/4.jpg')" }}>
        <div className="page-info">
          <h2>Register</h2>
          <div className="site-breadcrumb">
            <Link to="/">Home</Link> /
            <span>Register</span>
          </div>
        </div>
      </section>

      <section className="contact-page">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Column: Register Form */}
            <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
              <div className="section-title text-white" style={{ marginBottom: '30px' }}>
                <h2 style={{ margin: 0 }}>Create a new account</h2>
              </div>
              <form className="contact-form" onSubmit={handleSubmit} style={{ margin: 0 }}>
                <div>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    autoFocus 
                  />
                </div>

                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
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
                </div>

                <div>
                  <input 
                    type="password" 
                    placeholder="Confirm Password" 
                    name="password_confirmation" 
                    value={formData.password_confirmation} 
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

                <div className="mt-2">
                  <button className="site-btn" type="submit" disabled={loading}>
                    {loading ? 'Registering...' : 'Register'} <img src="/assets/img/icons/double-arrow.png" alt="#" />
                  </button>
                  <div className="mt-3">
                    <span className="text-white">Already have an account? </span>
                    <Link to="/login" className="text-primary font-weight-bold">Login here</Link>
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
                  Join our creator network to distribute your HTML5, WebGL, and custom engine games directly to thousands of active players.
                </p>

                {/* Developer Feature Points */}
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

                  <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(251, 191, 36, 0.2)', border: '1px solid rgba(251, 191, 36, 0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>
                      🛡️
                    </div>
                    <div>
                      <h5 style={{ color: '#fff', fontSize: '14px', fontWeight: 700, margin: '0 0 2px' }}>Verified Ownership & Royalties</h5>
                      <p style={{ color: '#94a3b8', fontSize: '12px', margin: 0, lineHeight: 1.5 }}>
                        Your studio retains 100% intellectual property, verified developer credits, and player engagement ratings.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Developer Spec / Stat Badges */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  marginBottom: '22px'
                }}>
                  <div style={{ textAlign: 'center', flex: 1 }}>
                    <div style={{ color: '#d946ef', fontWeight: 900, fontSize: '15px', fontFamily: "'Orbitron', sans-serif" }}>HTML5/WebGL</div>
                    <div style={{ color: '#94a3b8', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>All Engines</div>
                  </div>
                  <div style={{ width: '1px', background: 'rgba(255, 255, 255, 0.1)' }}></div>
                  <div style={{ textAlign: 'center', flex: 1 }}>
                    <div style={{ color: '#38bdf8', fontWeight: 900, fontSize: '15px', fontFamily: "'Orbitron', sans-serif" }}>0% FEES</div>
                    <div style={{ color: '#94a3b8', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Free Publishing</div>
                  </div>
                  <div style={{ width: '1px', background: 'rgba(255, 255, 255, 0.1)' }}></div>
                  <div style={{ textAlign: 'center', flex: 1 }}>
                    <div style={{ color: '#4ade80', fontWeight: 900, fontSize: '15px', fontFamily: "'Orbitron', sans-serif" }}>REAL-TIME</div>
                    <div style={{ color: '#94a3b8', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Live Analytics</div>
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

export default Register;
