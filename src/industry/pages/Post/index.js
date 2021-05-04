import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ManagePosts from './ManagePosts';
import ViewPost from './ViewPost';
import EditPost from './EditPost';

export default function Post() {
  return (
    <Switch>
      <Route exact path="/industry/posts"><ManagePosts /></Route>
      <Route exact path="/industry/posts/edit/:id"><EditPost /></Route>
      <Route exact path="/industry/posts/view/:id"><ViewPost /></Route>
    </Switch>
  )
}
