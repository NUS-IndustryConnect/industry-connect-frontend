import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import ButtonLink from '../ButtonLink';
import VideoEmbed from './VideoEmbed';
import './PostPreview.css'

// used by Admin and Industry
export default function Preview({ data = {}, urlPath = "", editable = true }) {
  const {
    postTitle,
    postSubtitle,
    postDescription = "",
    videoUrl,
    moreUrl,
  } = data;
  const { id } = useParams();
  const history = useHistory();

  const isUrl = string => {
    try { return Boolean(new URL(string)); }
    catch(e){ return false; }
  }

  const editButton = id
    ? <ButtonLink to={`${urlPath}/edit/${id}`} label="Edit" className="secondary right" />
    : <button className="secondary right" onClick={() => history.push(`${urlPath}/new`, { data })}>Edit</button>;
  
  return (
    <div className="post">
      <div className="post-header">
        <h3>{postTitle}</h3>
        {editable && editButton}
      </div>
      <h5>{postSubtitle}</h5>
      { postDescription?.split("\n").map((para, i) => <p key={i}>{para}</p>) }
      { videoUrl && isUrl(videoUrl) && (<VideoEmbed videoUrl={videoUrl} />)}
      { videoUrl && !isUrl(videoUrl) && (<p>(Video link is invalid and not able to be shown.)</p>)}
      { moreUrl && isUrl(moreUrl) && (<a href={moreUrl}><button className="primary right">Find out more</button></a>)}
      { moreUrl && !isUrl(moreUrl) && (<p>(View more link is invalid and not able to be shown.)</p>)}
      { !editable && (<button type="button" onClick={() => history.push('/industry/posts')}>Back</button>)}
    </div>
  )
}
