import React from 'react';
import { Switch, Route } from "react-router-dom";

import ViewAllAnnouncements from './ViewAllAnnouncements';
import ViewAnnouncement from './ViewAnnouncement';

export default function Announcements() {
  return (
    <Switch>
      <Route path="/student/announcements/:id"><ViewAnnouncement /></Route>
      <Route path="/student/announcements/"><ViewAllAnnouncements /></Route>
      <Route exact path="/student"><ViewAllAnnouncements /></Route>
    </Switch>
  )
}
