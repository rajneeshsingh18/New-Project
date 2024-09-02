// components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">SafeSteps</div>
      <nav className="nav">
        <ul>
          <li>Home</li>
          <li>Safety Index</li>
          <li>Locality Rankings</li>
          <li>Resources</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="login">Login</button>
        <button className="signup">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
