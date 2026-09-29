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
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-white">
                <h2>Login to your account</h2>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
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
                  <div className="col-md-6">&nbsp;</div>
                  <div className="col-md-6">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    {error && (
                      <span className="text-danger">
                        <strong>{error}</strong>
                      </span>
                    )}
                  </div>
                  <div className="col-lg-12">
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
                    <button className="site-btn" type="submit" disabled={loading}>
                      {loading ? 'Logging in...' : 'Login'} <img src="/assets/img/icons/double-arrow.png" alt="#" />
                    </button>
                    <Link className="btn btn-link text-white ml-3" to="/forgot-password">
                      Forgot Your Password?
                    </Link>
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

export default Login;
