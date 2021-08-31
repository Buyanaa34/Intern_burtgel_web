import { React, useEffect, useState } from "react";
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
      <Logo></Logo>
      <Item txt="Home"></Item>
      {props.islogged ? (
        <Fragment>
          {props.isadmin ? (
            <Item txt="Observation"></Item>
          ) : (
            <Fragment>
              <Item txt="Profile"></Item>
              <Item txt="Registering"></Item>
            </Fragment>
          )}

          <Item isloggedin={isloggedinz} txt="Logout"></Item>
        </Fragment>
      ) : (
        <Item txt="Login"></Item>
      )}
    </div>
  );
};

export default Sidebar;
