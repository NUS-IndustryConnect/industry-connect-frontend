import React from 'react';
import { useHistory } from 'react-router-dom';

import Page from '../../Page';
import Table from '../../Table';

const mockData = {
  email: "blah@example.com",
  companyName: "Shopee",
  lastLoggedIn: new Date(),
  accountLocked: new Date(),
  postHistory: [
    { companyPostID: "1", date: new Date(), title: "Shopee Design Thinking Workshop" },
    { companyPostID: "2", date: new Date(), title: "Shopee Ultra Hackathon 2020" },
    { companyPostID: "3", date: new Date(), title: "Shopee Summer Internship Positions are open now!" },
  ]
}

export default function View() {
  // TODO: link up to Redux (temporary placeholder)
  const { email, companyName, lastLoggedIn, accountLocked, postHistory } = mockData;
  const history = useHistory();

  const dataToRow = ({ companyPostID, date, title }) => (
    <tr
      key={companyPostID}
      onClick={() => history.push(`/admin/industry/posts/preview/${companyPostID}`)}
      className="clickable"
    >
      <td>{title}</td>
      <td>{date.toLocaleDateString()}</td>
    </tr>
  )
  return (
    <Page title="View Company User">
      <table className="vertical">
        <tbody>
          <tr>
            <th>Email</th>
            <td>{email}</td>
          </tr>
          <tr>
            <th>Company</th>
            <td>{companyName}</td>
          </tr>
          <tr>
            <th>Last login</th>
            <td>{lastLoggedIn.toLocaleDateString()}</td>
          </tr>
          <tr className="unlock-account">
            <th>Account locked</th>
            <td>
              {accountLocked.toLocaleDateString()}
              <button className="success">Unlock</button>
            </td>
          </tr>
        </tbody>
      </table>
      <section>
        <h4>Posts</h4>
        <Table
          headers={["Post Title", "Date"]}
          data={postHistory}
          dataToRow={dataToRow}
        />
      </section>
    </Page>
  )
}