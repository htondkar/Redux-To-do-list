import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import rootReducer from '../reducers/index';

// laod initial state
const defaultState = {
  tasks: []
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  defaultState,
  composeEnhancers()
);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
