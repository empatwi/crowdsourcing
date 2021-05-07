import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { root } from '../../constants';

const propTypes = {
  size: PropTypes.string,
};

const defaultProps = {
  size: '70%',
};

const NavLogo = ({ size }) => {
  return (
    <NavLogoContainer to={root}>
      <Logo size={size} />
    </NavLogoContainer>
  );
};

const NavLogoContainer = styled(Link)``;

const Logo = styled.img.attrs({
  src: '/images/tempLogo.png',
})`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;

NavLogo.propTypes = propTypes;
NavLogo.defaultProps = defaultProps;

export default NavLogo;
