import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../../common/Page/index.js';

const NavigationPanel = () => (
  <nav>
    <ul>
      <li><Link to="/admin/announcements">Announcements</Link></li>
      <li><Link to="/admin/industry">Industry</Link></li>
      <li className="sub-page"><Link to="/admin/industry/companies">Companies</Link></li>
      <li className="sub-page"><Link to="/admin/industry/users">Company Users</Link></li>
      <li className="sub-page"><Link to="/admin/industry/posts">Posts</Link></li>
    </ul>
  </nav>
)

const AdminPage = props => <Page navigationPanel={<NavigationPanel />} {...props} />

export default AdminPage;
