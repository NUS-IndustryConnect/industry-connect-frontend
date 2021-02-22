import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import ButtonLink from '../../../../common/ButtonLink';
import { activePostsSelector, archivedPostsSelector, postThunks } from '../../../../redux/industry/postSlice';
import { requestsSelector } from '../../../../redux/industry/requestSlice';

import Page from '../../Page';
import Table from '../../../../common/Table';
import SelectTable from '../../../../common/SelectTable';

export default function Manage() {
  const history = useHistory();
  const dispatch = useDispatch();
  const activePosts = useSelector(activePostsSelector);
  const archivedPosts = useSelector(archivedPostsSelector);
  const requests = useSelector(requestsSelector);

  const dataToRow = type => (data, checkbox=null) => {
    const urlPath = `/admin/industry/posts/${type === "requests" ? "preview": "view"}`;
    const { companyPostId, companyPostRequestId, postTitle, company, lastUpdated } = data;
    const id = type === "requests" ? companyPostRequestId : companyPostId;
    const handleClick = () => history.push(`${urlPath}/${id}`);
    return (
      <tr key={id}>
        { type === "posts" ? <td>{ checkbox }</td> : null }
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
      
      <section>
        <h3>Pending Requests</h3>
        <Table
          headers={["Title", "Company", "Last Updated"]}
          data={requests}
          dataToRow={dataToRow("requests")}
          className="pending"
        />
      </section>
  
      <section>
        <h3>Active Posts</h3>
        <SelectTable
          headers={['Title', "Company", "Last Updated"]}
          data={activePosts}
          idKey="companyPostId"
          dataToRow={dataToRow("posts")}
          actions={[ archivePosts ]}
        />
      </section>

      <section>
        <h3>Archived Posts</h3>
        <SelectTable
          headers={['Title', "Company", "Last Updated"]}
          data={archivedPosts}
          idKey="companyPostId"
          dataToRow={dataToRow("posts")}
          className="archived"
          actions={[ unarchivePosts ]}
        />
      </section>
    </Page>
  )
}
