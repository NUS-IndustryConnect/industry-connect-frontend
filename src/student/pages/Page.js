import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

import Page from '../../common/Page/index.js';

const NavigationPanel = () => {
  const match = useRouteMatch();
  const isAdmin = match.path.includes("/admin");
  const urlPrefix = isAdmin ? "/admin/student" : "/student";

  return (
    <nav>
      <ul>
        <li><Link to={`${urlPrefix}/announcements`}>Announcements</Link></li>
        <li><Link to={`${urlPrefix}/industry`}>Industry</Link></li>
      </ul>
      { isAdmin ? <Link to="/admin"><IoIosArrowBack />Back to Admin Dashboard</Link> : null}
    </nav>
  )
}

const StudentPage = props => <Page navigationPanel={<NavigationPanel />} {...props} />

export default StudentPage;
