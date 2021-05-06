import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { userSelector } from '../redux/user/userSelectors';
import { ADMIN } from '../server/utils';

import Login from './pages/Login';
import Protected from './routes/Protected';
import ProtectedRoute from './routes/ProtectedRoute';

const Admin = () => {
  const { isLoggedIn, role } = useSelector(userSelector);
  const auth = isLoggedIn && role === ADMIN;

  if (isLoggedIn && !auth) {
    return <Redirect to={"/" + role} />
  }

  return (
    <Switch>
      <Route path="/admin/login" component={Login} />
      <ProtectedRoute path='/admin' component={Protected} auth={auth} />
    </Switch>
  )
}

export default Admin;
