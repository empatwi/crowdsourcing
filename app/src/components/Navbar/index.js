import React, { useState } from 'react';
import styled from 'styled-components';
import { root, navBarHeight } from '../../constants';
import { navBar } from '../../utils';
import { colors } from '../../utils/theme';
import { Nav, NavLink, NavLinkBurger } from './elements';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const HamburgerLogo = () => (
    <Hamburger onClick={() => setIsOpen(!isOpen)}>
      <span />
      <span />
      <span />
    </Hamburger>
  );

  return (
    <Nav>
      <Logo>
        Eli<span>Codes</span>
      </Logo>
      <HamburgerLogo />
      <Menu isOpen={isOpen}>
        {navBar.map(item => {
          if (item?.path !== root)
            return isOpen ? (
              <NavLinkBurger activeStyle key={item?.path} to={item?.path}>
                {item?.title}
              </NavLinkBurger>
            ) : (
              <NavLink activeStyle key={item?.path} to={item?.path}>
                {item?.title}
              </NavLink>
            );
        })}
      </Menu>
    </Nav>
  );
};

export default NavBar;

const Logo = styled.a`
  color: #7b7fda;
  font-size: 1.7rem;
  font-weight: 800;
  padding: 1rem 0;
  text-decoration: none;
  span {
    font-weight: 300;
    font-size: 1.3rem;
  }
`;

const Menu = styled.div`
  align-items: center;
  background: ${colors.green};
  display: flex;
  justify-content: space-between;
  position: fixed;
  right: 0px;
  width: 50%;
  top: ${navBarHeight};
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  cursor: pointer;
  display: none;
  flex-direction: column;
  span {
    background: ${colors.white};
    border-radius: 5px;
    height: 2px;
    margin-bottom: 4px;
    width: 25px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
