import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import axios from 'axios';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/games/reviews/all');
        setReviews(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        setLoading(false);
      }
    };
    fetchReviews();
  }, []);

  return (
    <Layout>
      <section className="page-top-section set-bg" style={{ backgroundImage: "url('/assets/img/page-top-bg/2.jpg')" }}>
        <div className="page-info">
          <h2>Reviews</h2>
          <div className="site-breadcrumb">
            <Link to="/">Home</Link> /
            <span>Reviews</span>
          </div>
        </div>
      </section>

      <section className="review-section">
        <div className="container">
          {loading ? (
            <p className="text-white">Loading reviews...</p>
          ) : reviews.length > 0 ? (
            reviews.map(review => (
              <div className="review-item" key={review._id}>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="review-pic">
                      <img 
                        src={review.game_id?.image_url || '/assets/img/review/1.jpg'} 
                        alt={review.game_id?.title || 'Game'} 
                        style={{ width: '100%', height: '250px', objectFit: 'cover' }} 
                      />
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="review-content text-box text-white">
                      <div className="rating">
                        <h5><i>Rating</i><span>{review.rating}</span> / 5</h5>
                      </div>
                      <div className="top-meta">
                        {new Date(review.createdAt).toLocaleDateString('en-GB')} / in <a href="#">{review.game_id?.category_id?.name || 'Games'}</a>
                      </div>
                      <h3>{review.game_id?.title || 'Unknown Game'}</h3>
                      <p>{review.comment?.substring(0, 350)}{review.comment?.length > 350 ? '...' : ''}</p>
                      <Link to={`/play/${review.game_id?._id}`} className="read-more">
                        Read More <img src="/assets/img/icons/double-arrow.png" alt="#" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">No reviews found.</p>
          )}
          
          {/* Pagination could go here if implemented on backend */}
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

export default Reviews;
