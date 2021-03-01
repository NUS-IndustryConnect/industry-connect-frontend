import React from 'react';

import Page from '../../../common/Page';
import ButtonLink from '../../../common/ButtonLink';

import './index.css'

export default function Landing() {
  return (
    <Page title="Industry Posts">
      <div className="introduction">
        <h3>Welcome to IndustryConnect!</h3>
        <p>SoC Industry Updates is a platform made by students, for students. It serves as a one-stop shop for students from the School of Computing to learn about internships, jobs and future career opportunities in various industries.</p>

        <ButtonLink to="/industry/login" label="Login" className="primary" />
      </div>
    </Page>
  )
}
