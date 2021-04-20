import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { userSelector } from '../redux/user/userSelectors';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Protected from './routes/Protected';
import ProtectedRoute from './routes/ProtectedRoute';

export default function Industry() {
  const { isLoggedIn } = useSelector(userSelector)

  return (
    <Switch>
      <Route path="/industry/landing" component={Landing} />
      <Route path="/industry/login" component={Login} />
      <ProtectedRoute path='/industry' component={Protected} auth={isLoggedIn} />
    </Switch>
  )

}
