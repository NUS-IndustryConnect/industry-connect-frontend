import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ManageRequests from '../Request/ManageRequests';
import EditRequest from '../Request/EditRequest';
import PreviewRequest from '../Request/PreviewRequest';
import NewRequest from '../Request/NewRequest';
import Submitted from '../Request/SubmittedRequest';

export default function Request() {
  return (
    <Switch>
      <Route exact path="/industry/requests"><ManageRequests /></Route>
      <Route exact path="/industry/requests/edit/:id"><EditRequest /></Route>
      <Route exact path="/industry/requests/preview"><PreviewRequest /></Route>
      <Route exact path="/industry/requests/new"><NewRequest /></Route>
      <Route exact path="/industry/requests/submitted"><Submitted /></Route>
    </Switch>
  )
}
