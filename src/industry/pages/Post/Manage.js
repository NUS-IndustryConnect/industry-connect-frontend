import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Page from '../../../common/Page';
import ButtonLink from '../../../common/ButtonLink';
import Table from '../../../common/Table';
import SelectTable from '../../../common/SelectTable';
import { pendingRequestsSelector, rejectedRequestsSelector } from '../../../redux/industry/requestSlice';
import { activePostsSelector, archivedPostsSelector, postThunks } from '../../../redux/industry/postSlice';

const Manage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const activePosts = useSelector(activePostsSelector);
  const archivedPosts = useSelector(archivedPostsSelector);
  const pendingRequests = useSelector(pendingRequestsSelector);
  const rejectedRequests = useSelector(rejectedRequestsSelector)

  const requestsDataToRow = (data) => {
    const { companyPostRequestId, postTitle, status } = data;
    const handleClick = () => history.push(`/industry/posts/view/${companyPostRequestId}`);
    return (
      <tr key={companyPostRequestId} className={status}>
        <td onClick={handleClick} className="clickable">{postTitle}</td>
      </tr>
    )
  };

  const rejectedRequestsDataToRow = (data) => {
    const { companyPostRequestId, postTitle, status, feedback } = data;
    const handleClick = () => history.push(`/industry/posts/view/${companyPostRequestId}`);
    return (
      <tr key={companyPostRequestId} className={status}>
        <td onClick={handleClick} className="clickable">{postTitle}</td>
        <td onClick={handleClick} className="clickable truncate">{feedback}</td>
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
      <h3>Requests</h3>
      <section>
        <h4>Pending Approval</h4>
        <Table
          headers={["Title"]}
          data={pendingRequests}
          dataToRow={requestsDataToRow}
          className="pending"
        />
      </section>
      {/* TODO: check table display */}
      {/* TODO: check what happens if feedback is too long, truncate */}
      <section>
        <h4>Rejected</h4>
        <Table
          headers={["Title", "Reason for rejection"]}
          data={rejectedRequests}
          dataToRow={rejectedRequestsDataToRow}
          className="pending"
        />
      </section>
  
      <h3>Posts</h3>
      <section>
        <h4>Active</h4>
        <SelectTable
          headers={['Title', "Last Updated"]}
          data={activePosts}
          idKey="companyPostId"
          dataToRow={postsDataToRow}
          actions={[ archivePosts ]}
        />
      </section>

      <section>
        <h4>Archived</h4>
        <SelectTable
          headers={['Title', "Last Updated"]}
          data={archivedPosts}
          idKey="companyPostId"
          dataToRow={postsDataToRow}
          className="archived"
          actions={[ unarchivePosts ]}
        />
      </section>
    </Page>
  )
}

export default Manage;
