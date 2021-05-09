import './App.css';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { root } from './constants';
import { navBar, footer } from './utils';
import { colors } from './utils/theme';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridContainer alignItems="center" container justify="center" xs={12}>
        <AppContainer>
          <Router>
            <Nav />
            <Switch>
              {navBar.map(item => (
                <Route
                  component={item?.component}
                  exact={item?.path === root}
                  key={item?.path}
                  path={item?.path}
                />
              ))}
            </Switch>
          </Router>
          <Footer items={footer?.links} text={footer?.text} />
        </AppContainer>
      </GridContainer>
    </div>
  );
}

const GridContainer = styled(Grid)`
  margin: 0;
  height: 100vh;
`;

const AppContainer = styled.div`
  background-color: ${colors.green};
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100vw;
`;

export default App;
