import React from 'react';
import { Switch, Route } from 'react-router-dom';

import New from './New';
import Edit from './Edit';
import Preview from './Preview';
import Submitted from './Submitted';

export default function Post() {
  return (
    <Switch>
      <Route path="/industry/post/new"><New /></Route>
      <Route path="/industry/post/edit/:id"><Edit /></Route>
      <Route path="/industry/post/preview"><Preview /></Route>
      <Route path="/industry/post/submitted"><Submitted /></Route>
    </Switch>
  )
}