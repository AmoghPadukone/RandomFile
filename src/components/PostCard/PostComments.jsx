import { Divider } from "antd";
import moment from "moment";
import React, { useState } from "react";
import LikeButton from "../UiUtils/LikeButton";
import ProfilePicture from "../UiUtils/ProfilePicture";

const PostComments = ({ comments }) => {
  const sortedComments = comments.sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );

  // State to manage liked status for each comment
  const [likedComments, setLikedComments] = useState({});

  // Function to handle toggling the like status
  const handleLikeToggle = (index) => {
    setLikedComments((prevLikedComments) => {
      const updatedLikedComments = { ...prevLikedComments };
      updatedLikedComments[index] = !updatedLikedComments[index];
      return updatedLikedComments;
    });
  };

  return (
    <>
      <div className="mb-3">
        <p className="text-lg font-semibold">Comments:</p>
      </div>

      {sortedComments.map((comment, index) => (
        <div key={index}>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <ProfilePicture
                size="10"
                user={comment.name.charAt(0).toUpperCase()}
              />
              <div>
                <div className="flex items-center gap-2">
                  <p className="capitalize">{comment.name}</p>
                  <span className="text-[10px] opacity-60">
                    {moment(comment.timestamp).fromNow()}
                  </span>
                </div>
                <p
                  style={{ wordWrap: "break-word" }}
                  className="whitespace-normal"
                >
                  {comment.comment}
                </p>
              </div>
            </div>
            {/* Pass down liked status and toggle function */}
            <LikeButton
              isLiked={likedComments[index]} // Pass liked status
              onClick={() => handleLikeToggle(index)} // Pass toggle function
            />
          </div>
          <Divider className="mt-[10px] mb-[15px]" />
        </div>
      ))}
    </>
  );
};

export default PostComments;
