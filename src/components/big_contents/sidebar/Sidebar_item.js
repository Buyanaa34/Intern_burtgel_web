import React from "react";
import { Link } from "react-router-dom";
const Sidebar_item = (props) => {
  let return_value = "buuuz";
  if (props.txt === "Home") {
    return_value = (
      <Link className="link" to="/home">
        <div className="Sidebar_item">
          <img src="/home.png" alt="user"></img>
          <span>{props.txt}</span>
        </div>
      </Link>
    );
  } else if (props.txt === "Profile") {
    return_value = (
      <Link className="link" to="/profile">
        <div className="Sidebar_item">
          <img src="/user.png" alt="user"></img>
          <span>{props.txt}</span>
        </div>
      </Link>
    );
  } else if (props.txt === "Registering") {
    return_value = (
      <Link className="link" to="/registering">
        <div className="Sidebar_item">
          <img src="/edit.png" alt="user"></img>
          <span>{props.txt}</span>
        </div>
      </Link>
    );
  } else {
    return_value = (
      <Link className="link" to="/">
        <div className="Sidebar_item">
          <img src="/log-out.png" alt="user"></img>
          <span>{props.txt}</span>
        </div>
      </Link>
    );
  }
  return return_value;
};

export default Sidebar_item;
