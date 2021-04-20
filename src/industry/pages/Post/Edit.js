import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import Page from '../../../common/Page';
import PostsForm from '../../../common/post/PostsForm';
import { postOrRequestSelector } from '../../../redux/industry/postSlice';


// TODO: companies shouldn't be able to edit posts? need to go through approval process again
export default function Edit() {
  const history = useHistory();
  const { id } = useParams();
  const initial = useSelector(postOrRequestSelector(id));
  // TODO: replace with redux dispatch
  const submit = data => {
    history.push('/industry/posts');
  }
  return (
    <Page title="Edit Post">
      <PostsForm submit={submit} submitLabel="Update" initial={initial} />
    </Page>
  )
}
