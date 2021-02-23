import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import ButtonLink from '../ButtonLink';
import VideoEmbed from './VideoEmbed';
import './PostPreview.css'

export default function Preview({ data = {}, urlPath = "" }) {
  const {
    postTitle,
    postSubtitle,
    postDescription = "",
    videoUrl,
    moreUrl,
  } = data;
  const { id } = useParams();
  const history = useHistory();

  const editButton = id
    ? <ButtonLink to={`${urlPath}/edit/${id}`} label="Edit" className="secondary right" />
    : <button className="secondary right" onClick={() => history.push(`${urlPath}/new`, { data })}>Edit</button>;
  
  return (
    <div className="post">
      <div className="post-header">
        <h3>{postTitle}</h3>
        {editButton}
      </div>
      <h5>{postSubtitle}</h5>
      { postDescription?.split("\n").map((para, i) => <p key={i}>{para}</p>) }
      <VideoEmbed videoUrl={videoUrl} />
      { moreUrl ? <a href={moreUrl}><button className="primary right">Find out more</button></a> : null}
    </div>
  )
}
