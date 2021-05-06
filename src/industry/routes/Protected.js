import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

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

import { logout } from "../../redux/user/userActions";
import Page from "../../common/Page";

const Protected = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoggedIn } = useSelector(userSelector);

  const handleOnClick = () => {
    dispatch(logout());
    history.push("/industry/login");
  }

  if (!isLoggedIn) {
    <Page title="Company Dashboard">
      <div className="login">
        <h3>Welcome to IndustryConnect!</h3>
        <p>SoC Industry Updates is a platform made by students, for students. It serves as a one-stop shop for students from the School of Computing to learn about internships, jobs and future career opportunities in various industries.</p>
        <ClipLoader color="#003D7C" loading={true} size={50} />
        <p>If you are not logged in, click this link to redirect to login page <a className="primary" href="/industry/login" onClick={handleOnClick}>Sign In</a></p>
        <p>Otherwise, please wait patiently. Thank you.</p>
      </div>
    </Page>
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
