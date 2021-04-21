import { ButtonBase } from '@material-ui/core';
import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';

const styles = {
  button: {
    color: colors.darkGray,
    fontSize: '2vh',
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
      style={{
        ...styles.button,
        ...(tab ? styles.tab : {}),
        ...(tab && isSelected ? styles.selectedTab : {}),
      }}
      variant="contained"
    >
      {text}
    </ButtonBase>
  );
}

ButtonComponent.propTypes = propTypes;
ButtonComponent.defaultProps = defaultProps;
