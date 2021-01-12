import React from 'react';
<<<<<<< HEAD
import { Link, useParams } from 'react-router-dom';

import Page from '../../Page';
import ContactButton from './ContactButton';
import VideoEmbed from './VideoEmbed';

// TODO: link up to Redux (temporary placeholder)
const mockData = {
  companyPostTitle: "New internship opportunities at XXX",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia dui ut faucibus lobortis. Nullam a scelerisque dolor, eu posuere lorem. Mauris eu sapien dictum, tincidunt mauris in, euismod nunc. Aliquam fermentum, justo in hendrerit commodo, lorem justo venenatis lacus, consequat fringilla tellus justo vitae ante. Sed pellentesque scelerisque hendrerit. Curabitur maximus odio gravida, dapibus magna vitae, sollicitudin dolor. Etiam tristique, eros commodo malesuada elementum, lacus leo sollicitudin nisi, finibus tristique metus diam euismod nibh. Sed sed tempus erat. Maecenas et dolor porttitor, luctus nunc posuere, tincidunt nisi.\nNulla convallis gravida lorem, quis tempor ligula convallis id. Phasellus ac ultricies ipsum. Pellentesque et urna tincidunt, tincidunt nulla vitae, lacinia libero. In facilisis mattis ex vestibulum placerat. Nam iaculis sagittis tempus. Mauris id risus a dolor bibendum tempor fringilla non velit. Aliquam molestie nibh sit amet est posuere varius id eget diam. Maecenas rutrum nulla vitae lorem molestie consequat. In sit amet augue varius enim placerat fermentum. Vivamus laoreet turpis sed diam sollicitudin, quis pretium massa mollis. Sed lobortis quis ex non tempor. Ut quis odio in lorem dictum euismod. Phasellus vitae dictum diam.",
  videoURL: "https://www.youtube.com/watch?v=Jf_2EyDNywE",
  moreURL: "https://www.tech.gov.sg/"
}

export default function Preview(props) {
  const {
    companyPostTitle,
    description = "",
    videoURL,
    moreURL,
  // } = props;
  } = mockData;
  const { id } = useParams();
  return (
    <Page title="Preview Post">
      <div className="post">
        <div className="post-header">
          <h3>{companyPostTitle}</h3>
          <Link to={`/admin/industry/posts/edit/${id}`}>
            <button className="secondary right">Edit</button>
          </Link>
        </div>
        { description.split("\n").map((para, i) => <p key={i}>{para}</p>) }
        <VideoEmbed videoURL={videoURL} />
        { moreURL ? <a href={moreURL}><button className="primary right">Find out more</button></a> : null}
      </div>
      <section className="bottom-buttons">
        <ContactButton email="blah@example.com" />
        <div className="action-buttons">
          <button className="warning right">Reject</button>
          <button className="success right">Approve</button>
=======
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import PostPreview from '../../../../common/post/PostPreview';
import { requestSelector, requestThunks } from '../../../../redux/industry/requestSlice';
import Page from '../../Page';
import ContactButton from './ContactButton';

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
>>>>>>> 0abed8ac06c26622be97d96678b2b86a2eb41ada
        </div>
      </section>
    </Page>
  )
}