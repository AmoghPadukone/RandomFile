import { SendOutlined } from "@ant-design/icons";
import { Button, Divider, Input, Space } from "antd";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import CommentButton from "../UiUtils/CommentButton";
import LikeButton from "../UiUtils/LikeButton";
import ProfilePicture from "../UiUtils/ProfilePicture";
import PostComments from "./PostComments";

const { TextArea } = Input;

const PostOpened = ({ postData, onLikeToggle }) => {
  const [comment, setComment] = useState("");
  const [isCommentFocused, setIsCommentFocused] = useState(false);
  const [comments, setComments] = useState(postData.comments || []);
  const [focusOnCommentBox, setFocusOnCommentBox] = useState(false);
  const commentInputRef = useRef(null);
  const [like, setLike] = useState(postData.isLiked);
  const [likeCount, setLikeCount] = useState(postData.likesCount);

  useEffect(() => {
    // Update the component state when the like or likeCount props change
    setLike(postData.isLiked);
    setLikeCount(postData.likesCount);
  }, [postData.isLiked, postData.likesCount]);

  useEffect(() => {
    if (focusOnCommentBox) {
      commentInputRef.current.focus();
      setFocusOnCommentBox(false);
    }
  }, [focusOnCommentBox]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentBlur = () => {
    if (comment.trim() === "") {
      setIsCommentFocused(false);
    }
  };

  const handleCommentButtonClick = () => {
    setIsCommentFocused(true);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      const newComment = {
        name: "Amogh Padukone",
        comment: comment,
        timestamp: new Date().toISOString(),
      };
      const newComments = [...comments, newComment];
      setComments(newComments);
      setComment("");
    }
  };

  return (
    <div className="px-4 max-h-[70vh] lg:max-h-[80vh] overflow-auto">
      <div className="flex w-full gap-5">
        <div className="w-1/12">
          <ProfilePicture user={postData.name.charAt(0).toUpperCase()} />
        </div>
        <div className="w-11/12">
          <div id="postHeader" className="flex justify-between">
            <div className="flex mb-5 mt-2 items-start">
              <div className="leading-3">
                <div className="font-bold capitalize">{postData.name}</div>
                <div className="opacity-75 text-sm">{`@${postData.username}`}</div>
              </div>
              <div className="flex items-start text-xs ml-3">
                <div className="">{moment(postData.timestamp).fromNow()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="postbody">{postData.postContent}</div>
      <div id="postActionButtons" className="flex gap-4 mt-5">
        <LikeButton
          size="25px"
          onClick={onLikeToggle}
          isLiked={like}
          likeCount={likeCount}
        />
        <div className="relative" onClick={handleCommentButtonClick}>
          <CommentButton size="25px" />
        </div>
      </div>
      {isCommentFocused && (
        <div className="flex mt-1">
          <div className="flex w-full gap-2">
            <ProfilePicture size="10" />

            <Space.Compact className="w-full">
              <TextArea
                rows={1}
                maxRows={3}
                placeholder="Add a comment"
                value={comment}
                onChange={handleCommentChange}
                onBlur={handleCommentBlur}
                autoFocus
                ref={commentInputRef}
              />
              <Button type="text" onClick={handleCommentSubmit}>
                <SendOutlined style={{ fontSize: "30px", marginTop: "-5px" }} />
              </Button>
            </Space.Compact>
          </div>
        </div>
      )}
      <Divider className="my-[10px]" />

      <PostComments comments={comments} />
    </div>
  );
};

export default PostOpened;
