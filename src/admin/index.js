import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import Announcements from './pages/Announcements';
import Companies from './pages/Companies';

const Admin = () => {
  return (
    <Switch>
      <Route path="/admin/announcements"><Announcements /></Route>
      <Route path="/admin/companies"><Companies /></Route>
      <Route path="/admin"><Announcements /></Route>
    </Switch>
  )
}

export default Admin;