import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import ManageAnnouncements from './Manage';
import NewAnnouncement from './New';
import EditAnnouncement from './Edit';

export default function Announcements () {
  return (
    <Switch>
      <Route path="/admin/announcements/new"><NewAnnouncement /></Route>
      <Route path="/admin/announcements/edit"><EditAnnouncement /></Route>
      <Route path="/admin/announcements/"><ManageAnnouncements /></Route>
      <Route exact path="/admin"><ManageAnnouncements /></Route>
    </Switch>
  )
}