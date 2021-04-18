import { useState } from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { colors } from '../../utils/colors';
import { theme } from '../../utils/theme';
import ButtonComponent from '../Button';

const styles = {
  container: {
    alignContent: 'center',
    backgroundColor: colors.white,
    color: colors.darkGray,
    display: 'flex',
    flexDirection: 'row',
    height: '10vh',
    justifyContent: 'flex-end',
    margin: 0,
    width: '100vw',
  },
};

const propTypes = {
  tabs: PropTypes.array.isRequired,
};

export default function HeaderComponent({ tabs }) {
  const [seletedTab, setSeletedTab] = useState(tabs[0]);

  const handleChange = value => {
    setSeletedTab(value);
  };

  return (
    <Container
      disableGutters
      maxWidth={false}
      style={{ ...theme.padding, ...styles.container }}
    >
      {tabs.map(item => {
        return (
          <ButtonComponent
            isSelected={seletedTab?.value === item?.value}
            key={item.value}
            onClick={() => handleChange(item)}
            tab
            text={item.value}
          />
        );
      })}
    </Container>
  );
}

HeaderComponent.propTypes = propTypes;
