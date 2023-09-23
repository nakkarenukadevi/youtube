import React from "react";
import usericon from "./usericon.jpg";

const commentsData = [
  {
    name: "renukadevi",
    text: "lorem ipsum dolor sit amet , consectetur adip",
    replies: [],
  },
  {
    name: "renukadevi",
    text: "lorem ipsum dolor sit amet , consectetur adip",
    replies: [],
  },
  {
    name: "renukadevi",
    text: "lorem ipsum dolor sit amet , consectetur adip",
    replies: [],
  },
  {
    name: "renukadevi",
    text: "lorem ipsum dolor sit amet , consectetur adip",
    replies: [
      {
        name: "renukadevi",
        text: "lorem ipsum dolor sit amet , consectetur adip",
        replies: [],
      },
      {
        name: "renukadevi",
        text: "lorem ipsum dolor sit amet , consectetur adip",
        replies: [
          {
            name: "renukadevi",
            text: "lorem ipsum dolor sit amet , consectetur adip",
            replies: [
              {
                name: "renukadevi",
                text: "lorem ipsum dolor sit amet , consectetur adip",
                replies: [],
              },
              {
                name: "renukadevi",
                text: "lorem ipsum dolor sit amet , consectetur adip",
                replies: [],
              },
              {
                name: "renukadevi",
                text: "lorem ipsum dolor sit amet , consectetur adip",
                replies: [
                  {
                    name: "renukadevi",
                    text: "lorem ipsum dolor sit amet , consectetur adip",
                    replies: [],
                  },
                  {
                    name: "renukadevi",
                    text: "lorem ipsum dolor sit amet , consectetur adip",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 roundee-lg my-2">
      <div>
        <img src={usericon} alt="usericon" className="w-12 h-12" />
      </div>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
