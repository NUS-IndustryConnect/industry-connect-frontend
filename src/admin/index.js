import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Announcements from './pages/Announcements';
import Industry from './pages/Industry';
import './index.css'

const Admin = () => {
  return (
    <Switch>
      <Route path="/admin/announcements"><Announcements /></Route>
      <Route path="/admin/industry"><Industry /></Route>
      <Route path="/admin/login"><Login /></Route>
      <Route exact path="/admin"><Announcements /></Route>
    </Switch>
  )
}

export default Admin;
