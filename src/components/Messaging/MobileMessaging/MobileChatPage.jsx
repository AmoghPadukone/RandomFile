import { CloseOutlined, SendOutlined } from "@ant-design/icons";
import { Divider } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProfilePicture from "../../UiUtils/ProfilePicture";

const ApiData = [
  {
    id: 1,
    name: "Poonam Jamgade",
    chatHistory: [
      { sender: "You", message: "Hey Poonam, how are you?" },
      {
        sender: "Poonam",
        message: "Hi! I'm doing well, thanks. How about you?",
      },
      { sender: "You", message: "I'm good too. Just busy with work." },
      {
        sender: "Poonam",
        message: "That sounds hectic. Make sure to take breaks!",
      },
      { sender: "You", message: "Thanks, I will." },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    chatHistory: [
      { sender: "You", message: "Hi Jane, how's your day going?" },
      {
        sender: "Jane",
        message: "Hey! It's going pretty well. How about you?",
      },
      {
        sender: "You",
        message: "Just the usual. Anything exciting happening?",
      },
      {
        sender: "Jane",
        message: "Not much, just catching up on some reading.",
      },
      { sender: "You", message: "That sounds relaxing." },
    ],
  },
  {
    id: 3,
    name: "Shivam Jain",
    chatHistory: [
      { sender: "You", message: "Hey Shivam, what's up?" },
      { sender: "Shivam", message: "Hey! Not much, just chilling." },
      { sender: "You", message: "Wanna grab lunch later?" },
      { sender: "Shivam", message: "Sure, I'm down for that." },
      { sender: "You", message: "Great, I'll see you at noon?" },
    ],
  },
  {
    id: 4,
    name: "Aryan Thacker",
    chatHistory: [
      { sender: "You", message: "Hi Aryan, how have you been?" },
      {
        sender: "Aryan",
        message: "Hey! I've been good, thanks. What about you?",
      },
      { sender: "You", message: "I'm doing okay. Just busy with work." },
      { sender: "Aryan", message: "Make sure to take breaks and relax." },
      { sender: "You", message: "Yeah, I'll try to." },
    ],
  },
  {
    id: 5,
    name: "Sumanth S Royal",
    chatHistory: [
      { sender: "You", message: "Hey Sumanth, how's it going?" },
      {
        sender: "Sumanth",
        message: "Hey! It's going pretty well. What about you?",
      },
      { sender: "You", message: "Just trying to stay productive." },
      {
        sender: "Sumanth",
        message: "That's good. Don't forget to take breaks too.",
      },
      { sender: "You", message: "Thanks, I'll keep that in mind." },
    ],
  },
  {
    id: 6,
    name: "Prachi",
    chatHistory: [
      { sender: "You", message: "Hello Prachi, how's your day?" },
      {
        sender: "Prachi",
        message: "Hi! It's been busy but good. What about you?",
      },
      { sender: "You", message: "Just the usual routine." },
      {
        sender: "Prachi",
        message: "Make sure to find some time for yourself.",
      },
      { sender: "You", message: "Yeah, I'll try to." },
    ],
  },
  {
    id: 7,
    name: "Shreyas",
    chatHistory: [
      { sender: "You", message: "Hey Shreyas, what's up?" },
      { sender: "Shreyas", message: "Hey! Not much, just relaxing." },
      { sender: "You", message: "Do you want to hang out later?" },
      { sender: "Shreyas", message: "Sure, I'd love to!" },
      { sender: "You", message: "Great, I'll text you the details." },
    ],
  },
  {
    id: 8,
    name: "Rayan",
    chatHistory: [
      { sender: "You", message: "Hi Rayan, how's everything?" },
      {
        sender: "Rayan",
        message: "Hey! Everything's going well. What about you?",
      },
      { sender: "You", message: "Just trying to stay organized." },
      {
        sender: "Rayan",
        message: "That's important. Need any help with that?",
      },
      { sender: "You", message: "Not at the moment, but thanks for offering." },
    ],
  },
];
const MobileChatPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const chatContainerRef = useRef(null);

  const profile = ApiData.find((profile) => profile.id === parseInt(id));
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState(profile ? profile.chatHistory : []);

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

  const handleCloseChat = () => {
    navigate("/mobilemessages");
  };

  if (!profile) {
    return <div>User not found</div>;
  }

  return (
    <div className="bg-white p-4 rounded-lg h-screen shadow-md min-h-screen md:w-[60%] md:mx-auto">
      <div className="flex justify-between items-center mb-2">
        <div className="flex gap-3">
          <ProfilePicture size={25} user={profile.name.charAt(0)} />
          <span className="text-lg font-semibold">{profile.name}</span>
        </div>
        <button onClick={handleCloseChat}>
          <CloseOutlined />
        </button>
      </div>
      <Divider className="mt-3" />
      <div className="overflow-y-auto h-[80vh]" ref={chatContainerRef}>
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

export default MobileChatPage;
