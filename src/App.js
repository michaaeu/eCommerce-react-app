import './App.css';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import NavigationBar from './components/NavigationBar';

import './fonts/Pacifico/Pacifico-Regular.ttf';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// E4717A
const theme = createTheme({
  palette: {
    primary: {
      main: '#923B42'
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <NavigationBar />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/signin' exact component={SignInPage} />
            <Route path='/signup' exact component={SignUpPage} />
          </Switch>
        </Router>
        {/* <HomePage /> */}
        {/* <SignInPage /> */}
      </div>
    </MuiThemeProvider >
  );
}

export default App;
