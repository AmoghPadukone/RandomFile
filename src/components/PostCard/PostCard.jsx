// PostCard.js
import { DeleteOutlined, MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown, Modal } from "antd";
import moment from "moment";
import React, { useState } from "react";
import CommentButton from "../UiUtils/CommentButton";
import LikeButton from "../UiUtils/LikeButton";
import ProfilePicture from "../UiUtils/ProfilePicture";
import PostOpened from "./PostOpened";

const PostCard = ({
  index,
  data,
  name,
  username,
  content,
  timestamp,
  isLiked,
  handleLikeToggle,
  likesCount,
  onDelete,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [focusOnCommentBox, setFocusOnCommentBox] = useState(false);

  const showModal = (withCommentBoxFocus) => {
    setIsModalOpen(true);
    if (withCommentBoxFocus) {
      setFocusOnCommentBox(true);
    }
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const formatTimestamp = (stamp) => {
    return moment(stamp).fromNow();
  };

  const items = [
    {
      key: "1",
      label: <p className="text-[16px]">Delete</p>,
      icon: <DeleteOutlined style={{ fontSize: "16px", color: "red" }} />,
      onClick: () => onDelete(index),
    },
  ];

  return (
    <>
      <div className="bg-white flex p-4 lg:p-6 border-thin border-black rounded-[15px] my-10">
        <div className="w-2/12 lg:w-1/12">
          <ProfilePicture user={username.charAt(0).toUpperCase()} />
        </div>
        <div className="w-10/12 lg:w-11/12">
          <div id="postHeader" className="flex justify-between">
            <div className="flex flex-col lg:flex-row mb-5 mt-2 items-start">
              <div className="leading-3">
                <div className="font-bold capitalize">{name}</div>
                <div className="opacity-75 text-sm">{`@${username}`}</div>
              </div>
              <div className="flex items-start  text-[11px] lg:text-xs lg:ml-2">
                <div id="post-timestamp" className="">
                  {formatTimestamp(timestamp)}
                </div>
              </div>
            </div>
            <div>
              <Dropdown menu={{ items }} placement="bottomRight">
                <Button type="text">
                  <MoreOutlined style={{ fontSize: "20px" }} />
                </Button>
              </Dropdown>
            </div>
          </div>
          <div
            id="postbody"
            className="line-clamp-[5] cursor-pointer"
            onClick={() => showModal(false)}
          >
            {content}
          </div>
          <div id="postActionButtons" className="flex gap-4 mt-5">
            <LikeButton
              size="25px"
              isLiked={data.isLiked}
              onClick={() => handleLikeToggle(index)}
            />

            <div onClick={() => showModal(true)}>
              <CommentButton size="25px" />
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        title={" "}
      >
        <PostOpened
          postData={data}
          onLikeToggle={() => handleLikeToggle(index)}
        />
      </Modal>
    </>
  );
};

export default PostCard;
