import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import { userSelector } from "../../redux/user/userSelectors";

import ManageRequests from "../pages/Request/ManageRequests";
import NewRequest from "../pages/Request/NewRequest";
import PreviewRequest from "../pages/Request/PreviewRequest";
import SubmittedRequest from "../pages/Request/SubmittedRequest";
import ViewRequest from "../pages/Request/ViewRequest";
import EditRequest from "../pages/Request/EditRequest";

import ManagePosts from "../pages/Post/ManagePosts";
import ViewPost from "../pages/Post/ViewPost";
import EditPost from "../pages/Post/EditPost";

const Protected = () => {
  const { isLoggedIn } = useSelector(userSelector)

  if (!isLoggedIn) {
    return (
      <div style={{textAlign: "center", paddingTop: "20%"}}>
        <h1>LOADING </h1>
        <p>If you are not logged in, click this link to redirect to login page <a href="/industry/login">Sign In</a> </p>
        <p>Otherwise, please wait patiently. Thank you.</p>
      </div>
    )
  }
  
  return (
    <>
      <Route exact path="/industry" render={() => <Redirect to="/industry/posts" />} />
      <Route exact path="/industry/requests" component={ManageRequests} />
      <Route exact path="/industry/requests/new" component={NewRequest} />
      <Route exact path="/industry/requests/preview" component={PreviewRequest} />
      <Route exact path="/industry/requests/submitted" component={SubmittedRequest} />
      <Route exact path="/industry/requests/view/:id" component={ViewRequest} />
      <Route exact path="/industry/requests/edit/:id" component={EditRequest} />
      <Route exact path="/industry/posts" component={ManagePosts} />
      <Route exact path="/industry/posts/view/:id" component={ViewPost} />
      <Route exact path="/industry/posts/edit/:id" component={EditPost} />
    </>
  )
}

export default Protected;
