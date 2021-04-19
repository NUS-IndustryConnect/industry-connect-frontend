import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";

import './index.css';
import Page from '../../../common/Page';
import { getAdminIndustryThunk } from '../../../redux/industry';
import { announcementThunks } from '../../../redux/announcementSlice';
import { handleFetchAuth, logout } from '../../../redux/user/userActions';
import { AUTH_ENPOINT } from '../../../server/utils';

export default function Login() {
  // TODO: link up to authentication (temporary placeholder)
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  let code = location.search.substring(6);

  React.useEffect(() => {
    if (code) {
      dispatch(handleFetchAuth(code)).then(() => {
        dispatch(announcementThunks.getAdminAnnouncements());
        dispatch(getAdminIndustryThunk());
        history.push("/admin/announcements");
      }).catch(error => {
        dispatch(logout()).then(() => {
          history.push("/admin/login");
        })
      })
    }
  }, [code, dispatch, history]);

  if (code) { // buffer to wait for info
    return (
      <Page title="Admin Dashboard">
      <div className="login">
        <h3>Welcome to IndustryConnect!</h3>
        <p>SoC Industry Updates is a platform made by students, for students. It serves as a one-stop shop for students from the School of Computing to learn about internships, jobs and future career opportunities in various industries.</p>
        <ClipLoader color="#003D7C" loading={true} size={50} />
        <p>Logging in...</p>
      </div>
    </Page>
    )
  }

  return (
    <Page title="Admin Dashboard">
      <div className="login">
        <h3>Welcome to IndustryConnect!</h3>
        <p>SoC Industry Updates is a platform made by students, for students. It serves as a one-stop shop for students from the School of Computing to learn about internships, jobs and future career opportunities in various industries.</p>

        <a className="primary" href={AUTH_ENPOINT}>
          <button className="primary">Login</button>
        </a>
      </div>
    </Page>
  )
}
