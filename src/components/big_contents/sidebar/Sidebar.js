import React from "react";
import "./style.css";
import Logo from "../../contents/logo/Logo";
import Item from "./Sidebar_item";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <Logo></Logo>
      <Item txt="Home"></Item>
      <Item txt="Profile"></Item>
      <Item txt="Registering"></Item>
      <Item txt="Logout"></Item>
    </div>
  );
};

export default Sidebar;
