import React, { useState } from "react";
import '../LikeButton/like.css'
import {AiFillLike} from "react-icons/ai";

const LikeButtonCompoent = () => {
  const [like, setLike] = useState(100),
    [isLike, setIsLike] = useState(false),
    onLikeButtonClick = () => {
      setLike(like + (isLike?-1:1));
      setIsLike(!isLike);
    };

  return (
    <>
      <button
        className={"like-button " + (isLike ? "liked" : "")}
        onClick={onLikeButtonClick}
      >
      <AiFillLike className='icon-like'/>{""} {like}
      </button>
      <style>{`
        .like-button {
            font-size: 1.2rem;
            border: none;
            cursor: pointer;
            background:none;
            color:  #585858;
        }
        .liked {
            font-weight: bold;
            color: #1565c0;
            background:none;
            border: none;
          }
      `}</style>
    </>
  );
};

export default function App() {
  return <LikeButtonCompoent />;
}