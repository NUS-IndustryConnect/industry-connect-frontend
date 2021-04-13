import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import ButtonLink from '../../../../common/ButtonLink';
import { activePostsSelector, archivedPostsSelector, postThunks } from '../../../../redux/industry/postSlice';
import { pendingRequestsSelector, rejectedRequestsSelector } from '../../../../redux/industry/requestSlice';

import Page from '../../Page';
import Table from '../../../../common/Table';
import SelectTable from '../../../../common/SelectTable';

export default function Manage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const activePosts = useSelector(activePostsSelector);
  const archivedPosts = useSelector(archivedPostsSelector);
  const pendingRequests = useSelector(pendingRequestsSelector);
  const rejectedRequests = useSelector(rejectedRequestsSelector)

  const requestsDataToRow = (data) => {
    const urlPath = '/admin/industry/posts/preview';
    const { companyPostRequestId, postTitle, company, status } = data;
    const handleClick = () => history.push(`${urlPath}/${companyPostRequestId}`);
    return (
      <tr key={companyPostRequestId} className={status}>
        <td onClick={handleClick} className="clickable">{postTitle}</td>
        <td onClick={handleClick} className="clickable">{company?.companyName}</td>
      </tr>
    )
  };

  const rejectedRequestsDataToRow = (data) => {
    const urlPath = '/admin/industry/posts/preview';
    const { companyPostRequestId, postTitle, company, status, feedback } = data;
    const handleClick = () => history.push(`${urlPath}/${companyPostRequestId}`);
    return (
      <tr key={companyPostRequestId} className={status}>
        <td onClick={handleClick} className="clickable">{postTitle}</td>
        <td onClick={handleClick} className="clickable">{company?.companyName}</td>
        <td onClick={handleClick} className="clickable truncate">{feedback}</td>
      </tr>
    )
  };

  const postsDataToRow = (data, checkbox=null) => {
    const urlPath = '/admin/industry/posts/view';
    const { companyPostId, postTitle, company, lastUpdated } = data;
    const handleClick = () => history.push(`${urlPath}/${companyPostId}`);
    return (
      <tr key={companyPostId}>
        <td>{ checkbox }</td>
        <td onClick={handleClick} className="clickable">{postTitle}</td>
        <td onClick={handleClick} className="clickable">{company?.companyName}</td>
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
    <Page title="Manage Industry Posts">
      <ButtonLink to="/admin/industry/posts/new" label="New Industry Post" className="primary" />
      
      <h3>Requests</h3>
      <section>
        <h4>Pending Approval</h4>
        <Table
          headers={["Title", "Company"]}
          data={pendingRequests}
          dataToRow={requestsDataToRow}
          className="pending"
        />
      </section>

      <section>
        <h4>Rejected</h4>
        <Table
          headers={["Title", "Company", "Reason for rejection"]}
          data={rejectedRequests}
          dataToRow={rejectedRequestsDataToRow}
          className="pending"
        />
      </section>
  
      <h3>Posts</h3>
      <section>
        <h4>Active</h4>
        <SelectTable
          headers={['Title', "Company", "Last Updated"]}
          data={activePosts}
          idKey="companyPostId"
          dataToRow={postsDataToRow}
          actions={[ archivePosts ]}
        />
      </section>

      <section>
        <h4>Archived</h4>
        <SelectTable
          headers={['Title', "Company", "Last Updated"]}
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
