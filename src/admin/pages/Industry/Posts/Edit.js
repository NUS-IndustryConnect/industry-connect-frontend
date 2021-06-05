import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

import PostsForm, { getPostFields } from '../../../../common/post/PostsForm';
import { postOrRequestSelector, postThunks } from '../../../../redux/industry/postSlice';
import Page from '../../Page';

export default function Edit() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentValues = useSelector(postOrRequestSelector(id));

  const submit = data => {
    const postObj = {
      ...currentValues,
      ...getPostFields(data)
    };
    dispatch(postThunks.updatePost(postObj));
    history.push(`/admin/industry/posts/view/${id}`);
    toast.success("Updated post");
  }
  return (
    <Page
      title="Edit Post"
      isError={!Boolean(currentValues)}
      errorMessage={<p>Post not found. Please select another post.</p>}
    >
      <PostsForm
        submit={submit}
        submitLabel="Update"
        initial={currentValues}
        isAdmin
        companyUserDropdownDisabled
        resettable
      />
    </Page>
  )
}
