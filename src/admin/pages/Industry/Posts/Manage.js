import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { getPosts } from '../../../api/posts';

import Page from '../../Page';
import Table from '../../Table';

export default function Manage() {
  const [data, setData] = useState({ approved: [], pending: [] });
  const history = useHistory();
  useEffect(() => {
    getPosts().then(setData);
  }, []);

  const dataToRow = ({ postID, companyPostTitle, company, lastUpdated }) => (
    <tr 
      key={postID}
      onClick={() => history.push(`/admin/industry/posts/preview/${postID}`)}
      className="clickable"
    >
      <td>{companyPostTitle}</td>
      <td>{company.companyName}</td>
      <td>{lastUpdated.toLocaleDateString()}</td>
    </tr>
  );

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