import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../../common/Page/index.js';

const NavigationPanel = () => (
  <nav>
    <ul>
      <li><Link to="/industry/posts/requests">Post Requests</Link></li>
      <li><Link to="/industry/posts">Posts</Link></li>
    </ul>
  </nav>
)

const IndustryPage = props => <Page navigationPanel={<NavigationPanel />} {...props} />

export default IndustryPage;
