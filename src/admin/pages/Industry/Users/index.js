import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import New from './New';
import Edit from './Edit';
import View from './View';
import Manage from './Manage';

const Users = () => {
  return (
    <Switch>
      <Route exact path="/admin/industry/users/new"><New /></Route>
      <Route exact path="/admin/industry/users/edit/:id"><Edit /></Route>
      <Route exact path="/admin/industry/users/view/:id"><View /></Route>
      <Route path="/admin/industry/users"><Manage /></Route>
    </Switch>
  )
}

export default Users;
