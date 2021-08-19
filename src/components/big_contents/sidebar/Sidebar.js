import React from "react";
import "./style.css";
import Logo from "../../contents/logo/Logo";
import Item from "./Sidebar_item";
import { Fragment } from "react";

const Sidebar = (props) => {
  const isloggedinz = () => {
    props.isloggedFunc();
  };
  return (
    <div className="Sidebar">
      {props.user_info !== undefined ? (
        <h1 style={{ color: "white", fontSize: "20px" }}>
          {props.user_info[3][1]}
        </h1>
      ) : (
        <Fragment></Fragment>
      )}
      <Logo></Logo>
      <Item txt="Home"></Item>
      {props.islogged ? (
        <Fragment>
          <Item txt="Profile"></Item>
          <Item txt="Registering"></Item>
          <Item isloggedin={isloggedinz} txt="Logout"></Item>
        </Fragment>
      ) : (
        <Item txt="Login"></Item>
      )}
    </div>
  );
};

export default Sidebar;
