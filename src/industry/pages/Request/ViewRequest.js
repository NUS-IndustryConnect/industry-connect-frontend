import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

import PostPreview from '../../../common/post/PostPreview';
import { requestSelector } from '../../../redux/industry/requestSlice';
import Page from '../Page';

export default function ViewRequest() {
  const history = useHistory();
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
      <button className="secondary" onClick={history.goBack}><IoIosArrowBack />Back</button>
      <PostPreview data={data} urlPath="/industry/requests" editable={false}  />
      {status.map((text, i) => <p key={i}>{text}</p>)}
    </Page>
  )
}