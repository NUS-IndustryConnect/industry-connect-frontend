import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { userSelector } from '../redux/user/userSelectors';
import { COMPANY } from '../server/utils';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Protected from './routes/Protected';
import ProtectedRoute from './routes/ProtectedRoute';

export default function Industry() {
  const { isLoggedIn, role } = useSelector(userSelector);
  const auth = isLoggedIn && role === COMPANY;

  if (isLoggedIn && !auth) {
    return <Redirect to={"/" + role} />
  }

  return (
    <Switch>
      <Route path="/industry/landing" component={Landing} />
      <Route path="/industry/login" component={Login} />
      <ProtectedRoute path='/industry' component={Protected} auth={auth} />
    </Switch>
  )

}
