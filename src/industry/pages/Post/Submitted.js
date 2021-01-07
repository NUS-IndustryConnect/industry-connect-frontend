import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../../../common/Page';

export default function Submitted() {
  const userEmail = "your_email_address@domain.com"
  return (
    <Page title="Industry Posts" className="introduction">
      <h3>Post submitted for vetting</h3>
      <p>Thank you for using the SoC Industry Updates platform!</p>
      <p>Your post has been submitted for vetting. NUS staff from the School of Computing will be in touch with you shortly via: <b>{userEmail}</b>.</p>

      <Link to="/industry/post/new">
        <button className="primary">Create another post</button>
      </Link>
    </Page>
  )
}