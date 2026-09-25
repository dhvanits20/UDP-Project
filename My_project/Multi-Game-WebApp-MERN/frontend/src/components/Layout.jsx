import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <div id="preloder" style={{ display: 'none' }}>
        <div className="loader"></div>
      </div>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
