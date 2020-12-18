import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import './index.css';

import Manage from './Manage';
import New from './New';
import Edit from './Edit';
import Preview from './Preview';

const Posts = () => {
  return (
    <Switch>
      <Route path="/admin/industry/posts/new"><New /></Route>
      <Route path="/admin/industry/posts/edit/:id"><Edit /></Route>
      <Route path="/admin/industry/posts/preview/:id"><Preview /></Route>
      <Route path="/admin/industry/posts"><Manage /></Route>
    </Switch>
  )
}

export default Posts;