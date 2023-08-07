import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components'; // Import styled-components library

const NavBar = () => {
  const location = useLocation();
  const { user } = useAuth(); // Get the user from the AuthContext

  return (
    <NavContainer>
      <LogoContainer>
        <LogoText>AGRI</LogoText>
        <LogoTextYellow>BIX</LogoTextYellow>
      </LogoContainer>
      <MenuList>
        {!["/", "/farmer_page", "/client_page"].includes(location.pathname) && (
          user ? (
            <li>
              {user.status === "Public Client" ? (
                <StyledNavLink to="/client_page">Home</StyledNavLink>
              ) : user.status === "Farming Group Administrator" ? (
                <StyledNavLink to="/farmer_page">Home</StyledNavLink>
              ) : (
                <StyledNavLink to="/">Home</StyledNavLink>
              )}
            </li>
          ) : (
            <li><StyledNavLink exact to="/">Home</StyledNavLink></li>
          )
        )}
        {location.pathname !== "/about" && <li><StyledNavLink to="/about">About</StyledNavLink></li>}
        {location.pathname !== "/contact" && <li><StyledNavLink to="/contact">Contact Us</StyledNavLink></li>}
        {user && location.pathname !== "/profile" && (
          <li><StyledNavLink to="/profile">Profile</StyledNavLink></li>
        )}
        {!user && location.pathname !== "/signup" && <li><StyledNavLink to="/signup">Signup</StyledNavLink></li>}
        {!user && location.pathname !== "/login" && <li><StyledNavLink to="/login">Login</StyledNavLink></li>}
      </MenuList>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  width: 95%;
  height: 66px;
  flex-shrink: 0;
  background: black;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-family: 'Arial, sans-serif';
  font-size: 18px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
`;

const LogoText = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;

const LogoTextYellow = styled(LogoText)`
  color: #FFD700; /* Yellow color code */
`;

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

const StyledNavLink = styled(NavLink)`
  margin: 0 10px;
  text-decoration: none;
  color: white;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #317873;
    color: #fff;
  }

  &.active {
    color: #C5F600;
  }
`;

export default NavBar;
