import './App.css';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HeaderComponent from './components/Header';
import { colors } from './utils/colors';
import { header } from './utils/texts';

const useStyles = makeStyles({
  main: {
    backgroundColor: colors.lightGreen,
    display: 'flex',
    flexDirection: 'column',
    fontSize: '10px' + '2vmin',
    height: '100vh',
    width: '100vw',
  },
});

function App() {
  const classes = useStyles();

  return (
    <Container className={classes.main} disableGutters maxWidth={false}>
      <HeaderComponent tabs={header.tabs} />
    </Container>
  );
}

export default App;
