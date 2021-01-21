import React from 'react';
import { useParams } from 'react-router-dom';

import ButtonLink from '../ButtonLink';
import VideoEmbed from './VideoEmbed';
import './PostPreview.css'

export default function Preview({ data = {}, urlPath }) {
  const {
    postTitle,
    postSubtitle,
    description = "",
    videoUrl,
    moreUrl,
  } = data;
  const { id } = useParams();
  const editLink = id
    ? `${urlPath}/edit/${id}`
    : `${urlPath}/new`;
  // TODO: new -> preview -> edit does not work because the info from new is lost
  return (
    <div className="post">
      <div className="post-header">
        <h3>{postTitle}</h3>
        <ButtonLink to={editLink} label="Edit" className="secondary right" />
      </div>
      <h5>{postSubtitle}</h5>
      { description.split("\n").map((para, i) => <p key={i}>{para}</p>) }
      <VideoEmbed videoUrl={videoUrl} />
      { moreUrl ? <a href={moreUrl}><button className="primary right">Find out more</button></a> : null}
    </div>
  )
}
