// src/routes/HomePage.jsx
import React from "react";
import MessagingDrawer from "../components/Messaging/MessageDrawer";
import MobileMessageButton from "../components/Messaging/MobileMessaging/MobileMessageButton";
import Navbar from "../components/Navbar/Navbar";
import PostsWall from "../components/PostCard/PostsWall";

const Home = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className="min-h-screen w-full bg-white bg-grid-small-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
        <main className="flex">
          <div
            id="postWall"
            className="w-full md:w-10/12 lg:w-9/12  px-[5%] lg:px-[10%]"
          >
            <PostsWall />
          </div>
          <div className="md:w-2/12 lg:w-3/12 hidden md:block">
            <MessagingDrawer />
          </div>
          <MobileMessageButton />
        </main>
      </div>
    </>
  );
};

export default Home;
