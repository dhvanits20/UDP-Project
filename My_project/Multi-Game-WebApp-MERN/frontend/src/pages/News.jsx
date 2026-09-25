import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const News = () => {
  const dummyNews = [
    {
      id: 1,
      title: 'The best online game is out now!',
      category: 'Games',
      date: '11.11.18',
      image: '/assets/img/blog-big/1.jpg',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Dictum sit amet justo donec enim diam vulputate ut.'
    },
    {
      id: 2,
      title: 'Top 5 best games in november',
      category: 'Playstation',
      date: '11.11.18',
      image: '/assets/img/blog-big/2.jpg',
      content: 'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum labore suspendisse ultrices gravida. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar.'
    },
    {
      id: 3,
      title: 'Get this game at a promo price',
      category: 'Reviews',
      date: '11.11.18',
      image: '/assets/img/blog-big/3.jpg',
      content: 'Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida ncididunt ut labore. Tristique nulla aliquet enim tortor at auctor urna nunc id.'
    }
  ];

  return (
    <Layout>
      <section className="page-top-section set-bg" style={{ backgroundImage: "url('/assets/img/page-top-bg/3.jpg')" }}>
        <div className="page-info">
          <h2>News</h2>
          <div className="site-breadcrumb">
            <Link to="/">Home</Link> /
            <span>News</span>
          </div>
        </div>
      </section>

      <section className="blog-page">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8 col-md-7">
              <ul className="blog-filter">
                <li><a href="#">Racing</a></li>
                <li><a href="#">Shooters</a></li>
                <li><a href="#">Strategy</a></li>
                <li><a href="#">Online</a></li>
              </ul>
              
              {dummyNews.map(news => (
                <div className="big-blog-item" key={news.id}>
                  <div className="blog-thumbnail">
                    <img src={news.image} alt={news.title} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                  </div>
                  <div className="blog-content text-box text-white">
                    <div className="top-meta">{news.date} / in <a href="#">{news.category}</a></div>
                    <h3>{news.title}</h3>
                    <p>{news.content}</p>
                    <a href="#" className="read-more">Read More <img src="/assets/img/icons/double-arrow.png" alt="#" /></a>
                  </div>
                </div>
              ))}
              
              <div className="site-pagination">
                <a href="#" className="active">01.</a>
                <a href="#">02.</a>
                <a href="#">03.</a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-5 sidebar">
              <div id="stickySidebar">
                <div className="widget-item">
                  <h4 className="widget-title">Categories</h4>
                  <ul>
                    <li><a href="#">Games</a></li>
                    <li><a href="#">Gaming Tips & Tricks</a></li>
                    <li><a href="#">Online Games</a></li>
                    <li><a href="#">Team Games</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Uncategorized</a></li>
                  </ul>
                </div>
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

export default News;
