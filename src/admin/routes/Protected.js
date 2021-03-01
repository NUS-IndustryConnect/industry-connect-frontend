import { Redirect, Route } from "react-router-dom";

import EditAnnouncement from "../pages/Announcements/Edit";
import ManageAnnouncements from "../pages/Announcements/Manage";
import NewAnnouncement from "../pages/Announcements/New";
import Industry from "../pages/Industry";
import Companies from "../pages/Industry/Companies";
import EditCompany from "../pages/Industry/Companies/Edit";
import NewCompany from "../pages/Industry/Companies/New";
import ViewCompany from "../pages/Industry/Companies/View";
import Posts from "../pages/Industry/Posts";
import EditPost from "../pages/Industry/Posts/Edit";
import NewPost from "../pages/Industry/Posts/New";
import PreviewPost from "../pages/Industry/Posts/Preview";
import ViewPost from "../pages/Industry/Posts/View";
import Users from "../pages/Industry/Users";
import EditUser from "../pages/Industry/Users/Edit";
import NewUser from "../pages/Industry/Users/New";
import ViewUser from "../pages/Industry/Users/View";

const Protected = () => {
  return (
    <>
      <Route exact path="/admin" render={() => <Redirect to="/admin/announcements" />} />
      
      <Route exact path="/admin/announcements" component={ManageAnnouncements} />
      <Route exact path="/admin/announcements/new" component={NewAnnouncement} />
      <Route exact path="/admin/announcements/edit/:id" component={EditAnnouncement} />

      <Route exact path="/admin/industry" component={Industry} />
      
      <Route path="/admin/industry/companies" component={Companies} />
      <Route path="/admin/industry/companies/new" component={NewCompany} />
      <Route path="/admin/industry/companies/view/:id" component={ViewCompany} />
      <Route path="/admin/industry/companies/edit/:id" component={EditCompany} />
      
      <Route path="/admin/industry/users" component={Users} />
      <Route path="/admin/industry/users/new" component={NewUser} />
      <Route path="/admin/industry/users/edit/:id" component={EditUser} />
      <Route path="/admin/industry/users/view/:id" component={ViewUser} />

      <Route path="/admin/industry/posts" component={Posts} />
      <Route path="/admin/industry/posts/new" component={NewPost} />
      <Route path="/admin/industry/posts/edit/:id" component={EditPost} />
      <Route path="/admin/industry/posts/preview/:id" component={PreviewPost} />
      <Route path="/admin/industry/posts/view/:id" component={ViewPost} />
    </>
  )
}

export default Protected;
