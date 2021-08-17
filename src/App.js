import './App.css';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
// eslint-disable-next-line
import SignInPage from './pages/SignInPage';
// eslint-disable-next-line
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import CenteredTextAppBar from './components/CenteredTextAppBar';

import './fonts/Pacifico/Pacifico-Regular.ttf';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: '#E4717A'
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <CenteredTextAppBar />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/signin' exact component={SignInPage}/>
            <Route path='/signup' exact component={SignUpPage}/>
          </Switch>
        </Router>
        {/* <HomePage /> */}
        {/* <SignInPage /> */}
      </div>
    </MuiThemeProvider >
  );
}

export default App;
