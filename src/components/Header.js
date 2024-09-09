import React from 'react';
import './Header.css'; // تأكد من أن لديك ملف CSS لتنسيق الهيدر

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="site-name">INSET University</h1>
      </div>
    </header>
  );
};

export default Header;
