import { useMemo } from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import { colors } from '../utils/colors';
import About from './About';
import Main from './Main';

const styles = {
  container: {
    alignItems: 'center',
    color: colors.darkGray,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  subTopText: {
    fontSize: 16,
    marginTop: 0,
  },
  topText: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 0,
    marginTop: 8,
  },
};

const propTypes = {
  page: PropTypes.object.isRequired,
};

export default function Body({ page }) {
  const { id = 0 } = page;

  return (
    <Container disableGutters maxWidth={false} style={styles.container}>
      {id === 0 ? <Main /> : null}
      {id === 1 ? <About /> : null}
    </Container>
  );
}

Body.propTypes = propTypes;
