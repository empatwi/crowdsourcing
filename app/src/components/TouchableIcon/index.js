import { ButtonBase, SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';
import { colors } from '../../utils/theme';

const size = 32;

const styles = {
  default: {
    color: colors.white,
    height: size,
    width: size,
  },
};

const propTypes = {
  icon: PropTypes.element.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
};

const defaultProps = {
  style: {},
};

export default function TouchableIconComponent({ icon, onPress, style }) {
  return (
    <ButtonBase onClick={onPress}>
      <SvgIcon style={style ?? styles.default}>{icon}</SvgIcon>
    </ButtonBase>
  );
}

TouchableIconComponent.propTypes = propTypes;
TouchableIconComponent.defaultProps = defaultProps;
