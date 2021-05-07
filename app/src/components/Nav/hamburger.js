import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../../utils/theme';

const propTypes = {
  color: PropTypes.string,
  lines: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  color: colors.darkGray,
  lines: 3,
};

const NavHamburger = ({ color, lines, onClick }) => {
  return (
    <HamburgerIcon color={color} onClick={onClick}>
      {[...Array(parseInt(lines))].map(i => (
        <span key={i + Math.random().toString(36).substring(2, 15)} />
      ))}
    </HamburgerIcon>
  );
};

const HamburgerIcon = styled.div`
  cursor: pointer;
  display: none;
  flex-direction: column;
  span {
    background: ${({ color }) => color};
    border-radius: 5px;
    height: 2px;
    margin-bottom: 4px;
    width: 25px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

NavHamburger.propTypes = propTypes;
NavHamburger.defaultProps = defaultProps;

export default NavHamburger;
