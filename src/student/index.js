import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import Announcements from './pages/Announcements';
import Industry from './pages/Industry';

const Student = () => {
  return (
    <Switch>
      <Route path="/student/announcements"><Announcements /></Route>
      <Route path="/student/industry"><Industry /></Route>
      <Route path="/student"><Announcements /></Route>
    </Switch>
  )
}

export default Student;