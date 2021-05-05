import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  const Home = () => <h1>Home</h1>;
  const About = () => <h1>About</h1>;
  const Services = () => <h1>Services</h1>;
  const Contact = () => <h1>Contact</h1>;
  const SignUp = () => <h1>SignUp</h1>;

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} path="/about" />
        <Route component={Services} path="/services" />
        <Route component={Contact} path="/contact-us" />
        <Route component={SignUp} path="/sign-up" />
      </Switch>
    </Router>
  );
}

export default App;
