import React from 'react';

export default function VideoEmbed({ videoUrl }) {
  return videoUrl ?
    <iframe
      className="video"
      title={videoUrl}
      width="560"
      height="315"
      src={videoUrl.replace("watch?v=", "embed/")}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    /> : null;
}