import React from 'react';
import { useSelector } from 'react-redux';
import {
  Switch,
  Route,
} from "react-router-dom";

import Login from './pages/login/Login';
import Protected from './routes/Protected';
import ProtectedRoute from './routes/ProtectedRoute';

const Student = () => {
  const { isLoggedIn } = useSelector(state => state.user)

  return (
    <Switch>
      <Route path="/student/login" component={Login} />
      <ProtectedRoute path='/student' component={Protected} auth={isLoggedIn} />
    </Switch>
  )
}

export default Student;
