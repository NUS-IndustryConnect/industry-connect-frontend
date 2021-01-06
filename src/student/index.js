import React, { useEffect } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import store, { initStoreForStudent } from "../redux/store";

import Announcements from './pages/announcements/Announcements';
import Industry from './pages/industry/Industry';


const Student = () => {
  useEffect(() => {
    store.dispatch(initStoreForStudent())
  }, []);
  return (
    <Switch>
      <Route path="/student/announcements"><Announcements /></Route>
      <Route path="/student/industry"><Industry /></Route>
      <Route path="/student"><Announcements /></Route>
    </Switch>
  )
}

export default Student;
