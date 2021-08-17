import './App.css';
import { Button, IconButton, Typography, AppBar } from '@material-ui/core';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu'
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Box from '@material-ui/core/Box';
// import DeleteIcon from '@material-ui/icons/Delete';
// import SaveIcon from '@material-ui/icons/Save'
// import ButtonGroup from '@material-ui/core/ButtonGroup';

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
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit">
              <MenuIcon />
            </IconButton>
            <Box display='flex' flexGrow={1} />
            <Typography
              variant="h6"
              style={{ fontFamily: "PACIFICO" }}
            >
              React Shop
            </Typography>
            <Box display='flex' flexGrow={1} />
            <Button
              color="inherit"
              style={{ fontWeight: "bold" }}>
              SIGN IN
            </Button>
          </Toolbar>
        </AppBar>
        <SignInPage />
        {/* <ButtonGroup>
            <Button
              startIcon={<SaveIcon />}
              variant="contained">
              SAVE
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              variant="contained">
              DISCARD
            </Button>
          </ButtonGroup> */}

      </div>
    </MuiThemeProvider >
  );
}

export default App;
