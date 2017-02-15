import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Main from '../components/Main';
import ListPage from '../components/ListPage';
import EditPage from '../components/EditPage';
import CreatePage from '../components/CreatePage';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={ListPage} />
    <Route path="edit/:taskId" component={EditPage} />
    <Route path="create" component={CreatePage} />
  </Route>
);
