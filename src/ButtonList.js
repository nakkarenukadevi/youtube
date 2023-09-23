import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const listofButton = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "News",
    "Valentines",
    "Soccer",
    "Cricket",
    "Cooking",
    "News",
    "Valentines",
  ];
  return (
    <div className="flex">
      {listofButton.map((btn, index) => (
        <Button name={btn} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
