import React from "react";
import "./Navbar.css";
import navlogo from "../Assets/nav-logo.svg";
import navprofileIcon from "../Assets/nav-profile.svg";
import abhi from "../Assets/abhi2.jpeg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} className="nav-logo" alt="" />
      <img src={abhi} className="nav-profile" alt="" />
    </div>
  );
};

export default Navbar;
