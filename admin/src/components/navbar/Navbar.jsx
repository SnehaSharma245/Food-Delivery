import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
function Navbar() {
  return (
    <div className="navbar">
      <img src={assets.logo} className="logi" alt="" />
      <img src={assets.profile_image} className="profile" alt="" />
    </div>
  );
}

export default Navbar;
