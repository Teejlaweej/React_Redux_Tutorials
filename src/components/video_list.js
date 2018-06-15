import React from 'react';
import VideoPreview from './video_preview';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) =>  {
    return (
      <VideoPreview
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video={video} />

    );
  });

  return (
    <ul className='col-md-4 list-group'>
      {videoItems}
    </ul>
  );
};

export default VideoList;
