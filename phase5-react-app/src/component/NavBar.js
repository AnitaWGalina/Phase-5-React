import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  // Define the 'styles' object here
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
      color: '#FFD700', /* Yellow color code */
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
      transition: '0.2s ease-out',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <span style={styles.logoBlack}>AGRI</span>
        <span style={styles.logoYellow}>BIX</span>
      </div>
      <ul style={styles.menu}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
