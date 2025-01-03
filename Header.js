
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-tabs">
          <li><a href="/">Home</a></li>
          <li><a href="/classification">Classification</a></li>
          <li><a href="/settings">Settings</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/about">Contact Us</a></li>
        </ul>
      </nav>
    </header>
    
  );
};

export default Header;
