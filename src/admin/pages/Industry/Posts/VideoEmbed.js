import React from 'react';

export default function VideoEmbed({ videoURL }) {
  return videoURL ?
    <iframe
      className="video"
      title={videoURL}
      width="560"
      height="315"
      src={videoURL.replace("watch?v=", "embed/")}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    /> : null;
}