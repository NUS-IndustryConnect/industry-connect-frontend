import React from 'react';
import { Switch, Route } from "react-router-dom";

import Companies from './Companies';
import Users from './Users';
import Posts from './Posts';

const Industry = () => {
  return (
    <Switch>
      <Route path="/admin/industry/companies"><Companies /></Route>
      <Route path="/admin/industry/users"><Users /></Route>
      <Route path="/admin/industry/posts"><Posts /></Route>
      <Route path="/admin/industry"><Companies /></Route>
    </Switch>
  )
}

export default Industry;
