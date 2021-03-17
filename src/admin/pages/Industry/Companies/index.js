import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import Manage from './Manage';
import New from './New';
import View from './View';
import Edit from './Edit';

import './index.css'

const Companies = () => {
  return (
    <Switch>
      <Route exact path="/admin/industry/companies/new"><New /></Route>
      <Route exact path="/admin/industry/companies/view/:id"><View /></Route>
      <Route exact path="/admin/industry/companies/edit/:id"><Edit /></Route>
      <Route exact path="/admin/industry/companies"><Manage /></Route>
      <Route exact path="/admin/industry/"><Manage /></Route>
    </Switch>
  )
}

export default Companies;
