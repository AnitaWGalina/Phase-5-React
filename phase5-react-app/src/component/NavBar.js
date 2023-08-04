import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import HoverBackground from './HoverBackground'; 

const NavBar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <NavLink to="/">
          <LogoText>AGRI</LogoText>
          <LogoTextYellow>BIX</LogoTextYellow>
        </NavLink>
      </LogoContainer>
      <MenuList>
        <li>
          <StyledNavLink to="/" exact>
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/about">About</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/contact">Contact Us</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/signup">Signup</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/login">Login</StyledNavLink>
        </li>
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
  font-family: 'Inria Serif', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
`;

const LogoText = styled.span`
  font-size: 30px;
  font-weight: bold;
  color : white;
`;

const LogoTextYellow = styled(LogoText)`
  color: orange;
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
