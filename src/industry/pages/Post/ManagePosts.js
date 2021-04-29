import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import SelectTable from '../../../common/SelectTable';
import { activePostsSelector, archivedPostsSelector, postThunks } from '../../../redux/industry/postSlice';
import Page from '../Page';

const Manage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const activePosts = useSelector(activePostsSelector);
  const archivedPosts = useSelector(archivedPostsSelector);

  const postsDataToRow = (data, checkbox=null) => {
    const { companyPostId, postTitle, lastUpdated } = data;
    const handleClick = () => history.push(`/industry/posts/view/${companyPostId}`);
    return (
      <tr key={companyPostId}>
        <td>{ checkbox }</td>
        <td onClick={handleClick} className="clickable">{postTitle}</td>
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
    <Page title="Industry Posts">
      <section>
        <h3>Active</h3>
        <SelectTable
          headers={['Title', "Last Updated"]}
          data={activePosts}
          idKey="companyPostId"
          dataToRow={postsDataToRow}
          actions={[ archivePosts ]}
        />
      </section>

      <section>
        <h3>Archived</h3>
        <SelectTable
          headers={['Title', "Last Updated"]}
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

export default Manage;
