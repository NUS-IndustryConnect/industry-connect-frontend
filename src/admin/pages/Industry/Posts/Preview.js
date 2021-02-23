import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import PostPreview from '../../../../common/post/PostPreview';
import { requestSelector, requestThunks } from '../../../../redux/industry/requestSlice';
import { userSelector } from '../../../../redux/industry/userSlice';
import Page from '../../Page';
import ContactButton from './ContactButton';

export default function Preview() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const data = useSelector(requestSelector(id));
  const companyUser = useSelector(userSelector(data?.companyUserId));

  const handleApprove = () => {
    dispatch(requestThunks.approveRequest({ companyPostRequestId: id, approvedBy: "approver name" }))
    // TODO: handle approver
    history.push("/admin/industry/posts")
  }
  const handleReject = () => {
    dispatch(requestThunks.rejectRequest({ companyPostRequestId: id, feedback: "" }));
    // TODO: create form for typing in feedback
    history.push("/admin/industry/posts")
  }

  return (
    <Page
      title="Preview Post"
      isError={!Boolean(data)}
      errorMessage={<p>Post not found. Please select another post.</p>}
    >
      <PostPreview data={data} urlPath="/admin/industry/posts" />
      <section className="bottom-buttons">
        <ContactButton email={companyUser?.email} />
        <div className="action-buttons">
          <button className="warning right" onClick={handleReject}>Reject</button>
          <button className="success right" onClick={handleApprove}>Approve</button>
        </div>
      </section>

      {data?.status === "rejected"
        ? <p>This post has been rejected.</p>
        : null}
    </Page>
  )
}
