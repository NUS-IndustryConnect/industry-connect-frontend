import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Page from '../../../common/Page';
import ButtonLink from '../../../common/ButtonLink';
import Table from '../../../common/Table';
import SelectTable from '../../../common/SelectTable';
import { requestsSelector } from '../../../redux/industry/requestSlice';
import { activePostsSelector, archivedPostsSelector, postThunks } from '../../../redux/industry/postSlice';

const Manage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const displayedPosts = useSelector(activePostsSelector);
  const archivedPosts = useSelector(archivedPostsSelector);
  const requests = useSelector(requestsSelector);

  const requestsDataToRow = (data) => {
    const { companyPostRequestId, postTitle, status } = data;
    const handleClick = () => history.push(`/industry/posts/view/${companyPostRequestId}`);
    return (
      <tr key={companyPostRequestId} className={status}>
        <td onClick={handleClick} className="clickable">{postTitle}</td>
      </tr>
    )
  };

  const postsDataToRow = (data, checkbox=null) => {
    const { companyPostId, postTitle, lastUpdated } = data;
    const handleClick = () => history.push(`/industry/posts/view/${companyPostId}`);
    return (
      <tr key={companyPostId}>
        <td>{ checkbox }</td>
        <td onClick={handleClick} className="clickable">{postTitle}</td>
        <td onClick={handleClick} className="clickable">{new Date(lastUpdated).toLocaleDateString()}</td>
      </tr>
    )
  };

  const archivePosts = {
    label: "Archive",
    className: "secondary",
    onClick: selections => {
      dispatch(postThunks.archivePosts(selections));
    }
  }
  
  const unarchivePosts = {
    label: "Unarchive",
    className: "secondary",
    onClick: selections => {
      dispatch(postThunks.unarchivePosts(selections));
    }
  }

  return (
    <Page title="Industry Posts">
      <ButtonLink to="/industry/posts/new" label="Create new post" className="primary" />
      <section>
        <h3>Pending Requests</h3>
        <Table
          headers={["Title"]}
          data={requests}
          dataToRow={requestsDataToRow}
          className="pending"
        />
      </section>
  
      <section>
        <h3>Active</h3>
        <SelectTable
          headers={['Title', "Last Updated"]}
          data={displayedPosts}
          idKey="companyPostID"
          dataToRow={postsDataToRow}
          actions={[ archivePosts ]}
        />
      </section>

      <section>
        <h3>Archived</h3>
        <SelectTable
          headers={['Title', "Last Updated"]}
          data={archivedPosts}
          idKey="companyPostID"
          dataToRow={postsDataToRow}
          className="archived"
          actions={[ unarchivePosts ]}
        />
      </section>
    </Page>
  )
}

export default Manage;
