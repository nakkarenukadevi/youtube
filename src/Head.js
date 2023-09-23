import React from "react";
import hambargur from "./hambargur1.jpg";
import youtubelogo from "./youtublogo.jpg";
import usericon from "./usericon.jpg";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";
import { useState, useEffect } from "react";
import { YOUTUBE_SERACH_API } from "./utils/contants";
import { cacheResults } from "./utils/serachSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    //API call
    //make an api call after ever key press
    //but if the difference between 2 api calls is < 200ms
    //decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSugsestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  /* 
  * key- i
 *- render the component
 *-uesEffect();
 *-start timer => make api call after 200ms


 *-key-ip
 *-destroy the component(useEffect return method)
 *-re-render the component
 *-useEffect()
 *-start timer=>make api call after 200 ms
 *
 * 
 * 
 * 
 * setTimeout(200)-make an Api call
 * 
 * 
 * 
 * 

  */

  const getSearchSugsestions = async () => {
    const data = await fetch(YOUTUBE_SERACH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    //updata cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandle = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className="flex col-span-1">
        <div className="flex">
          <img
            src={hambargur}
            alt="menu"
            className="my-5 cursor-pointer"
            style={{ width: "50px", height: "50px" }}
            onClick={() => {
              toggleMenuHandle();
            }}
          />

          <a href="/">
            <img
              src={youtubelogo}
              style={{ width: "100px", height: "100px" }}
              alt="youtube"
            />
          </a>
        </div>
      </div>
      <div className="col-span-10 my-6 mx-5">
        <input
          type="text"
          value={searchQuery}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full  "
        />
        <button className="border bordr-gray-400 p-2 rounded-r-full bg-gray-100">
          search
        </button>
        {showSuggestions && (
          <div className=" fixed bg-white  px-2 w-96 w-[37rem] shadow-lg rounded-lg border border-gray-100 my-2">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="px-3 py-2 hover:bg-gray-100">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <img
          src={usericon}
          alt="usericon"
          className="my-5"
          style={{ width: "40px", height: "40px" }}
        />
      </div>
    </div>
  );
};

export default Head;
