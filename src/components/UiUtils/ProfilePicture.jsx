import { Avatar } from "antd";
import React from "react";

const ProfilePicture = ({ size = 40, user = "A" }) => {
  return (
    <div>
      <Avatar size={size}>{user}</Avatar>
    </div>
  );
};

export default ProfilePicture;
