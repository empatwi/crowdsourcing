import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';
import { theme } from '../../utils/theme';
import ButtonComponent from '../Button';

const styles = {
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    color: colors.darkGray,
    display: 'flex',
    flexDirection: 'row',
    height: '10vh',
    justifyContent: 'flex-end',
    width: '100vw',
  },
};

const propTypes = {
  handleTabChange: PropTypes.func.isRequired,
  selectedTab: PropTypes.object.isRequired,
  tabs: PropTypes.array.isRequired,
};

export default function HeaderComponent({
  handleTabChange,
  selectedTab,
  tabs,
}) {
  return (
    <Container
      disableGutters
      maxWidth={false}
      style={{ ...theme.padding, ...styles.container }}
    >
      {tabs.map(item => {
        return (
          <ButtonComponent
            isSelected={selectedTab?.value === item?.value}
            key={item.value}
            onClick={() => handleTabChange(item)}
            tab
            text={item.value}
          />
        );
      })}
    </Container>
  );
}

HeaderComponent.propTypes = propTypes;
