import React from 'react';
import { Switch, Route } from "react-router-dom";

import ViewAllIndustry from './ViewAllIndustry';
import ViewIndustry from './ViewIndustry';

export default function Industry() {
  return (
    <Switch>
      <Route path="/student/industry/:id"><ViewIndustry /></Route>
      <Route path="/student/industry/"><ViewAllIndustry /></Route>
    </Switch>
  )
}
