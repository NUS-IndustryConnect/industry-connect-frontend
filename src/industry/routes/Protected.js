import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import { userSelector } from "../../redux/user/userSelectors";

import Request from "../pages/Request";
import Post from "../pages/Post";

import Page from "../../common/Page";
import { logout } from "../../redux/user/userActions";

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

      <Route path="/industry/requests" component={Request} />
      <Route path="/industry/posts" component={Post} />
    </>
  )
}

export default Protected;
