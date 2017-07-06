import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {
  MuiThemeProvider,
  createMuiTheme
} from 'material-ui/styles';
import createPalette from 'material-ui/styles/palette';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const theme = createMuiTheme({
  palette: createPalette({
    type: 'light'
  })
});

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();
