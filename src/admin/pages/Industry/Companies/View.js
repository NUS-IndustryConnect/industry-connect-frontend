import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import VerticalTable from '../../../../common/VerticalTable';
import Table from '../../../../common/Table';
import ButtonLink from '../../../../common/ButtonLink';
import BackButton from '../../../../common/BackButton';
import { companySelector } from '../../../../redux/industry/companySlice';
import { usersOfCompanySelector } from '../../../../redux/industry/userSlice';
import { requestsByCompanySelector } from '../../../../redux/industry/requestSlice';
import { postsByCompanySelector } from '../../../../redux/industry/postSlice';

import Page from '../../Page';
import { getCompanyTierDisplay } from './CompaniesForm';

export default function View() {
  const history = useHistory();
  const { id: companyId } = useParams();
  const data = useSelector(companySelector(companyId));
  const {
    companyName,
    companyTier,
    companyDescription,
  } = data || {};
  const users = useSelector(usersOfCompanySelector(companyId));
  const posts = useSelector(postsByCompanySelector(companyId));
  const requests = useSelector(requestsByCompanySelector(companyId))

  const usersDataToRow = ({ companyUserId, email, lastLoggedIn }) => (
    <tr
      key={companyUserId}
      onClick={() => history.push(`/admin/industry/users/view/${companyUserId}`)}
      className="clickable"
    >
      <td>{email}</td>
      <td>{new Date(lastLoggedIn).toLocaleDateString()}</td>
    </tr>
  );

  const postsDataToRow = ({ companyPostId, lastUpdated, postTitle }) => (
    <tr
      key={companyPostId}
      onClick={() => history.push(`/admin/industry/posts/view/${companyPostId}`)}
      className="clickable"
    >
      <td>{postTitle}</td>
      <td>{new Date(lastUpdated).toLocaleDateString()}</td>
    </tr>
  );

  const requestsDataToRow = ({ companyPostId, postTitle, status }) => {
    return (
      <tr
        key={companyPostId}
        onClick={() => history.push(`/admin/industry/posts/preview/${companyPostId}`)}
        className={`clickable ${status}`}
      >
        <td>{postTitle}</td>
      </tr>
    )
  };

  return (
    <Page
      title="View Company"
      isError={!Boolean(data)}
      errorMessage={<p>Company not found. Please select another company.</p>}
    >
      <BackButton />
      <h3>{companyName}</h3>
      <section>
        <VerticalTable data={[
          { header: "Tier", data: getCompanyTierDisplay(companyTier) },
          { header: "Description", data: companyDescription },
          { header: "Users", data: users.length },
          { header: "Pending Requests", data: requests.length },
          { header: "Posts", data: posts.length },
        ]} />
        <ButtonLink to={`/admin/industry/companies/edit/${companyId}`} label="Edit" className="secondary" />
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
        <h4>Pending Requests</h4>
        <Table
          headers={["Post Title"]}
          data={requests}
          dataToRow={requestsDataToRow}
          className="pending"
        />
      </section>
      <section>
        <h4>Posts</h4>
        <Table
          headers={["Post Title", "Date"]}
          data={posts}
          dataToRow={postsDataToRow}
        />
      </section>
    </Page>
  );
}
