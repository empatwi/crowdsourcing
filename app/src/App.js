import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EliNav from './components/EliNav';
import { root } from './constants';
import { navBar } from './utils';
import { colors } from './utils/theme';

function App() {
  return (
    <div
      style={{
        backgroundColor: colors.green,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        height: '100vh',
        margin: 0,
        width: '100vw',
      }}
    >
      <Router>
        <EliNav />
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
    </div>
  );
}

export default App;
