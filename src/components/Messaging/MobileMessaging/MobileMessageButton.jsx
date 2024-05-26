import { MessageOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const MobileMessageButton = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/mobilemessages");
  };

  return (
    <>
      <FloatButton
        style={{ height: 60, width: 60 }}
        className="md:hidden"
        onClick={handleClick}
        icon={<MessageOutlined />}
      />
    </>
  );
};

export default MobileMessageButton;
