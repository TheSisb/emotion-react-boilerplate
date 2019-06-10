import {hot} from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'theme-ui';
import App from './App.js';
import theme from './theme';

const HotApp = hot(module)(App);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <HotApp />
  </ThemeProvider>,
  document.getElementById('root')
);
