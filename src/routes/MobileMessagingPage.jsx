import { ArrowLeftOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import MobileMessageList from "../components/Messaging/MobileMessaging/MobileMessagingList";

const MobileMessagingPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/home");
  };

  return (
    <div className=" ">
      <div className="transition-all duration-300">
        <div className="mt-4 mx-4 flex items-center justify-start">
          <button
            onClick={handleBackClick}
            className="text-xl p-2 flex items-center"
          >
            <ArrowLeftOutlined className="mr-2" />
          </button>
          <span className="text-2xl font-semibold">Messaging</span>
        </div>
        <Divider className="my-4" />
        <div className={`px-4`}>
          <MobileMessageList />
        </div>
      </div>
    </div>
  );
};

export default MobileMessagingPage;
