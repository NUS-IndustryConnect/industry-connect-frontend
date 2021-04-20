import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import { userSelector } from "../../redux/user/userSelectors";
import { logout } from "../../redux/user/userActions";
import Page from "../../common/Page";
import EditPost from "../pages/Post/Edit";
import ManagePosts from "../pages/Post/Manage";
import NewPost from "../pages/Post/New";
import PreviewPost from "../pages/Post/Preview";
import SubmittedPost from "../pages/Post/Submitted";
import ViewPost from "../pages/Post/View";

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
      <Route exact path="/industry/posts" component={ManagePosts} />
      <Route exact path="/industry/posts/new" component={NewPost} />
      <Route exact path="/industry/posts/edit/:id" component={EditPost} />
      <Route exact path="/industry/posts/view/:id" component={ViewPost} />
      <Route exact path="/industry/posts/preview" component={PreviewPost} />
      <Route exact path="/industry/posts/submitted" component={SubmittedPost} />
    </>
  )
}

export default Protected;
