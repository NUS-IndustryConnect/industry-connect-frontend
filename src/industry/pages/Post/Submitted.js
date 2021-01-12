import React from 'react';

import Page from '../../../common/Page';
import ButtonLink from '../../../common/ButtonLink';

export default function Submitted() {
  const userEmail = "your_email_address@domain.com"
  return (
    <Page title="Industry Posts" className="introduction">
      <h3>Post submitted for vetting</h3>
      <p>Thank you for using the SoC Industry Updates platform!</p>
      <p>Your post has been submitted for vetting. NUS staff from the School of Computing will be in touch with you shortly via: <b>{userEmail}</b>.</p>

      <ButtonLink to="/industry/post/new" label="Create another post" className="primary" />
    </Page>
  )
}