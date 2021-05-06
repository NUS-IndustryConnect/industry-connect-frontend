import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Popup from 'reactjs-popup';
import toast from 'react-hot-toast';
import { IoIosArrowBack } from 'react-icons/io';

import 'reactjs-popup/dist/index.css';

import PostPreview from '../../../../common/post/PostPreview';
import { requestSelector, requestThunks } from '../../../../redux/industry/requestSlice';
import { companyUserSelector } from '../../../../redux/industry/userSlice';
import Page from '../../Page';
import ContactButton from './ContactButton';
import { userInfoSelector } from '../../../../redux/user/userSelectors';

export default function Preview() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const [feedback, setFeedback] = useState("");
  const data = useSelector(requestSelector(id));
  const companyUser = useSelector(companyUserSelector(data?.companyUserId));
  const userInfo = useSelector(userInfoSelector);

  const handleApprove = () => {
    dispatch(requestThunks.approveRequest({
      companyPostRequestId: id,
      approvedBy: "approver name"
    }))
    // TODO: WAITING FOR ADMIN AUTHENTICATION
    // approvedBy should be taken from redux's userInfo
    history.push("/admin/industry/posts");
    toast.success("Approved post");
  }
  const handleReject = (feedback) => {
    dispatch(requestThunks.rejectRequest({ companyPostRequestId: id, feedback }));
    history.push("/admin/industry/posts/requests");
    toast.success("Rejected post");
  }

  const rejectWithPopup = (
    <Popup
      trigger={<button className="warning right">Reject</button>}
      modal
    >
      {close => (
        <div className="modal">
          <h3>Feedback / Reason for rejecting post</h3>
          <textarea
            rows="5"
            value={feedback}
            onChange={e => setFeedback(e.target.value)}
            placeholder="E.g. missing information"
          />
          <div className="action-buttons right">
            <button className="right" onClick={close}>Cancel</button>
            <button className="warning right" onClick={() => handleReject(feedback)}>Reject</button>
          </div>
        </div>
      )}
    </Popup>
  )

  let status = [];
  if (data?.status === "rejected") {
    status.push("This post has been rejected.");
  }
  status = status.concat(data?.feedback?.split("\n"));
  
  return (
    <Page
      title="Preview Post"
      isError={!Boolean(data)}
      errorMessage={<p>Post not found. Please select another post.</p>}
    >
      <button className="secondary" onClick={history.goBack}><IoIosArrowBack />Back</button>
      <PostPreview data={data} urlPath="/admin/industry/posts" editable={false} />
      <section className="bottom-buttons">
        <ContactButton email={companyUser?.email} />
        <div className="action-buttons">
          {rejectWithPopup}
          <button className="success right" onClick={handleApprove}>Approve</button>
        </div>
      </section>

      {status.map((text, i) => <p key={i}>{text}</p>)}
    </Page>
  )
}
