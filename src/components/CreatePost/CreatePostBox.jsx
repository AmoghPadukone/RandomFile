import { SendOutlined } from "@ant-design/icons";
import { Button, Input, message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import ProfilePicture from "../UiUtils/ProfilePicture";

const { TextArea } = Input;

const CreatePostBox = ({ onNewPost }) => {
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);
  const [makePost, setMakePost] = useState({ postContent: "" });
  const containerRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsTextAreaFocused(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleTextAreaFocus = () => {
    setIsTextAreaFocused(true);
  };

  const handleSend = () => {
    if (makePost.postContent.trim() !== "") {
      const newPost = {
        name: "Amogh Padukone",
        username: "amogh.padukone",
        timestamp: new Date().toISOString(),
        likesCount: 0,
        postContent: makePost.postContent,
        comments: [],
      };
      onNewPost(newPost);
      message.success("Posted successfully!");
      setMakePost({ postContent: "" });
      setIsTextAreaFocused(false);
    } else {
      message.error("Post Empty!");
    }
  };

  const onTextChange = (e) => {
    const { name, value } = e.target;
    setMakePost({ ...makePost, [name]: value });
  };

  return (
    <div
      className={` px-5 pt-5 pb-3 rounded-[15px] border-thin border-black bg-white my-10 ${
        isTextAreaFocused
          ? "shadow-2xl transition-shadow duration-300 ease-in-out"
          : "shadow transition-shadow duration-300 ease-in-out"
      }`} // Apply transitions to shadow class
      ref={containerRef}
    >
      <div className="flex gap-5">
        <div>
          <ProfilePicture user="A" />
        </div>
        <TextArea
          placeholder="Share your Thoughts..."
          autoSize={{ minRows: 2, maxRows: 20 }}
          onChange={onTextChange}
          name="postContent"
          value={makePost.postContent}
          className="bg-transparent border-0"
          onFocus={handleTextAreaFocus}
        />
      </div>
      {isTextAreaFocused && (
        <div className="w-full flex justify-end">
          <button
            type="primary"
            className="mt-5 px-4 text-white rounded-lg py-1 bg-black hover:bg-gray-900 active:bg-gray-800 !important"
            onClick={handleSend}
          >
            Submit <SendOutlined />
          </button>
        </div>
      )}
    </div>
  );
};

export default CreatePostBox;
