import React from "react";
import "./NavigationBar.css";
import { useState } from "react";

const NavigationBar = ({ isLoggedIn, theme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`nav-${theme} ${menuOpen ? 'menu-open' : ''}`}>
      <ul className="navbar-ul">
        <h1 className="logo">Logo</h1>
        <div className={`nav-links ${menuOpen ? 'show-links' : ''}`}>
          <li>
            <a className={`link-${theme}`} href="#home">
              Home
            </a>
          </li>
          <li>
            <a className={`link-${theme}`} href="#about">
              About
            </a>
          </li>
          <li>
            <a className={`link-${theme}`} href="#contact">
              Contact
            </a>
          </li>
        </div>
        <div className={`auth`}>
          {isLoggedIn ? (
            <>
              <p>Username</p>
              <button className={`link-${theme}`}>Logout</button>
            </>
          ) : (
            <>
              <button className={`link-${theme}`}>Login</button>
            </>
          )}
        </div>
        <div className="hamburger" onClick={toggleMenu}>
            <div>Menu</div>
        </div>
      </ul>
    </nav>
  );
};

export default NavigationBar;
