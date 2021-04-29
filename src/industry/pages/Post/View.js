import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import PostPreview from '../../../common/post/PostPreview';
import { postOrRequestSelector } from '../../../redux/industry/postSlice';
import Page from '../Page';

export default function View() {
  const { id } = useParams();
  const data = useSelector(postOrRequestSelector(id));
  let status = [];
  if (data?.status === "rejected") {
    status.push("This post has been rejected.");
  }
  status = status.concat(data?.feedback?.split("\n"));
  return (
    <Page
      title="View Post"
      isError={!Boolean(data)}
      errorMessage={<p>Post not found. Please select another post.</p>}
    >
      <PostPreview data={data} urlPath="/industry/posts" />

      {status.map((text, i) => <p key={i}>{text}</p>)}
    </Page>
  )
}