import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Protected from './routes/Protected';
import ProtectedRoute from './routes/ProtectedRoute';

const Admin = () => {
  const { isLoggedIn } = useSelector(state => state.user)

  return (
    <Switch>
      <Route path="/admin/login" component={Login} />
      <ProtectedRoute path='/admin' component={Protected} auth={isLoggedIn} />
    </Switch>
  )
}

export default Admin;
