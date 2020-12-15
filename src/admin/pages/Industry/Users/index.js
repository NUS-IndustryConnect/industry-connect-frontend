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
      <Route path="/admin/industry/users/new"><New /></Route>
      <Route path="/admin/industry/users/edit"><Edit /></Route>
      <Route path="/admin/industry/users/view"><View /></Route>
      <Route path="/admin/industry/users"><Manage /></Route>
    </Switch>
  )
}

export default Users;