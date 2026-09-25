import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-section">
      <div className="header-warp">
        <div className="header-social d-flex justify-content-end">
          <p>Follow us:</p>
          <a href="#"><i className="fa fa-pinterest"></i></a>
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-dribbble"></i></a>
          <a href="#"><i className="fa fa-behance"></i></a>
        </div>
        <div className="header-bar-warp d-flex align-items-center">
          <Link to="/" className="site-logo" style={{textDecoration: 'none'}}>
            <div style={{fontFamily: "'Roboto', sans-serif", fontWeight: 900, lineHeight: 1, display: 'inline-block'}}>
              <span style={{color: '#b01ba5', fontSize: '28px', letterSpacing: '-1px'}}>END</span>
              <span style={{color: '#fff', fontSize: '28px', letterSpacing: '-1px'}}>GAME</span>
              <div style={{color: '#b01ba5', fontSize: '10px', fontStyle: 'italic', letterSpacing: '1px', marginTop: '-2px', borderTop: '2px solid #b01ba5', paddingTop: '2px', textAlign: 'right'}}>
                GAMING THEME
              </div>
            </div>
          </Link>
          <nav className="top-nav-area d-flex align-items-center justify-content-between w-100">
            <ul className="main-menu primary-menu mb-0 flex-grow-1 text-center">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/games">Games</Link></li>
              <li><Link to="/reviews">Reviews</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="user-panel d-flex align-items-center">
              {localStorage.getItem('token') ? (
                (() => {
                  let userRole = 'user';
                  let userName = 'Dashboard';
                  try {
                    const userData = localStorage.getItem('user');
                    if (userData && userData !== 'undefined') {
                      const parsedUser = JSON.parse(userData);
                      userRole = parsedUser.role || 'user';
                      userName = parsedUser.name || 'Dashboard';
                    }
                  } catch (e) {
                    console.error("Error parsing user data", e);
                  }
                  
                  const dashboardPath = userRole === 'admin' ? '/admin/dashboard' : (userRole === 'developer' ? '/developer/dashboard' : '/user/dashboard');
                  
                  return (
                    <>
                      <Link to={dashboardPath} className="font-weight-bold text-uppercase" style={{fontSize: '18px'}}>{userName}</Link>
                      <span className="text-white mx-2" style={{fontSize: '18px'}}> / </span>
                      <button onClick={() => {
                        localStorage.removeItem('token');
                        localStorage.removeItem('user');
                        window.location.href = '/login';
                      }} className="font-weight-bold text-uppercase text-white bg-transparent border-0 p-0" style={{fontSize: '18px', cursor: 'pointer'}}>Logout</button>
                    </>
                  );
                })()
              ) : (
                <>
                  <Link to="/login" className="font-weight-bold" style={{fontSize: '20px'}}>Login</Link>
                  <span className="text-white mx-1" style={{fontSize: '20px'}}> / </span>
                  <Link to="/register" className="font-weight-bold" style={{fontSize: '20px'}}>Register</Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
