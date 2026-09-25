import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-left-pic">
          <img src="/assets/img/footer-left-pic.png" alt="" />
        </div>
        <div className="footer-right-pic">
          <img src="/assets/img/footer-right-pic.png" alt="" />
        </div>
        <Link to="/" className="footer-logo" style={{textDecoration: 'none'}}>
          <div style={{fontFamily: "'Roboto', sans-serif", fontWeight: 900, lineHeight: 1, display: 'inline-block', textAlign: 'left'}}>
            <span style={{color: '#b01ba5', fontSize: '28px', letterSpacing: '-1px'}}>END</span>
            <span style={{color: '#fff', fontSize: '28px', letterSpacing: '-1px'}}>GAME</span>
            <div style={{color: '#b01ba5', fontSize: '10px', fontStyle: 'italic', letterSpacing: '1px', marginTop: '-2px', borderTop: '2px solid #b01ba5', paddingTop: '2px', textAlign: 'right'}}>
              GAMING THEME
            </div>
          </div>
        </Link>
        <ul className="main-menu footer-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/games">Games</Link></li>
          <li><Link to="/reviews">Reviews</Link></li>
          <li><Link to="/blog">News</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="footer-social d-flex justify-content-center">
          <a href="#"><i className="fa fa-pinterest"></i></a>
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-dribbble"></i></a>
          <a href="#"><i className="fa fa-behance"></i></a>
        </div>
        <div className="copyright"><a href="#">Colorlib</a> 2018 @ All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
