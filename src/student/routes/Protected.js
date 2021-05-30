import { Redirect, Route } from "react-router-dom";

import Announcements from "../pages/announcements/Announcements";
import ViewAnnouncement from "../pages/announcements/ViewAnnouncement";
import Industry from "../pages/industry/Industry";
import ViewIndustry from "../pages/industry/ViewIndustry";

const Protected = () => {
  return (
    <>
      <Route exact path="/student" render={() => <Redirect to="/student/announcements" />} />
      <Route exact path="/student/announcements" component={Announcements} />
      <Route exact path="/student/announcements/:id" component={ViewAnnouncement} />
      <Route exact path="/student/industry" component={Industry} />
      <Route exact path="/student/industry/:id" component={ViewIndustry} />
    </>
  )
}

export default Protected;
