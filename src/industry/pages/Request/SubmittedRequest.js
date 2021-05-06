import React from 'react';
import { useSelector } from 'react-redux';

import ButtonLink from '../../../common/ButtonLink';
import { userSelector } from '../../../redux/user/userSelectors';
import Page from '../Page';

export default function SubmittedRequest() {
  const { userInfo } = useSelector(userSelector);
  return (
    <Page title="Industry Posts" className="introduction">
      <div className="post">
        <h3>Post submitted for vetting</h3>
        <p>Thank you for using the SoC Industry Updates platform!</p>
        <p>Your post has been submitted for vetting. NUS staff from the School of Computing will be in touch with you shortly via: <b>{userInfo.email}</b>.</p>

        <ButtonLink to="/industry/requests" label="Back to Dashboard" className="secondary" />
        <ButtonLink to="/industry/requests/new" label="Create another post" className="primary" />
      </div>
    </Page>
  )
}
