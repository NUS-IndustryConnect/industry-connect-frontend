import { Redirect, Route } from "react-router-dom";

import ManageAnnouncements from "../pages/Announcements/Manage";
import NewAnnouncement from "../pages/Announcements/New";
import EditAnnouncement from "../pages/Announcements/Edit";

import Industry from "../pages/Industry";
import Companies from "../pages/Industry/Companies";
import NewCompany from "../pages/Industry/Companies/New";
import ViewCompany from "../pages/Industry/Companies/View";
import EditCompany from "../pages/Industry/Companies/Edit";

import Posts from "../pages/Industry/Posts";
import ManageRequests from "../pages/Industry/Posts/ManageRequests";
import ViewPost from "../pages/Industry/Posts/View";
import NewPost from "../pages/Industry/Posts/New";
import PreviewPost from "../pages/Industry/Posts/Preview";
import EditPost from "../pages/Industry/Posts/Edit";

import Users from "../pages/Industry/Users";
import NewUser from "../pages/Industry/Users/New";
import ViewUser from "../pages/Industry/Users/View";
import EditUser from "../pages/Industry/Users/Edit";

import Student from "../pages/Student";

const Protected = () => {
  return (
    <>
      <Route exact path="/admin" render={() => <Redirect to="/admin/announcements" />} />
      
      <Route exact path="/admin/announcements" component={ManageAnnouncements} />
      <Route exact path="/admin/announcements/new" component={NewAnnouncement} />
      <Route exact path="/admin/announcements/edit/:id" component={EditAnnouncement} />

      <Route exact path="/admin/industry" component={Industry} />
      
      <Route exact path="/admin/industry/companies" component={Companies} />
      <Route exact path="/admin/industry/companies/new" component={NewCompany} />
      <Route exact path="/admin/industry/companies/view/:id" component={ViewCompany} />
      <Route exact path="/admin/industry/companies/edit/:id" component={EditCompany} />
      
      <Route exact path="/admin/industry/users" component={Users} />
      <Route exact path="/admin/industry/users/new" component={NewUser} />
      <Route exact path="/admin/industry/users/edit/:id" component={EditUser} />
      <Route exact path="/admin/industry/users/view/:id" component={ViewUser} />

      <Route exact path="/admin/industry/posts" component={Posts} />
      <Route exact path="/admin/industry/posts/requests" component={ManageRequests} />
      <Route exact path="/admin/industry/posts/new" component={NewPost} />
      <Route exact path="/admin/industry/posts/edit/:id" component={EditPost} />
      <Route exact path="/admin/industry/posts/preview/:id" component={PreviewPost} />
      <Route exact path="/admin/industry/posts/view/:id" component={ViewPost} />

      <Route path="/admin/student" component={Student} />
    </>
  )
}

export default Protected;
