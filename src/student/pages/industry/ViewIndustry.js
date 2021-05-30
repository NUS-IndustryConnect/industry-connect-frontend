import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Post from '../../../common/post/Post';
import BackButton from '../../../common/BackButton';
import { postSelector } from '../../../redux/industry/postSlice';
import Page from '../Page';

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
      <BackButton />
      <Post data={data} history={history} />
    </Page>
  )
}

export default ViewIndustry;
