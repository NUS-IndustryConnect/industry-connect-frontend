import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';

import { pendingRequestsSelector, rejectedRequestsSelector } from '../../../../redux/industry/requestSlice';

import Page from '../../Page';
import Table from '../../../../common/Table';
import Tabs from '../../../../common/Tabs';

const PENDING = "/admin/industry/posts/requests/pending";
const REJECTED = "/admin/industry/posts/requests/rejected";

const TABS = [
  { name: "Pending Approval", link: PENDING },
  { name: "Rejected", link: REJECTED },
];

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

      <Tabs tabs={TABS} />

      <Switch>
        <Route exact path="/admin/industry/posts/requests"><Redirect to={TABS[0].link}/></Route>
        <Route path={PENDING}>
          <Table
            headers={["Title", "Company"]}
            data={pendingRequests}
            dataToRow={requestsDataToRow}
            className="pending"
          />
        </Route>
        <Route path={REJECTED}>
          <Table
            headers={["Title", "Company", "Reason for rejection"]}
            data={rejectedRequests}
            dataToRow={rejectedRequestsDataToRow}
            className="pending"
          />
        </Route>
      </Switch>
    </Page>
  )
}
