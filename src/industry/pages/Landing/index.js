import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../../../common/Page';
import './index.css';

export default function Landing() {
  const isLoggedIn = true;
  return (
    <Page title="Industry Posts">
      <div className="introduction">
        <h3>Welcome to IndustryConnect!</h3>
        <p>SoC Industry Updates is a platform made by students, for students. It serves as a one-stop shop for students from the School of Computing to learn about internships, jobs and future career opportunities in various industries.</p>

        { isLoggedIn ?
          <Link to="/industry/post/new">
            <button className="primary">Create new post</button>
          </Link> :
          <Link to="/industry/login">
            <button className="primary">Login</button>
          </Link>
        }
      </div>
    </Page>
  )
}