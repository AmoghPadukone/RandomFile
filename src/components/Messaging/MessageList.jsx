// src/components/Messaging/MessageList.jsx
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import IndividualMessageBox from "./IndividualMessageBox";
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
const MessageList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openChats, setOpenChats] = useState({});

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const openChat = (id) => {
    // Close all open chats first
    Object.keys(openChats).forEach((chatId) => {
      setOpenChats((prevChats) => {
        const updatedChats = { ...prevChats };
        delete updatedChats[chatId];
        return updatedChats;
      });
    });

    // Then open the clicked chat
    setOpenChats((prevChats) => ({
      ...prevChats,
      [id]: true,
    }));
  };

  const closeChat = (id) => {
    setOpenChats((prevChats) => {
      const updatedChats = { ...prevChats };
      delete updatedChats[id];
      return updatedChats;
    });
  };

  const filteredProfiles = ApiData.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-wrap">
      <Input
        placeholder="Search messages"
        value={searchQuery}
        onChange={handleSearch}
        className="mb-8"
        prefix={<SearchOutlined />}
      />
      {filteredProfiles.length === 0 ? (
        <div className="text-center opacity-50">{`User not found :(`}</div>
      ) : (
        filteredProfiles.map((profile) => {
          const lastMessage =
            profile.chatHistory[profile.chatHistory.length - 1];
          return (
            <div key={profile.id} className="mb-4">
              <IndividualMessageBox
                id={profile.id}
                name={profile.name}
                onOpenChat={() => openChat(profile.id)}
                lastMessageSender={lastMessage.sender}
                lastMessageContent={lastMessage.message}
              />
            </div>
          );
        })
      )}
      <div className="fixed bottom-0 right-0 flex flex-wrap">
        {Object.keys(openChats).map((chatId) => (
          <ChatWindow
            key={`chat-${chatId}`}
            data={ApiData.find((profile) => profile.id === parseInt(chatId))}
            onCloseChat={() => closeChat(chatId)}
          />
        ))}
      </div>
    </div>
  );
};

export default MessageList;
