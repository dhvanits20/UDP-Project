import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
// import { useAuth } from '../context/AuthContext'; // Assume we will use this later

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: '' }
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  // const { user } = useAuth(); // Assume we will have auth context
  const user = null; // Mock for now until auth is integrated

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Auth check similar to Laravel's @auth
    if (!user && false) { // Set false temporarily so the form can be seen/tested without auth
      navigate('/login');
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      // Fake API Call for now. Later hook it up to our backend Express route
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus({ type: 'success', message: 'Your message has been sent successfully!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="page-top-section set-bg" style={{ backgroundImage: "url('/assets/img/page-top-bg/4.jpg')" }}>
        <div className="page-info">
          <h2>Contact</h2>
          <div className="site-breadcrumb">
            <Link to="/">Home</Link> /
            <span>Contact</span>
          </div>
        </div>
      </section>

      <section className="contact-page">
        <div className="container">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.502901452661!2d72.4842938!3d23.0039775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b8849b389f1%3A0xc3c545f492b4742a!2sLJ%20University!5e0!3m2!1sen!2sin!4v1714588800000!5m2!1sen!2sin"
              style={{ border: 0, width: '100%', height: '400px' }}
              allowFullScreen
              title="Location Map"
            ></iframe>
          </div>
          <div className="row">
            <div className="col-lg-7 order-2 order-lg-1">
              {status?.type === 'success' && (
                <div className="alert alert-success" style={{ background: 'rgba(0, 255, 0, 0.1)', color: '#00ff00', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
                  {status.message}
                </div>
              )}
              {status?.type === 'error' && (
                <div className="alert alert-danger" style={{ background: 'rgba(255, 0, 0, 0.1)', color: '#ff0000', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
                  {status.message}
                </div>
              )}
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Your e-mail" value={formData.email} onChange={handleChange} required />
                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                <button 
                  className="site-btn" 
                  type="submit" 
                  disabled={isSubmitting}
                  style={isSubmitting ? { opacity: 0.7, cursor: 'not-allowed' } : {}}
                >
                  {isSubmitting ? 'SENDING...' : 'Send message'}
                  <img src="/assets/img/icons/double-arrow.png" alt="#" />
                </button>
              </form>
            </div>
            
            <div className="col-lg-5 order-1 order-lg-2 contact-text text-white">
              <h3>Howdy! Say hello</h3>
              <p>We would love to hear from you! Whether you have a question about our games, need assistance, or just want to share your feedback, our team is ready to help. Please fill out the form below or reach out to us directly, and we will get back to you as soon as possible.</p>
              <div className="cont-info">
                <div className="ci-icon"><img src="/assets/img/icons/location.png" alt="" /></div>
                <div className="ci-text">Nava vadaj, Ahmedabad, Gujarat, India</div>
              </div>
              <div className="cont-info">
                <div className="ci-icon"><img src="/assets/img/icons/phone.png" alt="" /></div>
                <div className="ci-text">+91 9998322429</div>
              </div>
              <div className="cont-info">
                <div className="ci-icon"><img src="/assets/img/icons/mail.png" alt="" /></div>
                <div className="ci-text">dhvanitcshah172006@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container">
          <h2>Subscribe to our newsletter</h2>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="ENTER YOUR E-MAIL" />
            <button className="site-btn">subscribe <img src="/assets/img/icons/double-arrow.png" alt="#" /></button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
