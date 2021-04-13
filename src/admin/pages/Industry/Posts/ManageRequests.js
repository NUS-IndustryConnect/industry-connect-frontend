import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import ButtonLink from '../../../../common/ButtonLink';
import { pendingRequestsSelector, rejectedRequestsSelector } from '../../../../redux/industry/requestSlice';

import Page from '../../Page';
import Table from '../../../../common/Table';

export default function ManageRequests() {
  const history = useHistory();
  const pendingRequests = useSelector(pendingRequestsSelector);
  const rejectedRequests = useSelector(rejectedRequestsSelector);

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

  return (
    <Page title="Manage Industry Post Requests">
      <section>
        <h3>Pending Approval</h3>
        <Table
          headers={["Title", "Company"]}
          data={pendingRequests}
          dataToRow={requestsDataToRow}
          className="pending"
        />
      </section>

      <section>
        <h3>Rejected</h3>
        <Table
          headers={["Title", "Company", "Reason for rejection"]}
          data={rejectedRequests}
          dataToRow={rejectedRequestsDataToRow}
          className="pending"
        />
      </section>
    </Page>
  )
}
