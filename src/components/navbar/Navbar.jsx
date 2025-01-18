import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import navbarIcon from "../../assets/navbar-icon.png"

const Navbar = () => {
  return (
    <nav className='navbar__container'>
      <Link to={"/"} className="navbar__logo">Listee Travel</Link>
      <div className="navbar__a__links">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About Us</Link>
        <Link to={"/destinations"}>Destinations</Link>
        <Link to={"/tours"}>Tours</Link>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/blogs"}>Blogs</Link>
       
      </div>
      <div className="navbar__icon">
        <img src={navbarIcon} alt="" />
      </div>
      <div className="navbar__sing__in">
        <Link to={"/signin"}>Sign In</Link>
        <button>Sign Up</button>
      </div>
    
    </nav>
  );
};

export default Navbar;
