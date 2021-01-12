import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import VerticalTable from '../../../../common/VerticalTable';
import ButtonLink from '../../../../common/ButtonLink';
import { companySelector } from '../../../../redux/industry/companySlice';
import { usersOfCompanySelector } from '../../../../redux/industry/userSlice';
import Page from '../../Page';
import Table from '../../Table';

export default function View() {
  const history = useHistory();
  const { id: companyID } = useParams();
  const data = useSelector(companySelector(companyID));
  const {
    companyName,
    companyTier,
    companyDescription,
    companyPosts = []
  } = data || {};
  const users = useSelector(usersOfCompanySelector(companyID));

  const usersDataToRow = ({ companyUserID, userEmail, lastLoggedIn }) => (
    <tr
      key={companyUserID}
      onClick={() => history.push(`/admin/industry/users/view/${companyUserID}`)}
      className="clickable"
    >
      <td>{userEmail}</td>
      <td>{lastLoggedIn.toLocaleDateString()}</td>
    </tr>
  );
  const postsDataToRow = ({ companyPostID, lastUpdated, postTitle }) => (
    <tr
      key={companyPostID}
      onClick={() => history.push(`/admin/industry/posts/preview/${companyPostID}`)}
      className="clickable"
    >
      <td>{postTitle}</td>
      <td>{lastUpdated.toLocaleDateString()}</td>
    </tr>
  );
  return (
    <Page
      title="View Company"
      isError={!Boolean(data)}
      errorMessage={<p>Company not found. Please select another company.</p>}
    >
      <h3>{companyName}</h3>
      <section>
        <VerticalTable data={[
          { header: "Tier", data: companyTier },
          { header: "Description", data: companyDescription },
          { header: "Number of users", data: users.length },
          { header: "Number of posts", data: companyPosts.length },
        ]} />
        <ButtonLink to={`/admin/industry/companies/edit/${companyID}`} label="Edit" className="secondary" />
      </section>
      <section>
        <h4>Users</h4>
        <Table
          headers={["Email", "Last login"]}
          data={users}
          dataToRow={usersDataToRow}
        />
      </section>
      <section>
        <h4>Posts</h4>
        <Table
          headers={["Post Title", "Date"]}
          data={companyPosts}
          dataToRow={postsDataToRow}
        />
      </section>
    </Page>
  );
}
