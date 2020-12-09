import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../../common/Page';

const NavigationPanel = () => (
  <nav>
    <ul>
      <li><Link to="/admin/announcements">Announcements</Link></li>
      <li><Link to="/admin/companies">Companies</Link></li>
    </ul>
  </nav>
)

const AdminPage = props => <Page navigationPanel={<NavigationPanel />} {...props} />

export default AdminPage;