import React from 'react';
import { Switch, Route } from "react-router-dom";

import ManagePosts from './ManagePosts';
import ManageRequests from './ManageRequests';
import New from './New';
import Edit from './Edit';
import Preview from './Preview';
import View from './View';

import './index.css';

const Posts = () => {
  return (
    <Switch>
      <Route exact path="/admin/industry/posts/new"><New /></Route>
      <Route exact path="/admin/industry/posts/edit/:id"><Edit /></Route>
      <Route exact path="/admin/industry/posts/preview/:id"><Preview /></Route>
      <Route exact path="/admin/industry/posts/view/:id"><View /></Route>
      <Route exact path="/admin/industry/posts/requests"><ManageRequests /></Route>
      <Route exact path="/admin/industry/posts"><ManagePosts /></Route>
    </Switch>
  )
}

export default Posts;
