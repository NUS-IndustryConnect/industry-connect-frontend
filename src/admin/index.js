import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Protected from './routes/Protected';
import ProtectedRoute from './routes/ProtectedRoute';

const Admin = () => {
  const token = localStorage.getItem('@token');
  const role = localStorage.getItem('@role');
  const isLoggedIn = token && role === 'admin' ? true : false;

  return (
    <Switch>
      <Route path="/admin/login" component={Login} />
      <ProtectedRoute path='/admin' component={Protected} auth={isLoggedIn} />
    </Switch>
  )
}

export default Admin;
