import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';
import {Provider} from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import bootstrap from '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import 'jquery';

import './styles/reset.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import './styles/container.css';
import './styles/taskRow.css';
import './styles/animation.css';
import './styles/scrollBar.css';

import store, {history} from './store/store';
import routes from './routes/routes';

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history} routes={routes}/>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
