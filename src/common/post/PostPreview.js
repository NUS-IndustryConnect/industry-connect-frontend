import React from 'react';
import { Link, useParams } from 'react-router-dom';

import VideoEmbed from './VideoEmbed';
import './PostPreview.css'

export default function Preview({ data }) {
  const {
    companyPostTitle,
    description = "",
    videoURL,
    moreURL,
  } = data;
  const { id } = useParams();
  return (
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
  )
}