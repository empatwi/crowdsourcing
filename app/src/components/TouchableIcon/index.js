import { SvgIcon, ButtonBase } from '@material-ui/core';
import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';

const size = 24;

const styles = {
  button: {
    marginLeft: '16px',
  },
  default: {
    color: colors.white,
    height: size,
    width: size,
  },
};

const propTypes = {
  icon: PropTypes.element.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default function TouchableIconComponent({ icon, onPress }) {
  return (
    <ButtonBase onClick={onPress} style={styles.button}>
      <SvgIcon style={styles.default}>{icon}</SvgIcon>
    </ButtonBase>
  );
}

TouchableIconComponent.propTypes = propTypes;
