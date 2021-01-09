import React from 'react';

import Page from '../../Page';
import PostPreview from '../../../../common/post/PostPreview';
import ContactButton from './ContactButton';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { requestSelector, requestThunks } from '../../../../redux/industry/requestSlice';

export default function Preview() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector(requestSelector(id));

  const handleApprove = () => {
    dispatch(requestThunks.approveRequest(id, "approver name"))
    history.push("/admin/industry/posts")
    // TODO: handle approver
  }
  const handleReject = () => {
    // TODO: create form for typing in feedback
    history.push("/admin/industry/posts")
  }

  return (
    <Page
      title="Preview Post"
      isError={!Boolean(data)}
      errorMessage={<p>Post not found. Please select another post.</p>}
    >
      <PostPreview data={data} />
      <section className="bottom-buttons">
        <ContactButton email="blah@example.com" />
        {/* TODO: replace placeholder email */}
        <div className="action-buttons">
          <button className="warning right" onClick={handleReject}>Reject</button>
          <button className="success right" onClick={handleApprove}>Approve</button>
        </div>
      </section>
    </Page>
  )
}