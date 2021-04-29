import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';

import ButtonLink from '../../../../common/ButtonLink';
import { activePostsSelector, archivedPostsSelector, postThunks } from '../../../../redux/industry/postSlice';

import Page from '../../Page';
import SelectTable from '../../../../common/SelectTable';

export default function ManagePosts() {
  const history = useHistory();
  const dispatch = useDispatch();
  const activePosts = useSelector(activePostsSelector);
  const archivedPosts = useSelector(archivedPostsSelector);

  const postsDataToRow = (data, checkbox=null) => {
    const urlPath = '/admin/industry/posts/view';
    const { companyPostId, postTitle, company, lastUpdated } = data;
    const handleClick = () => history.push(`${urlPath}/${companyPostId}`);
    return (
      <tr key={companyPostId}>
        <td>{ checkbox }</td>
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
      toast.success("Archived post(s)");
    }
  }

  const unarchivePosts = {
    label: "Unarchive",
    className: "secondary",
    onClick: selections => {
      dispatch(postThunks.unarchivePosts(selections));
      toast.success("Unarchived post(s)");
    }
  }

  return (
    <Page title="Manage Industry Posts">
      <ButtonLink to="/admin/industry/posts/new" label="New Industry Post" className="primary" />
      
      <section>
        <h3>Active</h3>
        <SelectTable
          headers={['Title', "Company", "Last Updated"]}
          data={activePosts}
          idKey="companyPostId"
          dataToRow={postsDataToRow}
          actions={[ archivePosts ]}
        />
      </section>

      <section>
        <h3>Archived</h3>
        <SelectTable
          headers={['Title', "Company", "Last Updated"]}
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
