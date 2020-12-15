import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import Manage from './Manage';
import New from './New';
import View from './View';
import Edit from './Edit';

const Companies = () => {
  return (
    <Switch>
      <Route path="/admin/industry/companies/new"><New /></Route>
      <Route path="/admin/industry/companies/view"><View /></Route>
      <Route path="/admin/industry/companies/edit"><Edit /></Route>
      <Route path="/admin/industry/companies"><Manage /></Route>
      <Route exact path="/admin/industry/"><Manage /></Route>
    </Switch>
  )
}

export default Companies;