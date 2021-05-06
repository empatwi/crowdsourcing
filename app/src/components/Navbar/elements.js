import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { navBarHeight } from '../../constants';
import { colors } from '../../utils/theme';

export const Nav = styled.nav`
  align-items: center;
  background: ${colors.green};
  display: flex;
  flex-wrap: wrap;
  height: ${navBarHeight};
  justify-content: space-between;
  padding: 0 1rem;
  /* padding: 0.5rem calc((100vw - 5000px) / 2); */
`;

export const NavLink = styled(Link)`
  align-items: center;
  color: ${colors.darkGray};
  cursor: pointer;
  display: flex;
  height: 100%;
  padding: 0 1rem;
  text-decoration: none;
  &.active {
    font-weight: bold;
    text-decoration: underline;
  }
  &:hover {
    opacity: 0.5;
    transition: all 0.2s ease-in-out;
  }
`;

export const NavLinkBurger = styled(Link)`
  align-items: center;
  color: ${colors.darkGray};
  cursor: pointer;
  display: flex;
  font-size: 0.9rem;
  height: 100%;
  padding: 1rem 2rem;
  text-decoration: none;
  &.active {
    font-weight: bold;
    text-decoration: underline;
  }
  &:hover {
    opacity: 0.5;
    transition: all 0.3s ease-in;
  }
`;

export const Bars = styled(FaBars)`
  color: #fff;
  display: none;

  @media screen and (max-width: 768px) {
    cursor: pointer;
    display: block;
    font-size: 1.8rem;
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(-100%, 75%);
  }
`;

export const NavMenu = styled.div`
  align-items: center;
  display: flex;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled(Link)`
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

export const NavBtn = styled.nav`
  align-items: center;
  display: flex;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  background: #256ce1;
  border-radius: 4px;
  border: none;
  color: #fff;
  cursor: pointer;
  margin-left: 24px;
  outline: none;
  padding: 10px 22px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: #fff;
    color: #010606;
    transition: all 0.2s ease-in-out;
  }
`;
