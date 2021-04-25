import { ButtonBase, SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';

const width = 128;
const iconSize = 24;

const styles = {
  base: {
    color: colors.darkGray,
    fontSize: '1.2vw',
  },
  button: {
    alignItems: 'center',
    borderRadius: 8,
    color: colors.white,
    height: width / 4,
    width: width,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  icon: {
    height: iconSize,
    marginLeft: 8,
    width: iconSize,
  },
  selectedTab: {
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  tab: {
    marginLeft: '4vw',
  },
};

const propTypes = {
  icon: PropTypes.element,
  isEnabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  tab: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

const defaultProps = {
  icon: null,
  isEnabled: true,
  isSelected: false,
  style: {},
  tab: false,
};

export default function ButtonComponent({
  icon,
  isEnabled,
  isSelected,
  onClick,
  style,
  tab,
  text,
}) {
  return (
    <ButtonBase
      disabled={!isEnabled}
      onClick={onClick}
      style={{
        ...styles.base,
        ...(tab ? styles.tab : styles.button),
        ...(!tab && !isEnabled ? styles.buttonDisabled : {}),
        ...(tab && isSelected ? styles.selectedTab : {}),
        ...style,
      }}
      variant="contained"
    >
      {text}
      {icon ? <SvgIcon style={styles.icon}>{icon}</SvgIcon> : null}
    </ButtonBase>
  );
}

ButtonComponent.propTypes = propTypes;
ButtonComponent.defaultProps = defaultProps;
