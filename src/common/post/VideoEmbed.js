import React from 'react';

const videoIdRegex = /youtube.com\/watch\?v=(\w+)/

const extractVideoId = fullLink => videoIdRegex.exec(fullLink)[1];

export default function VideoEmbed({ videoUrl }) {
  return videoUrl?.includes("youtube") ?
    <iframe
      className="video"
      title={videoUrl}
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${extractVideoId(videoUrl)}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    /> : null;
}