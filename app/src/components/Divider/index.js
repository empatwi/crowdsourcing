import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';

const styles = {
  container: {
    width: '100%',
  },
};

const propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};

const defaultProps = {
  color: colors.darkGray,
  size: '4px',
};

export default function DividerComponent({ color, size }) {
  return (
    <Container
      disableGutters
      maxWidth={false}
      style={{
        ...styles.container,
        backgroundColor: color,
        height: size,
      }}
    />
  );
}

DividerComponent.propTypes = propTypes;
DividerComponent.defaultProps = defaultProps;
