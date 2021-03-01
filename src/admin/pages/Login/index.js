import React from 'react';

import Page from '../../../common/Page';
import './index.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginAdmin } from '../../../redux/user/userActions';

export default function Login() {
  // TODO: link up to authentication (temporary placeholder)
  const dispatch = useDispatch();
  const history = useHistory();
  
  const handleLogin = () => {
    dispatch(loginAdmin()).then(()=> {
      history.push("/admin/announcements");
    })
  }

  return (
    <Page title="Admin Dashboard">
      <div className="login">
        <h3>Welcome to IndustryConnect!</h3>
        <p>SoC Industry Updates is a platform made by students, for students. It serves as a one-stop shop for students from the School of Computing to learn about internships, jobs and future career opportunities in various industries.</p>

        <button className="primary" onClick={handleLogin}>Login</button>
      </div>
    </Page>
  )
}
