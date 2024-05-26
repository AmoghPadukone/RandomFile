// src/components/Messaging/IndividualMessageBox.jsx
import { Divider } from "antd";
import React from "react";
import ProfilePicture from "../UiUtils/ProfilePicture";

const IndividualMessageBox = ({
  id,
  name,
  onOpenChat,
  lastMessageContent,
  lastMessageSender,
}) => {
  const handleClick = () => {
    onOpenChat(id);
  };

  return (
    <>
      <div
        className="flex  flex-grow gap-3 items-start cursor-pointer w-full"
        onClick={handleClick}
      >
        <ProfilePicture user={name.charAt(0)} />
        <div key={id} className="mb-4 w-full flex-grow flex-1">
          <div className="flex items-center flex-grow   w-full ">
            <span className="font-semibold">{name}</span>
          </div>
          <div>
            <p className="line-clamp-1 text-sm w-full text-gray-500">
              {`${lastMessageSender}: ${lastMessageContent}`}
            </p>
          </div>
        </div>
      </div>
      <Divider className="my-2" />
    </>
  );
};

export default IndividualMessageBox;
