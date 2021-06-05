import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from "react-router-dom";
import { userSelector } from '../redux/user/userSelectors';
import { STUDENT } from '../server/utils';

import Login from './pages/Login';
import Protected from './routes/Protected';
import ProtectedRoute from './routes/ProtectedRoute';

const Student = () => {
  const { isLoggedIn, role } = useSelector(userSelector);
  const auth = isLoggedIn && role === STUDENT;

  if (isLoggedIn && !auth) {
    return <Redirect to={"/" + role} />
  }

  return (
    <Switch>
      <Route path="/student/login" component={Login} />
      <ProtectedRoute path='/student' component={Protected} auth={auth} />
    </Switch>
  )
}

export default Student;
