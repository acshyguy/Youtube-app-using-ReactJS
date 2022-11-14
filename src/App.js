import React, { useEffect, useState } from 'react'
import Search from './component/SearchBar/Search'
import { youtube } from './api/youtube'
import VideoList from './component/Video/VideoList'
import VideoPlayer from "./component/Video/VideoPlayer";
import "./App.css"

import VideoProvider, { videoContext } from "./store/video-context";

const App = () => {
  const [data, setData]= useState([])
  const [searchTerm, setSearchTerm] = useState("react")
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await youtube.get("search/", {
        params: {
          part: "snippet",
          q: searchTerm,
        },
      });
      setData(res.data.items);
    };
    fetchData()
  }, [searchTerm])

  return (
    <VideoProvider>
      <Search setSearchTerm={setSearchTerm} />

      <div className='app-video'>

        <VideoPlayer />
        <VideoList items={data} />

      </div>
    </VideoProvider>
  )
}

export default App