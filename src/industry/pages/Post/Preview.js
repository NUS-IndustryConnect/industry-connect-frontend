import React from 'react';
import { useLocation } from 'react-router-dom';

import Page from '../../../common/Page';
import PostPreview from '../../../common/post/PostPreview';
import ButtonLink from '../../../common/ButtonLink';

export default function Preview() {
  const location = useLocation();
  const data = location?.state.data;
  return (
    <Page
      title="Preview Post"
      isError={!Boolean(data)}
      errorMessage={<p>Post not found. Please select another post.</p>}
    >
      <PostPreview data={data} urlPath="/industry/post" />
      {/* TODO: Connect up to BE API */}
      <ButtonLink to="/industry/post/submitted" label="Submit for vetting" className="primary" />
    </Page>
  )
}