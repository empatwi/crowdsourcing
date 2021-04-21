import './App.css';
import { Container } from '@material-ui/core';
import FooterComponent from './components/Footer';
import HeaderComponent from './components/Header';
import { colors } from './utils/colors';
import { footer, header } from './utils/texts';

const styles = {
  main: {
    backgroundColor: colors.lightGreen,
    display: 'flex',
    flexDirection: 'column',
    // fontSize: '10px' + '2vmin',
    height: '100vh',
    width: '100vw',
  },
};

function App() {
  return (
    <Container disableGutters maxWidth={false} style={styles.main}>
      <HeaderComponent tabs={header.tabs} />
      <FooterComponent items={footer.links} />
    </Container>
  );
}

export default App;
