// src/App.js
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import React, { useState } from "react";
import MessageList from "./MessageList";

const MessageDrawer = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className=" ">
      <div
        className={` rounded-t-[15px] fixed bottom-0 right-0 border-thin border-black bg-white w-[20vw] lg:max-w-[23vw] lg:mx-5  overflow-hidden transition-all duration-300 ${
          expanded ? "h-[calc(100vh-8vh)]" : "h-[70px]"
        }`}
      >
        <div
          className="  m-4  flex items-center justify-between"
          onClick={toggleExpansion}
        >
          <span className="text-xl font-semibold">Messaging</span>
          <button className="text-black py-2 px-4 rounded-full">
            {expanded ? <CaretDownOutlined /> : <CaretUpOutlined />}
          </button>
        </div>
        <Divider />
        <div className={`px-4   ${expanded ? "block" : "hidden"}`}>
          <MessageList />
        </div>
      </div>
    </div>
  );
};

export default MessageDrawer;
