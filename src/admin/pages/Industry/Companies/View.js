import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import VerticalTable from '../../../../common/VerticalTable';
import ButtonLink from '../../../../common/ButtonLink';
import { companySelector } from '../../../../redux/industry/companySlice';
import { usersOfCompanySelector } from '../../../../redux/industry/userSlice';
import Page from '../../Page';
import Table from '../../../../common/Table';
import { requestsByCompanySelector } from '../../../../redux/industry/requestSlice';
import { postsByCompanySelector } from '../../../../redux/industry/postSlice';

export default function View() {
  const history = useHistory();
  const { id: companyID } = useParams();
  const data = useSelector(companySelector(companyID));
  const {
    companyName,
    companyTier,
    companyDescription,
  } = data || {};
  const users = useSelector(usersOfCompanySelector(companyID));
  const posts = useSelector(postsByCompanySelector(companyID));
  const requests = useSelector(requestsByCompanySelector(companyID))

  const usersDataToRow = ({ companyUserID, name, userEmail, lastLoggedIn }) => (
    <tr
      key={companyUserID}
      onClick={() => history.push(`/admin/industry/users/view/${companyUserID}`)}
      className="clickable"
    >
      <td>{name}</td>
      <td>{userEmail}</td>
      <td>{lastLoggedIn.toLocaleDateString()}</td>
    </tr>
  );
  const postsDataToRow = urlPath => ({ companyPostID, lastUpdated, postTitle }) => (
    <tr
      key={companyPostID}
      onClick={() => history.push(`/admin/industry/posts/${urlPath}/${companyPostID}`)}
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
          { header: "Users", data: users.length },
          { header: "Posts", data: posts.length },
          { header: "Requests", data: requests.length },
        ]} />
        <ButtonLink to={`/admin/industry/companies/edit/${companyID}`} label="Edit" className="secondary" />
      </section>
      <section>
        <h4>Users</h4>
        <Table
          headers={["Name", "Email", "Last login"]}
          data={users}
          dataToRow={usersDataToRow}
        />
      </section>
      <section>
        <h4>Requests</h4>
        <Table
          headers={["Post Title", "Date"]}
          data={requests}
          dataToRow={postsDataToRow("preview")}
        />
      </section>
      <section>
        <h4>Posts</h4>
        <Table
          headers={["Post Title", "Date"]}
          data={posts}
          dataToRow={postsDataToRow("view")}
        />
      </section>
    </Page>
  );
}
