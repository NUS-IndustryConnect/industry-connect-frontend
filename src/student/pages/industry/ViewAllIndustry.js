import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { getPostsApi } from '../../api/postsApi';

import Page from '../Page';
import Table from '../Table';

const ViewAllIndustry = () => {
  const [industries, setIndustries] = useState([]);
  const history = useHistory();
  useEffect(() => {
    getPostsApi().then(setIndustries);
  }, []);

  const dataToRow = (data) => {
    const {
      postID,
      companyPostTitle,
      lastUpdated,
      company
    } = data;
    const state = {
        ...data
    }
    const handleClick = () => history.push({pathname: `/student/industry/${postID}`, state});
    return (
      <tr key={postID} >
        <td className="clickable" onClick={handleClick}>[{company.companyName}] {companyPostTitle}</td>
        <td className="clickable" onClick={handleClick}>{lastUpdated.toLocaleDateString()}</td>
      </tr>
    )
  };

  return (
  <Page title="Industry">
    <section>
      <h3>Industry</h3>
      <Table
          headers={["Title", "Last Updated"]}
          data={industries}
          dataToRow={dataToRow}
          idKey="postID"
      />
    </section>
  </Page>
  )
}

export default ViewAllIndustry;
