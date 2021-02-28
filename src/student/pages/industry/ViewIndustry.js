import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Page from '../Page';
import Post from '../../../common/post/Post';
import { postSelector } from '../../../redux/industry/postSlice';

const ViewIndustry = () => {
  const history = useHistory();
  const { id } = useParams();
  const data = useSelector(postSelector(id));

  return (
    <Page
      title="Industry Post"
      isError={!Boolean(data)}
      errorMessage={<p>Post not found. Please select another post.</p>}
    >
      <Post data={data} history={history} />
    </Page>
  )
}

export default ViewIndustry;
