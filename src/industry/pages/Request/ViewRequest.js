import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import PostPreview from '../../../common/post/PostPreview';
import BackButton from '../../../common/BackButton';
import { requestSelector } from '../../../redux/industry/requestSlice';
import Page from '../Page';

export default function ViewRequest() {
  const { id } = useParams();
  const data = useSelector(requestSelector(id));
  let status = [];
  if (data?.status === "rejected") {
    status.push("This post has been rejected.");
  }
  status = status.concat(data?.feedback?.split("\n"));
  return (
    <Page
      title="View Request"
      isError={!Boolean(data)}
      errorMessage={<p>Post not found. Please select another post.</p>}
    >
      <BackButton />
      <PostPreview data={data} urlPath="/industry/requests" editable={false}  />
      {status.map((text, i) => <p key={i}>{text}</p>)}
    </Page>
  )
}