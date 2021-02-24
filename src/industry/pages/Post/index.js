import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Manage from './Manage';
import New from './New';
import Edit from './Edit';
import View from './View';
import Preview from './Preview';
import Submitted from './Submitted';

export default function Post() {
  return (
    <Switch>
      <Route path="/industry/posts/new"><New /></Route>
      <Route path="/industry/posts/edit/:id"><Edit /></Route>
      <Route path="/industry/posts/view/:id"><View /></Route>
      <Route path="/industry/posts/preview"><Preview /></Route>
      <Route path="/industry/posts/submitted"><Submitted /></Route>
      <Route exact path="/industry/posts/"><Manage /></Route>
    </Switch>
  )
}