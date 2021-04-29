import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ManagePosts from './ManagePosts';
import ManageRequests from './ManageRequests';
import New from './New';
import Edit from './Edit';
import View from './View';
import Preview from './Preview';
import Submitted from './Submitted';

export default function Post() {
  return (
    <Switch>
      <Route exact path="/industry/posts/new"><New /></Route>
      <Route exact path="/industry/posts/edit/:id"><Edit /></Route>
      <Route exact path="/industry/posts/view/:id"><View /></Route>
      <Route exact path="/industry/posts/preview"><Preview /></Route>
      <Route exact path="/industry/posts/submitted"><Submitted /></Route>
      <Route exact path="/industry/posts/requests"><ManageRequests /></Route>
      <Route exact path="/industry/posts"><ManagePosts /></Route>
    </Switch>
  )
}
