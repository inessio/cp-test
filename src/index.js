import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette:{
    primary: {
      main:'#020b40'
    },
    secondary: {
      main:'rgb(26,35,83)',
    },
    info:{
      main:'rgb(67,72,113)',
    }
  },
  typography: {
    "fontFamily": `"Jost", "Helvetica", "Arial", sans-serif`,
    button: {
      textTransform: "none"
    }
  }

});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
