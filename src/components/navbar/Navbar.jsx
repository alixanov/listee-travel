import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import menuIcon from "../../assets/navbar-icon.png";
import closeIcon from "../../assets/nav__close__icon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar__container">
      <Link to="/" className="navbar__logo">Listee Travel</Link>
      <div className={`navbar__a__links ${menuOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/tours">Tours</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/blogs">Blogs</Link>
      </div>
      <div className="navbar__icon" onClick={toggleMenu}>
        <img src={menuOpen ? closeIcon : menuIcon} alt="Menu Icon" />
      </div>
      <div className="navbar__sign__in">
        <Link to="/signin">Sign In</Link>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
