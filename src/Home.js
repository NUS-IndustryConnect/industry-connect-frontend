import React from 'react';

import Page from './common/Page';
import ButtonLink from './common/ButtonLink';

const Home = () => {
  return (
    <Page title="Home">
      <p>I am a</p>
      <ButtonLink to="/student" label="Student" className="primary" />
      <ButtonLink to="/admin" label="Admin" className="primary" />
      <ButtonLink to="/industry/landing" label="Industry" className="primary" />
    </Page>
  )
}

export default Home;
