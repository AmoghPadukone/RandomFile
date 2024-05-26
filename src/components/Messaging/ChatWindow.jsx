import { CloseOutlined, SendOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import React, { useEffect, useRef, useState } from "react";
import ProfilePicture from "../UiUtils/ProfilePicture";

const ChatWindow = ({ onCloseChat, data }) => {
  const chatContainerRef = useRef(null);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(data.chatHistory || []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      const newMessage = { sender: "You", message: message };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  return (
    <div className="bg-white border-thin border-black p-4 rounded-lg shadow-md  w-[35vw] lg:w-[25vw] fixed bottom-0 right-0 lg:mr-[28vw]  mr-[23vw]">
      <div className="flex justify-between items-center mb-2">
        <div className="flex gap-3">
          {" "}
          <ProfilePicture size={25} user={data.name.charAt(0)} />
          <span className="text-lg font-semibold">{data.name}</span>
        </div>
        <button onClick={onCloseChat}>
          <CloseOutlined />
        </button>
      </div>
      <Divider className="mt-3" />
      <div className="h-[40vh] overflow-y-auto" ref={chatContainerRef}>
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <div className="text-sm">{msg.sender}</div>
            {msg.message}
            <Divider className="my-3" />
          </div>
        ))}
      </div>
      <div className="flex mt-2">
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handleSendMessage();
            }
          }}
          placeholder="Type a message..."
          className="flex-1 bg-white border border-gray-300 rounded-l-md p-2"
        />
        <button
          onClick={handleSendMessage}
          className="border border-gray-300 rounded-r-md px-4"
        >
          <SendOutlined />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
