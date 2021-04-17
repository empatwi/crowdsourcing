import './App.css';
import ButtonComponent from './components/Button';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container disableGutters maxWidth="false">
      <header className="App-header">
        <p>Contribua com o empatwi</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonComponent text="Positivo" />
      </header>
    </Container>
  );
}

export default App;
