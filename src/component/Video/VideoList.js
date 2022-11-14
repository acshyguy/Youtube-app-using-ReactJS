import React from 'react'
import VideoDetails from './VideoDetails'

const VideoList = ({items}) => {
  return (
    <div>
        {items.map((item) => (
          <VideoDetails key={item.id.videoId} item={item}/>
        ))}
    </div>
  );
};

export default VideoList