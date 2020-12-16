import React from 'react';
import { Link } from 'react-router-dom';
import Page from './common/page';

const Home = () => {
  return (
    <Page title="Home">
      <p>I am a</p>
      <Link to="/student"><button className="primary">Student</button></Link>
      <Link to="/admin"><button className="primary">Admin</button></Link>
      <Link to="/company"><button className="primary">Company</button></Link>
    </Page>
  )
}

export default Home;