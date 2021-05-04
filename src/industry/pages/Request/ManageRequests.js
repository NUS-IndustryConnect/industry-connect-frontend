import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import ButtonLink from '../../../common/ButtonLink';
import Table from '../../../common/Table';
import { pendingRequestsSelector, rejectedRequestsSelector } from '../../../redux/industry/requestSlice';
import Page from '../Page';

export default function ManageRequests() {
  const history = useHistory();
  const pendingRequests = useSelector(pendingRequestsSelector);
  const rejectedRequests = useSelector(rejectedRequestsSelector)

  const requestsDataToRow = (data) => {
    const { companyPostRequestId, postTitle, status } = data;
    const handleClick = () => history.push(`/industry/requests/view/${companyPostRequestId}`);
    return (
      <tr key={companyPostRequestId} className={status}>
        <td onClick={handleClick} className="clickable">{postTitle}</td>
      </tr>
    )
  };

  const rejectedRequestsDataToRow = (data) => {
    const { companyPostRequestId, postTitle, status, feedback } = data;
    const handleClick = () => history.push(`/industry/requests/view/${companyPostRequestId}`);
    return (
      <tr key={companyPostRequestId} className={status}>
        <td onClick={handleClick} className="clickable">{postTitle}</td>
        <td onClick={handleClick} className="clickable truncate">{feedback}</td>
      </tr>
    )
  };

  return (
    <Page title="Industry Post Requests">
      <ButtonLink to="/industry/requests/new" label="Create new post request" className="primary" />
      <section>
        <h3>Pending Approval</h3>
        <Table
          headers={["Title"]}
          data={pendingRequests}
          dataToRow={requestsDataToRow}
          className="pending"
        />
      </section>
      <section>
        <h3>Rejected</h3>
        <Table
          headers={["Title", "Reason for rejection"]}
          data={rejectedRequests}
          dataToRow={rejectedRequestsDataToRow}
          className="pending"
        />
      </section>
    </Page>
  )
}
