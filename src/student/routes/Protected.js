import { Redirect, Route } from "react-router-dom";

import Announcements from "../pages/Announcements";
import Industry from "../pages/Industry";

const Protected = () => {
  return (
    <>
      <Route exact path="/student" render={() => <Redirect to="/student/announcements" />} />
      <Route path="/student/announcements" component={Announcements} />
      <Route path="/student/industry" component={Industry} />
    </>
  )
}

export default Protected;
