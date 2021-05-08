import PropTypes from 'prop-types';
import { colors } from '../../utils/theme';
import TouchableIconComponent from '../TouchableIcon';
import { FooterContainer } from './container';

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

const styles = {
  icon: {
    color: colors.white,
    height: '2rem',
    marginLeft: '1rem',
    width: '2rem',
  },
};

export default function Footer({ items, text }) {
  return (
    <FooterContainer>
      <p>{text}</p>
      <div>
        {items.map(item => {
          return (
            <TouchableIconComponent
              icon={item.icon}
              key={item.url}
              onPress={() => {
                window.open(item.url);
              }}
              style={styles.icon}
            />
          );
        })}
      </div>
    </FooterContainer>
  );
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
