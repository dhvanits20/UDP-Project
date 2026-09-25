import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Layout from '../../components/Layout';

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
    // Fetch categories
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
      setError(err.response?.data?.message || 'Something went wrong');
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

      <section className="contact-page spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="contact-form-warp">
                <h4 className="comment-title">Submit New Game for Review</h4>
                {error && <div className="alert alert-danger" style={{ background: '#b01ba5', color: '#fff', border: 'none' }}>{error}</div>}
                {success && <div className="alert alert-success" style={{ background: '#ffb320', color: '#fff', border: 'none' }}>Game submitted successfully! Redirecting...</div>}
                
                <form className="comment-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder="Game Title *" name="title" required value={formData.title} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                      <select name="category_id" required value={formData.category_id} onChange={handleChange} style={{ width: '100%', height: '54px', padding: '0 25px', backgroundColor: '#fff', border: 'none', marginBottom: '23px', borderRadius: '5px' }}>
                        <option value="">Select a Category *</option>
                        {categories.map(c => (
                          <option key={c._id} value={c._id}>{c.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Developer / Studio Name *" name="developer_name" required value={formData.developer_name} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                      <input type="email" placeholder="Contact Email *" name="developer_email" required value={formData.developer_email} onChange={handleChange} />
                    </div>
                    <div className="col-md-12">
                      <input type="url" placeholder="Cover Image URL *" name="image_url" required value={formData.image_url} onChange={handleChange} />
                    </div>
                    <div className="col-md-12">
                      <input type="url" placeholder="Game File URL (or iframe source)" name="game_file" value={formData.game_file} onChange={handleChange} />
                    </div>
                    <div className="col-md-12">
                      <textarea placeholder="Describe your game gameplay, controls, and features... *" name="description" required rows="4" value={formData.description} onChange={handleChange}></textarea>
                      <button className="site-btn" type="submit" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit Game'} <img src="/assets/img/icons/double-arrow.png" alt="#" />
                      </button>
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

export default SubmitGame;
