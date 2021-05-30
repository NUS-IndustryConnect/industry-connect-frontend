import React from 'react';
import { Switch, Route } from "react-router-dom";

import ManageAnnouncements from './Manage';
import NewAnnouncement from './New';
import EditAnnouncement from './Edit';

export default function Announcements() {
  return (
    <Switch>
      <Route exact path="/admin/announcements/new"><NewAnnouncement /></Route>
      <Route exact path="/admin/announcements/edit/:id"><EditAnnouncement /></Route>
      <Route exact path="/admin/announcements/"><ManageAnnouncements /></Route>
      <Route exact path="/admin"><ManageAnnouncements /></Route>
    </Switch>
  )
}
