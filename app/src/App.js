import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';
import { root } from './constants';
import { navBar } from './utils';
import { colors } from './utils/theme';

function App() {
  return (
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
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background-color: ${colors.green};
  display: 'flex';
  flex-direction: 'column';
  flex: 1;
  height: '100vh';
  margin: 0;
  width: '100vw';
`;

export default App;
