import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';

import PostsForm, { getPostFields } from '../../../common/post/PostsForm';
import { postThunks, postSelector } from '../../../redux/industry/postSlice';
import { requestThunks } from '../../../redux/industry/requestSlice';
import { userInfoSelector } from '../../../redux/user/userSelectors';
import Page from '../Page';

export default function EditPost() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const [isModalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const initial = useSelector(postSelector(id));
  const userInfo = useSelector(userInfoSelector);

  const handleClick = data => {
    setData(data);
    setModalOpen(true);
  }

  const submit = () => {
    const postObj = getPostFields(data);
    const filledData = {
      ...postObj,
      companyId: userInfo.companyId,
      companyUserId: userInfo.companyUserId,
    }
    dispatch(postThunks.deletePost(id)); // delete the post
    dispatch(requestThunks.createRequest(filledData)); // and make the request again
    history.push('/industry/posts');
  }
  return (
    <Page title="Edit Post">
      <Popup modal open={isModalOpen}>
        <div className="modal">
          <p>NOTE: Attempting to edit a post that has already been approved. Updates made to this post will need to be approved by NUS Admin again. Are you sure you wish to proceed?</p>
          <div className="action-buttons right">
            <button className="right" onClick={() => setModalOpen(false)}>Cancel</button>
            <button className="warning right" onClick={submit}>Update</button>
          </div>
        </div>
      </Popup>
      <PostsForm submit={handleClick} submitLabel="Update" initial={initial} resettable/>
    </Page>
  )
}
