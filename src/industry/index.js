import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Protected from './routes/Protected';
import ProtectedRoute from './routes/ProtectedRoute';

export default function Industry() {
  const token = localStorage.getItem('@token');
  const role = localStorage.getItem('@role');
  const isLoggedIn = token && role === 'industry' ? true : false;

  return (
    <Switch>
      <Route path="/industry/landing" component={Landing} />
      <Route path="/industry/login" component={Login} />
      <ProtectedRoute path='/industry' component={Protected} auth={isLoggedIn} />
    </Switch>
  )
}
