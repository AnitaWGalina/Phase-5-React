import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

const NavBar = () => {
  const location = useLocation();
  const { user } = useAuth(); // Get the user from the AuthContext

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <span style={styles.logoBlack}>AGRI</span>
        <span style={styles.logoYellow}>BIX</span>
      </div>
      <ul style={styles.menu}>
        {/* Conditionally render the "Home" NavLink */}
        {!["/", "/landing_page"].includes(location.pathname) && (
          // Render only if not on "/" or "/landing_page"
          user ? (
            <li><NavLink to="/landing_page">Home</NavLink></li>
          ) : (
            <li><NavLink exact to="/">Home</NavLink></li>
          )
        )}
        {location.pathname !== "/about" && <li><NavLink to="/about">About</NavLink></li>}
        {location.pathname !== "/contact" && <li><NavLink to="/contact">Contact Us</NavLink></li>}
        {user && location.pathname !== "/profile" && (
          <li><NavLink to="/profile">Profile</NavLink></li>
        )}
        {!user && location.pathname !== "/signup" && <li><NavLink to="/signup">Signup</NavLink></li>}
        {!user && location.pathname !== "/login" && <li><NavLink to="/login">Login</NavLink></li>}
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

export default NavBar;
