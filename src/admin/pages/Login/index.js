import React from 'react';

import Page from '../../../common/Page';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

=======
import ButtonLink from '../../../common/ButtonLink';
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
import './index.css';

export default function Login() {
  // TODO: link up to authentication (temporary placeholder)
  return (
    <Page title="Admin Dashboard">
      <div className="login">
        <h3>Welcome to IndustryConnect!</h3>
        <p>SoC Industry Updates is a platform made by students, for students. It serves as a one-stop shop for students from the School of Computing to learn about internships, jobs and future career opportunities in various industries.</p>

<<<<<<< HEAD
        <Link to="/admin">
          <button className="primary">Login</button>
        </Link>
=======
        <ButtonLink to="/admin" label="Login" className="primary" />
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
      </div>
    </Page>
  )
}