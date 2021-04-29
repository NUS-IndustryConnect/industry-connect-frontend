import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import { userSelector } from "../../redux/user/userSelectors";
import EditPost from "../pages/Post/Edit";
import ManagePosts from "../pages/Post/ManagePosts";
import ManageRequests from "../pages/Post/ManageRequests";
import NewPost from "../pages/Post/New";
import PreviewPost from "../pages/Post/Preview";
import SubmittedPost from "../pages/Post/Submitted";
import ViewPost from "../pages/Post/View";

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
      <Route exact path="/industry/posts" component={ManagePosts} />
      <Route exact path="/industry/posts/requests" component={ManageRequests} />
      <Route exact path="/industry/posts/new" component={NewPost} />
      <Route exact path="/industry/posts/edit/:id" component={EditPost} />
      <Route exact path="/industry/posts/view/:id" component={ViewPost} />
      <Route exact path="/industry/posts/preview" component={PreviewPost} />
      <Route exact path="/industry/posts/submitted" component={SubmittedPost} />
    </>
  )
}

export default Protected;
