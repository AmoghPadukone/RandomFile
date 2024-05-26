import {
  BellOutlined,
  CloseOutlined,
  CommentOutlined,
  LikeOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Badge, Button, Dropdown, Tooltip } from "antd";
import React, { useState } from "react";

const Notifications = (props) => {
  const [notifications, setNotifications] = useState([
    {
      text: "You have a new message",
      link: "#",
      icon: <MailOutlined />,
    },
    {
      text: "Someone commented on your post",
      link: "#",
      icon: <CommentOutlined />,
    },
    {
      text: "You got a new like",
      link: "#",
      icon: <LikeOutlined />,
    },
  ]);

  const dismissNotification = (index, event) => {
    event.stopPropagation(); // Stop event propagation to prevent closing the menu
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
  };

  const items = [
    {
      key: "notifications-title",
      label: <span style={{ fontWeight: "bold" }}>Notifications</span>,
      type: "group",
    },
    ...(notifications.length
      ? notifications.map((notification, index) => ({
          key: `notification-${index}`,
          label: (
            <div
              key={`notification-${index}`}
              className="flex items-center justify-between"
            >
              <a
                rel="noopener noreferrer"
                href={notification.link}
                className="flex items-center space-x-2"
              >
                {notification.icon}
                <span>{notification.text}</span>
              </a>
              <Button
                type="text"
                icon={<CloseOutlined />}
                onClick={(event) => dismissNotification(index, event)}
              />
            </div>
          ),
        }))
      : [
          {
            key: "no-notifications",
            label: <span style={{ color: "#ccc" }}>0 notifications</span>,
          },
        ]),
  ];

  return (
    <div>
      <Dropdown
        className="cursor-pointer"
        overlayStyle={{ width: "250px" }} // Set a constant width for the dropdown menu
        menu={{
          items,
        }}
        trigger={["click"]}
      >
        <Tooltip title="Notifications">
          <Badge count={notifications.length} offset={[-5, 5]}>
            <Button
              type="text"
              shape="circle"
              icon={<BellOutlined style={{ fontSize: "24px" }} />}
            />
          </Badge>
        </Tooltip>
      </Dropdown>
    </div>
  );
};

export default Notifications;
