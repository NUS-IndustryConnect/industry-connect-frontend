import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getPosts } from '../../../api/posts';

import Page from '../../Page';
import Table from '../../Table';

const dataToRow = ({ postID, companyPostTitle, company, lastUpdated }) => (
  <tr key={postID}>
    <td>{companyPostTitle}</td>
    <td>{company.companyName}</td>
    <td>{lastUpdated.toLocaleDateString()}</td>
  </tr>
);

export default function Manage() {
  const [data, setData] = useState({ approved: [], pending: [] });
  useEffect(() => {
    getPosts().then(setData);
  }, []);
  return (
    <Page title="Manage Industry Posts">
      <Link to="/admin/industry/posts/new">
        <button className="primary">New Industry Post</button>
      </Link>
      
      <section>
        <h3>Pending</h3>
        <Table
          headers={["Title", "Company", "Last Updated"]}
          data={data.pending}
          dataToRow={dataToRow}
        />
      </section>
  
      <section>
        <h3>Approved</h3>
        <Table
          headers={['Title', "Company", "Last Updated"]}
          data={data.approved}
          dataToRow={dataToRow}
        />
      </section>
    </Page>
  )
}