import Notifications from "./Notifications";
import ProfileDropdown from "./ProfileDropdown";

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navbar = (props) => {
  return (
    <div className="w-full h-[8vh] md:h-[6vh]  bg-stone-200 flex  px-[5%] justify-between items-center">
      <div id="logo-container" className=" flex items-center h-full">
        <Link to="/home">
          <img src={logo} alt="logo" className="my-5 h-5" />
        </Link>
      </div>
      <div id="nav-action-buttons" className="flex gap-10 items-center h-full">
        <Notifications />
        <ProfileDropdown />
      </div>
    </div>
  );
};

export default Navbar;
