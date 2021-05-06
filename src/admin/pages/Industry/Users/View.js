import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IoIosArrowBack } from 'react-icons/io';

import VerticalTable from '../../../../common/VerticalTable';
import ButtonLink from '../../../../common/ButtonLink';
import { companyUserSelector, companyUserThunks } from '../../../../redux/industry/userSlice';
import Page from '../../Page';
import Table from '../../../../common/Table';
import { requestsByUserSelector } from '../../../../redux/industry/requestSlice';

export default function View() {
  const { id } = useParams();
  const data = useSelector(companyUserSelector(id));
  const {
    email,
    company,
    lastLoggedIn,
    userPosts,
    isLocked,
    lockedUntil,
  } = data || {};
  const history = useHistory();
  const dispatch = useDispatch();
  const userRequests = useSelector(requestsByUserSelector(id));

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

  const requestsDataToRow = (data) => {
    const urlPath = '/admin/industry/posts/preview';
    const { companyPostRequestId, postTitle, status } = data;
    const handleClick = () => history.push(`${urlPath}/${companyPostRequestId}`);
    return (
      <tr key={companyPostRequestId} className={status}>
        <td onClick={handleClick} className="clickable">{postTitle}</td>
      </tr>
    )
  };

  const unlockUser = () => {
    return dispatch(companyUserThunks.unlockUser(id));
  }

  const userData = [
    { header: "Email Address", data: email },
    { header: "Company", data: company?.companyName },
    { header: "Last login", data: new Date(lastLoggedIn)?.toLocaleDateString() },
  ];
  if (isLocked) userData.push({
    header: "Locked until",
    data: <React.Fragment>
      {lockedUntil.toLocaleString()}
      <button className="success right" onClick={unlockUser}>Unlock</button>
    </React.Fragment>
  });
  return (
    <Page
      title="View Company User"
      isError={!Boolean(data)}
      errorMessage={<p>User not found. Please select another user.</p>}
    >
      <button className="secondary" onClick={history.goBack}><IoIosArrowBack />Back</button>
      <VerticalTable data={userData}/>
      <ButtonLink to={`/admin/industry/users/edit/${id}`} label="Edit" className="secondary" />

      <section>
        <h4>Pending Requests</h4>
        <Table
          headers={["Post Title"]}
          data={userRequests}
          dataToRow={requestsDataToRow}
          className="pending"
        />
      </section>
      <section>
        <h4>Posts</h4>
        <Table
          headers={["Post Title", "Date"]}
          data={userPosts}
          dataToRow={postsDataToRow}
        />
      </section>
    </Page>
  )
}
