import { Container, SvgIcon } from '@material-ui/core';
import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';
import { theme } from '../../utils/theme';

const styles = {
  container: {
    alignItems: 'center',
    backgroundColor: colors.darkGray,
    bottom: 0,
    color: colors.white,
    display: 'flex',
    flexDirection: 'row',
    height: '10vh',
    justifyContent: 'flex-end',
    position: 'absolute',
    width: '100vw',
  },
};

const propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default function FooterComponent({ items }) {
  return (
    <Container
      disableGutters
      maxWidth={false}
      style={{ ...theme.padding, ...styles.container }}
    >
      {items.map(item => {
        return <SvgIcon key={item}>{item.icon}</SvgIcon>;
      })}
    </Container>
  );
}

FooterComponent.propTypes = propTypes;
