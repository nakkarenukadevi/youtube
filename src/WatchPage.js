import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [serachParam] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col">
      <div>
        <iframe
          width="853"
          height="480"
          src={"https://www.youtube.com/embed/" + serachParam.get("v")}
          title="This Mantra Helped Me Remove All Obstacles Ganesha Maha Mantra (Vakratunda Mahakaya) (3hours)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
