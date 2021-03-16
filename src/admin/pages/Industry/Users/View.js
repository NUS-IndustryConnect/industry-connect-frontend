import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import VerticalTable from '../../../../common/VerticalTable';
import ButtonLink from '../../../../common/ButtonLink';
import { userSelector, userThunks } from '../../../../redux/industry/userSlice';
import Page from '../../Page';
import Table from '../../../../common/Table';

export default function View() {
  const { id } = useParams();
  const data = useSelector(userSelector(id));
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

  const dataToRow = ({ companyPostId, lastUpdated, postTitle }) => (
    <tr
      key={companyPostId}
      onClick={() => history.push(`/admin/industry/posts/view/${companyPostId}`)}
      className="clickable"
    >
      <td>{postTitle}</td>
      <td>{new Date(lastUpdated).toLocaleDateString()}</td>
    </tr>
  )

  const unlockUser = () => {
    return dispatch(userThunks.unlockUser(id));
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
      <VerticalTable data={userData}/>
      <ButtonLink to={`/admin/industry/users/edit/${id}`} label="Edit" className="secondary" />
      <section>
        <h4>Posts</h4>
        <Table
          headers={["Post Title", "Date"]}
          data={userPosts}
          dataToRow={dataToRow}
        />
      </section>
    </Page>
  )
}
