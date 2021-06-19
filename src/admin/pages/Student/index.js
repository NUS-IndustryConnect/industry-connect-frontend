import React from 'react';
import { Switch, Route } from "react-router-dom";

import ViewAllAnnouncements from "../../../student/pages/Announcements/ViewAllAnnouncements";
import ViewAnnouncement from "../../../student/pages/Announcements/ViewAnnouncement";
import ViewAllIndustry from "../../../student/pages/Industry/ViewAllIndustry";
import ViewIndustry from "../../../student/pages/Industry/ViewIndustry";

export default function Student() {
  return (
    <Switch>
      <Route exact path="/admin/student/announcements"><ViewAllAnnouncements /></Route>
      <Route exact path="/admin/student/announcements/:id"><ViewAnnouncement /></Route>
      <Route exact path="/admin/student/industry"><ViewAllIndustry /></Route>
      <Route exact path="/admin/student/industry/:id"><ViewIndustry /></Route>
      <Route exact path="/admin/student"><ViewAllAnnouncements /></Route>
    </Switch>
  )
}
