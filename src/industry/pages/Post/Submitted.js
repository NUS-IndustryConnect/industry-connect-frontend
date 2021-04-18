import React from 'react';

import Page from '../../../common/Page';
import ButtonLink from '../../../common/ButtonLink';
import { useSelector } from 'react-redux';
import { userSelector } from '../../../redux/user/userSelectors';

export default function Submitted() {
  const { userInfo } = useSelector(userSelector);
  return (
    <Page title="Industry Posts" className="introduction">
      <h3>Post submitted for vetting</h3>
      <p>Thank you for using the SoC Industry Updates platform!</p>
      <p>Your post has been submitted for vetting. NUS staff from the School of Computing will be in touch with you shortly via: <b>{userInfo.email}</b>.</p>

      <ButtonLink to="/industry/posts" label="Back to main page" className="secondary" />
      <ButtonLink to="/industry/posts/new" label="Create another post" className="primary" />
    </Page>
  )
}
