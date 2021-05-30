import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ManageRequests from '../Request/ManageRequests';
import ViewRequest from '../Request/ViewRequest';
import NewRequest from '../Request/NewRequest';
import PreviewRequest from '../Request/PreviewRequest';
import Submitted from '../Request/SubmittedRequest';
import EditRequest from '../Request/EditRequest';

export default function Request() {
  return (
    <Switch>
      <Route exact path="/industry/requests"><ManageRequests /></Route>
      <Route exact path="/industry/requests/new"><NewRequest /></Route>
      <Route exact path="/industry/requests/preview"><PreviewRequest /></Route>
      <Route exact path="/industry/requests/view/:id"><ViewRequest /></Route>
      <Route exact path="/industry/requests/submitted"><Submitted /></Route>
      <Route exact path="/industry/requests/edit/:id"><EditRequest /></Route>
    </Switch>
  )
}
