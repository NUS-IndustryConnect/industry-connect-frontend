import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import Manage from './Manage';
import New from './New';
import Edit from './Edit';
import Preview from './Preview';
import View from './View';

import './index.css';

const Posts = () => {
  return (
    <Switch>
      <Route path="/admin/industry/posts/new"><New /></Route>
      <Route path="/admin/industry/posts/edit/:id"><Edit /></Route>
      <Route path="/admin/industry/posts/preview/:id"><Preview /></Route>
      <Route path="/admin/industry/posts/view/:id"><View /></Route>
      <Route path="/admin/industry/posts"><Manage /></Route>
    </Switch>
  )
}

export default Posts;
