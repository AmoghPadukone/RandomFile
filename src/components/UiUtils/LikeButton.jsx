import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import React from "react";

const LikeButton = ({ size, isLiked, onClick }) => {
  return (
    <button className="outline-none focus:outline-none" onClick={onClick}>
      {isLiked ? (
        <HeartFilled style={{ fontSize: size, color: "red" }} />
      ) : (
        <HeartOutlined style={{ fontSize: size }} />
      )}
    </button>
  );
};

export default LikeButton;
