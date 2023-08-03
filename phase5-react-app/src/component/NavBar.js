import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const styles = {
    navbar: {
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      fontFamily: 'Arial, sans-serif',
      fontSize: '18px',
      transition: 'box-shadow 0.2s', // Add transition for box shadow
    },
    navbarHover: {
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)', // Custom style for hover box shadow
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
    },
    logoBlack: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'white',
    },
    logoYellow: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'yellow',
    },
    menu: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      alignItems: 'center',
    },
    menuItems: {
      marginLeft: '20px',
      textDecoration: 'none',
      color: 'white',
      transition: 'color 0.2s',
    },
    activeMenuItem: {
      color: 'green', // Custom style for active menu item when cursor is on top
    },
  };

  const handleHover = () => {
    // Add the hover box shadow when the cursor is on top of the navbar
    const navbar = document.getElementById('navbar');
    navbar.style.boxShadow = styles.navbarHover.boxShadow;
  };

  const handleLeave = () => {
    // Remove the hover box shadow when the cursor leaves the navbar
    const navbar = document.getElementById('navbar');
    navbar.style.boxShadow = styles.navbar.boxShadow;
  };

  return (
    <nav
      id="navbar"
      style={styles.navbar}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div style={styles.logo}>
        <span style={styles.logoBlack}>AGRI</span>
        <span style={styles.logoYellow}>BIX</span>
      </div>
      <ul style={styles.menu}>
        <li>
          <NavLink to="/" exact style={styles.menuItems} activeStyle={styles.activeMenuItem}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={styles.menuItems} activeStyle={styles.activeMenuItem}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" style={styles.menuItems} activeStyle={styles.activeMenuItem}>
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" style={styles.menuItems} activeStyle={styles.activeMenuItem}>
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" style={styles.menuItems} activeStyle={styles.activeMenuItem}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
