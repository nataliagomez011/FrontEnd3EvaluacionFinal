import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './utils/global.context';
import '../Styles/Navbar.css';

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <div className="brand">DH Odonto</div>
      <div className="nav-links">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/favs" className="nav-link">Favs</Link>
      </div>
      <div className="theme-toggle" onClick={toggleTheme}>
        🌙 
      </div>
    </nav>
  );
};

export default Navbar;