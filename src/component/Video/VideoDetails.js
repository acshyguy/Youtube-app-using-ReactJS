import React, {useContext} from 'react'
import {videoContext} from "../../store/video-context";

const VideoDetails = ({ item }) => {
  const videoCtx = useContext(videoContext)

  return (
    <div onClick={() => videoCtx.setSelectedVideo(item)}>
        <div>
          <img src="{item.snippet.thumbnails.default.url} alt={item.snippet.title}"></img>
        </div>
        <div>
          <p>{item.snippet.title}</p>
          <p>{item.snippet.description}</p>
        </div>
        
    </div>
  )
}

export default VideoDetails