import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import ProfilePicture from "../UiUtils/ProfilePicture";

const ProfileDropdown = (props) => {
  const items = [
    {
      key: "title",
      label: <span style={{ fontWeight: "bold" }}>My Account</span>,
      type: "group",
    },
    {
      type: "divider",
    },
    {
      key: "profile",
      label: <Link to="#">My Profile</Link>,
      icon: <UserOutlined />,
    },
    {
      key: "logout",
      label: (
        <a rel="noopener noreferrer" href="#">
          Log Out
        </a>
      ),
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <div>
      <Dropdown
        className="cursor-pointer  "
        menu={{
          items,
        }}
        trigger={["hover"]}
        placement="bottom"
      >
        <Avatar size={40} />
      </Dropdown>
    </div>
  );
};

export default ProfileDropdown;
