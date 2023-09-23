import React from "react";
import "../src/App.css";
const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg rounded-lg">
      <img src={thumbnails.medium.url} className="rounded-lg" alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="">{channelTitle}</li>
        <li>{statistics.viewCount}views</li>
      </ul>
    </div>
  );
};
export const AdVideoCard = ({ info }) => {
  return (
    <div className="adcard w-72  rounded-lg shadow-lg">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
