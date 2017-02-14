import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'; // to sync react router with redux store

import tasks from './tasks';

const rootReducer = combineReducers({
  tasks,
  routing: routerReducer
});

export default rootReducer;
