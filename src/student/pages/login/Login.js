import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";

import './Login.css';
import Page from '../../../common/Page';
import { handleFetchAuth } from '../../../redux/user/userActions';
import { announcementThunks } from '../../../redux/announcementSlice';
import { getStudentIndustryThunk } from '../../../redux/industry';

export default function Login(props) {
  // TODO: link up to authentication (temporary placeholder)
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const code = location.search.substring(6);

  React.useEffect(() => {
    if (code) {
      dispatch(handleFetchAuth(code)).then(() => {
        dispatch(announcementThunks.getStudentAnnouncements());
        dispatch(getStudentIndustryThunk());
        history.push("/student/announcements");
      })
    }
  }, [code, handleFetchAuth]);

  if (code) { // buffer to wait for info
    return (
      <Page title="Student Dashboard">
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
    <Page title="Student Dashboard">
      <div className="login">
        <h3>Welcome to IndustryConnect!</h3>
        <p>SoC Industry Updates is a platform made by students, for students. It serves as a one-stop shop for students from the School of Computing to learn about internships, jobs and future career opportunities in various industries.</p>
        <a className="primary" href="https://vafs.nus.edu.sg/adfs/oauth2/authorize?response_type=code&client_id=INC000002302194&resource=sg_edu_nus_oauth&redirect_uri=http%3A%2F%2Fwinuat11-i.comp.nus.edu.sg%3A3344%2Fstudent%2Flogin">
          <button className="primary">Login</button>
        </a>
      </div>
    </Page>
  )
}
