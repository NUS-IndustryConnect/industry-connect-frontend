import React from 'react';

import Page from './common/Page';
import ButtonLink from './common/ButtonLink';

const Home = () => {
  return (
    <Page title="Home">
      <p>I am a</p>
      <ButtonLink to="/student" label="Student" classname="primary" />
      <ButtonLink to="/admin" label="Admin" classname="primary" />
      <ButtonLink to="/industry" label="Industry" classname="primary" />
    </Page>
  )
}

export default Home;
