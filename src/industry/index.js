import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Post from './pages/Post';

export default function Industry() {
  return (
    <Switch>
      <Route path="/industry/post"><Post /></Route>
      <Route path="/industry/login"><Login /></Route>
      <Route exact path="/industry"><Landing /></Route>
    </Switch>
  )
}