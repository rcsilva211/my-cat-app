import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #007bff;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const StyledLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &.active {
    background-color: #0056b3;
  }

  &:hover {
    background-color: #0056b3;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>Cat Explorer</Logo>
      <NavLinks>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/cats">Cats</StyledLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
