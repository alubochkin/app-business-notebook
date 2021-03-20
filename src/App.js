import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { unstable_createMuiStrictModeTheme as createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import themedata from './theme.json';
import './App.css';
import { Container, makeStyles } from '@material-ui/core';
import OfficePage from './components/OfficePage';
import AuthPage from './components/Pages/Auth/AuthPage'
import SignUp from './components/Pages/Auth/SignUp'

import Error from './components/Pages/Error';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#575999',
      light: '#6468d4',
      secondary: '#cd6489'
    }
  },


    primary: themedata.palette.primary.main,
    text: '#333',
    secondary: themedata.palette.secondary.main,
    paper: themedata.palette.background.paper,

    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },

});



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    color: theme.text,
    background: theme.paper,
    height: '100%'
  },
  containerMain: {
    height: '100vh',
    background: '#fff',
  }
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Container className={classes.containerMain} maxWidth={false}>
        <Switch>
          <Route exact path="/auth" component={AuthPage}></Route>
          <Route exact path="/"> <Redirect to="/office" /></Route>  

          <Route path="/office" component={OfficePage} />  
          <Route path="/" component={Error} /> 
     
      </Switch>
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
