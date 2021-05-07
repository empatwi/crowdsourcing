import { useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { root } from '../../constants';
import { navBar } from '../../utils';
import { colors } from '../../utils/theme';
import NavLogo from './logo';

const EliNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav isOpen={isOpen}>
      <NavLogo size="100%" />
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        {navBar.map(item => {
          return (
            item?.path !== root && (
              <MenuLink activeStyle key={item?.path} to={item?.path}>
                {item?.title}
              </MenuLink>
            )
          );
        })}
      </Menu>
    </Nav>
  );
};

export default EliNav;

const MenuLink = styled(Link)`
  color: ${colors.darkGray};
  cursor: pointer;
  font-size: 1rem;
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease-in;
  &.active {
    font-weight: bold;
    text-decoration: underline;
  }
  &:hover {
    color: ${colors.green};
  }
`;

const Nav = styled.nav`
  align-items: center;
  background: ${colors.white};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  left: 0;
  padding: 0 2rem;
  position: absolute;
  right: 0;
  top: 0;
`;

const Menu = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  @media (max-width: 768px) {
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    overflow: hidden;
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

const Hamburger = styled.div`
  cursor: pointer;
  display: none;
  flex-direction: column;
  span {
    background: #7b7fda;
    border-radius: 5px;
    height: 2px;
    margin-bottom: 4px;
    width: 25px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;
