import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import Announcements from "../pages/announcements/Announcements";
import ViewAnnouncement from "../pages/announcements/ViewAnnouncement";
import Industry from "../pages/industry/Industry";
import ViewIndustry from "../pages/industry/ViewIndustry";

const Protected = () => {
  const { isLoggedIn } = useSelector(state => state.user)
  return (
    <>
      {/* TODO: redirect to ADFS to login */}
      {!isLoggedIn && 
        <div style={{textAlign: "center", paddingTop: "20%"}}>
            <h1>LOADING </h1>
            <p>If you are not logged in, click this link to redirect to login page <a href="/student/login">Sign In</a> </p>
            <p>Otherwise, please wait patiently. Thank you.</p>
        </div>
      } 
      <>
        <Route exact path="/student" render={() => <Redirect to="/student/announcements" />} />
        <Route exact path="/student/announcements" component={Announcements} />
        <Route exact path="/student/announcements/:id" component={ViewAnnouncement} />
        <Route exact path="/student/industry" component={Industry} />
        <Route exact path="/student/industry/:id" component={ViewIndustry} />
      </>
    </>
  )
}

export default Protected;
