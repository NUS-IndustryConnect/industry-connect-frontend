import { Redirect, Route } from "react-router-dom";

import Announcements from '../pages/Announcements';
import Industry from "../pages/Industry";
import Student from "../pages/Student";

const Protected = () => {
  return (
    <>
      <Route exact path="/admin" render={() => <Redirect to="/admin/announcements" />} />
      <Route path="/admin/announcements" component={Announcements} />
      <Route path="/admin/industry" component={Industry} />
      <Route path="/admin/student" component={Student} />
    </>
  )
}

export default Protected;
