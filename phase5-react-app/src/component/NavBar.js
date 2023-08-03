import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const styles = {
    navbar: {
      backgroundColor: 'purple',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 20px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
      fontFamily: 'Arial, sans-serif',
      fontSize: '18px',
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
      color: 'black',
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
      hover: 'color 0.2s',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <span style={styles.logoBlack}>AGRI</span>
        <span style={styles.logoYellow}>BIX</span>
      </div>
      <ul style={styles.menu}>
        <li>
          <Link to="/" style={styles.menuItems}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={styles.menuItems}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" style={styles.menuItems}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link to="/signup" style={styles.menuItems}>
            Signup
          </Link>
        </li>
        <li>
          <Link to="/login" style={styles.menuItems}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
