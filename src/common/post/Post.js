import React from 'react';

import ButtonLink from '../ButtonLink';
import VideoEmbed from './VideoEmbed';
import './Post.css'

export default function Post({ data = {}, history }) {
  const {
    postTitle,
    postSubtitle,
    companyName,
    description = "",
    videoUrl,
    moreUrl,
  } = data;
  return (
    <div className="post">
      <div className="post-header">
        <h3>{postTitle}</h3>
      </div>
      <h5>{postSubtitle}</h5>
      <p className="description">
        { companyName }
        { description.split("\n").map((para, i) => <p key={i}>{para}</p>) }
      </p>
      <VideoEmbed videoUrl={videoUrl} />
      { moreUrl ? <a href={moreUrl}><button className="primary right">Find out more</button></a> : null}
      <button type="button" onClick={() => history.push('/student/industry')}>Back</button>
      {moreUrl ? <ButtonLink to={moreUrl} /> : <></>}
    </div>
  )
}
