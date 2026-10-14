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
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-white d-flex flex-wrap justify-content-between align-items-center" style={{ marginBottom: '30px' }}>
                <h2 style={{ margin: 0 }}>Create a new account</h2>
                <Link 
                  to="/developer/register" 
                  style={{ 
                    padding: '8px 18px', 
                    borderRadius: '25px', 
                    background: 'rgba(217, 70, 239, 0.15)', 
                    border: '1px solid rgba(217, 70, 239, 0.4)', 
                    color: '#f0abfc', 
                    textDecoration: 'none', 
                    fontSize: '13px', 
                    fontWeight: 700, 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '6px' 
                  }}
                >
                  <span>🎮 Are you a Game Developer?</span>
                  <span style={{ color: '#fff' }}>Register Here →</span>
                </Link>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
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
                  <div className="col-md-6"></div>

                  <div className="col-md-6">
                    <input 
                      type="email" 
                      placeholder="Email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <div className="col-md-6"></div>

                  <div className="col-md-6">
                    <input 
                      type="password" 
                      placeholder="Password" 
                      name="password" 
                      value={formData.password} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <div className="col-md-6"></div>

                  <div className="col-md-6">
                    <input 
                      type="password" 
                      placeholder="Confirm Password" 
                      name="password_confirmation" 
                      value={formData.password_confirmation} 
                      onChange={handleChange} 
                      required 
                    />
                    {error && (
                      <span className="text-danger d-block mt-2">
                        <strong>{error}</strong>
                      </span>
                    )}
                  </div>

                  <div className="col-lg-12 mt-4">
                    <button className="site-btn" type="submit" disabled={loading}>
                      {loading ? 'Registering...' : 'Register'} <img src="/assets/img/icons/double-arrow.png" alt="#" />
                    </button>
                    <div className="mt-3 d-flex flex-wrap justify-content-between align-items-center">
                      <div>
                        <span className="text-white">Already have an account? </span>
                        <Link to="/login" className="text-primary font-weight-bold">Login here</Link>
                      </div>
                      <Link to="/developer/register" style={{ color: '#d946ef', fontSize: '13px', fontWeight: 700, textDecoration: 'none' }}>
                        Register as Game Developer / Studio →
                      </Link>
                    </div>
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

export default Register;
