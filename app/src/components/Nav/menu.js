import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../utils/theme';

export const Menu = styled.div`
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

export const MenuLink = styled(Link)`
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
