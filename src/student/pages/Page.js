import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../../common/Page/index.js';

const NavigationPanel = () => (
  <nav>
    <ul>
      <li><Link to="/student/announcements">Announcements</Link></li>
      <li><Link to="/student/industry">Industry</Link></li>
    </ul>
  </nav>
)

const StudentPage = props => <Page navigationPanel={<NavigationPanel />} {...props} />

export default StudentPage;
