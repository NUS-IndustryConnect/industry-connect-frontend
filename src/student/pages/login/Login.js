import React from 'react';

import Page from '../../../common/Page';
import { Link } from 'react-router-dom';

import './Login.css';

export default function Login() {
  // TODO: link up to authentication (temporary placeholder)
  return (
    <Page title="Student Dashboard">
      <div className="login">
        <h3>Welcome to IndustryConnect!</h3>
        <p>SoC Industry Updates is a platform made by students, for students. It serves as a one-stop shop for students from the School of Computing to learn about internships, jobs and future career opportunities in various industries.</p>

        <Link to="/student">
          <button className="primary">Login</button>
        </Link>
      </div>
    </Page>
  )
}
