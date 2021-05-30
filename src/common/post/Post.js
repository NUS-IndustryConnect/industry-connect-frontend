import React from 'react';

import ButtonLink from '../ButtonLink';
import VideoEmbed from './VideoEmbed';
import './Post.css'

export default function Post({ data = {} }) {
  const {
    postTitle,
    postSubtitle,
    companyName,
    postDescription = "",
    videoUrl,
  } = data;
  return (
    <div className="post">
      <div className="post-header">
        <h3>{postTitle}</h3>
      </div>
      <h5>{postSubtitle}</h5>
      <div className="description">
        { companyName }
        { postDescription.split("\n").map((para, i) => <p key={i}>{para}</p>) }
      </div>
      <VideoEmbed videoUrl={videoUrl} />
    </div>
  )
}
