import React from "react";
import { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./utils/contants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  let [Videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();

    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {Videos[0] && <AdVideoCard info={Videos[0]} />}
      {Videos.map((video) => {
        return (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard key={video.id} info={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
