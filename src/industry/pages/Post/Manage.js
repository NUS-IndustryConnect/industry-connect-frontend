import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Page from '../../../common/Page';
import ButtonLink from '../../../common/ButtonLink';
import Table from '../../../common/Table';
import SelectTable from '../../../common/SelectTable';
import { requestsSelector } from '../../../redux/industry/requestSlice';
import { displayedPostsSelector, archivedPostsSelector, postThunks } from '../../../redux/industry/postSlice';

export default function AfterLogin() {
  const history = useHistory();
  const dispatch = useDispatch();
  const displayedPosts = useSelector(displayedPostsSelector);
  const archivedPosts = useSelector(archivedPostsSelector);
  const requests = useSelector(requestsSelector);

  const dataToRow = type => (data, checkbox=null) => {
    const { companyPostID, postTitle, lastUpdated } = data;
    const handleClick = () => history.push(`/industry/posts/view/${companyPostID}`);
    return (
      <tr key={companyPostID}>
        { type === "posts" ? <td>{ checkbox }</td> : null }
        <td onClick={handleClick} className="clickable">{postTitle}</td>
        <td onClick={handleClick} className="clickable">{lastUpdated.toLocaleDateString()}</td>
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

  const deletePosts = {
    label: "Delete",
    className: "warning",
    onClick: selections => {
      dispatch(postThunks.deletePosts(selections));
    }
  }

  return (
    <Page title="Industry Posts">
      <ButtonLink to="/industry/posts/new" label="Create new post" className="primary" />
      <section>
        <h3>Pending</h3>
        <Table
          headers={["Title", "Last Updated"]}
          data={requests}
          dataToRow={dataToRow("requests")}
          className="pending"
        />
      </section>
  
      <section>
        <h3>Displayed</h3>
        <SelectTable
          headers={['Title', "Last Updated"]}
          data={displayedPosts}
          idKey="companyPostID"
          dataToRow={dataToRow("posts")}
          actions={[ archivePosts, deletePosts ]}
        />
      </section>

      <section>
        <h3>Archived</h3>
        <SelectTable
          headers={['Title', "Last Updated"]}
          data={archivedPosts}
          idKey="companyPostID"
          dataToRow={dataToRow("posts")}
          className="archived"
          actions={[ deletePosts ]}
        />
      </section>
    </Page>
  )
}