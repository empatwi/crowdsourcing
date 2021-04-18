import { ButtonBase } from '@material-ui/core';
import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';

const styles = {
  button: {
    color: colors.darkGray,
    fontSize: '16px',
  },
  selectedTab: {
    textDecoration: 'underline',
  },
  tab: {
    marginLeft: '16px',
  },
};

const propTypes = {
  icon: PropTypes.string,
  isEnabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  tab: PropTypes.bool,
  text: PropTypes.string.isRequired,
};

const defaultProps = {
  icon: '',
  isEnabled: true,
  isSelected: false,
  tab: false,
};

export default function ButtonComponent({
  icon,
  isEnabled,
  isSelected,
  onClick,
  tab,
  text,
}) {
  return (
    <ButtonBase
      disabled={!isEnabled}
      onClick={onClick}
      style={
        tab
          ? isSelected
            ? { ...styles.button, ...styles.tab, ...styles.selectedTab }
            : { ...styles.button, ...styles.tab }
          : styles.button
      }
      variant="contained"
    >
      {text}
    </ButtonBase>
  );
}

ButtonComponent.propTypes = propTypes;
ButtonComponent.defaultProps = defaultProps;
