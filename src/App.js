import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import { Icon } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" color="secondary">TEST</Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
