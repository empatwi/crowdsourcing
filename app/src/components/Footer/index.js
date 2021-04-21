import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';
import { theme } from '../../utils/theme';
import TouchableIconComponent from '../TouchableIcon';

const styles = {
  container: {
    alignItems: 'center',
    backgroundColor: colors.darkGray,
    bottom: 0,
    color: colors.white,
    display: 'flex',
    flexDirection: 'row',
    height: '10vh',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100vw',
  },
  leftText: {
    fontSize: '2vw' + '2vmin',
  },
};

const propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  text: PropTypes.string,
};

const defaultProps = {
  text: '',
};

export default function FooterComponent({ items, text }) {
  return (
    <Container
      disableGutters
      maxWidth={false}
      style={{ ...theme.padding, ...styles.container }}
    >
      <p style={styles.leftText}>{text}</p>
      <div>
        {items.map(item => {
          return (
            <TouchableIconComponent
              icon={item.icon}
              key={item}
              onPress={() => {
                window.open(item.url);
              }}
            />
          );
        })}
      </div>
    </Container>
  );
}

FooterComponent.propTypes = propTypes;
FooterComponent.defaultProps = defaultProps;
