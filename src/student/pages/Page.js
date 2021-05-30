import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Page from '../../common/Page/index.js';

const NavigationPanel = () => {
  const match = useRouteMatch();
  const urlPrefix = match.path.includes("/admin") ? "/admin/student" : "/student";

  return (
    <nav>
      <ul>
        <li><Link to={`${urlPrefix}/announcements`}>Announcements</Link></li>
        <li><Link to={`${urlPrefix}/industry`}>Industry</Link></li>
      </ul>
    </nav>
  )
}

const StudentPage = props => <Page navigationPanel={<NavigationPanel />} {...props} />

export default StudentPage;
