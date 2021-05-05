import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages';
import { navBar } from './utils';

function App() {
  const root = '/';

  return (
    <Router>
      <Navbar />
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
  );
}

export default App;
