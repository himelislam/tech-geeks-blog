import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../Assets/Image/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav style={pathname.includes('blog') ? ({ display: 'none' }) : ({ display: 'flex' })}>
      <div className='logo-container'>
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
      </div>
      <div className='link-container'>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/videos'
        >
          Videos
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/login'
        >
          Login
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? "active-link" : "link")}>
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
