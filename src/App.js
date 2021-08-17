import './App.css';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

// import DeleteIcon from '@material-ui/icons/Delete';
// import SaveIcon from '@material-ui/icons/Save'
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import CenteredTextAppBar from './components/CenteredTextAppBar';

import './fonts/Pacifico/Pacifico-Regular.ttf';

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
        <CenteredTextAppBar />
        <SignInPage />
      </div>
    </MuiThemeProvider >
  );
}

export default App;
