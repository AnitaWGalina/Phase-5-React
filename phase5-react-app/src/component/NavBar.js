import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <span style={styles.logoBlack}>AGRI</span>
        <span style={styles.logoYellow}>BIX</span>
      </div>
      <ul style={styles.menu}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Signup</a></li>
        <li><a href="#">Login</a></li>
      </ul>
    </nav>
  );
};

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

export default Navbar;
