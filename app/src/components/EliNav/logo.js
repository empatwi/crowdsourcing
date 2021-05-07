import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  size: PropTypes.string.isRequired,
};

const defaultProps = {
  size: '70%',
};

const NavLogo = ({ size }) => {
  return (
    <div className="row">
      <div className="logo">
        <Logo size={size} />
      </div>
    </div>
  );
};

const Logo = styled.img.attrs({
  src: '/images/tempLogo.png',
})`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`;

NavLogo.propTypes = propTypes;
NavLogo.defaultProps = defaultProps;

export default NavLogo;
