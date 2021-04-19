import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";

import Login from './pages/login/Login';
import Protected from './routes/Protected';
import ProtectedRoute from './routes/ProtectedRoute';

const Student = () => {
  const token = localStorage.getItem('@token');
  const role = localStorage.getItem('@role');
  const isLoggedIn = token && role === 'student' ? true : false;

  return (
    <Switch>
      <Route path="/student/login" component={Login} />
      <ProtectedRoute path='/student' component={Protected} auth={isLoggedIn} />
    </Switch>
  )
}

export default Student;
