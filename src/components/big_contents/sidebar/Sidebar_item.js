import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
const Sidebar_item = (props) => {
  const loggedout = () => {
    if (window.confirm("Are you sure you want to Logout ?")) {
      localStorage.removeItem("user_info");
      localStorage.removeItem("token");
      props.isloggedin();
      props.history.push({
        pathname: "/login",
      });
    }
  };
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
  } else if (props.txt === "Logout") {
    return_value = (
      <div className="Sidebar_item" onClick={loggedout}>
        <img src="/log-out.png" alt="user"></img>
        <span>{props.txt}</span>
      </div>
    );
  } else {
    return_value = (
      <Link className="link" to="/login">
        <div className="Sidebar_item">
          <img src="/log-out.png" alt="user"></img>
          <span>{props.txt}</span>
        </div>
      </Link>
    );
  }
  return return_value;
};

export default withRouter(Sidebar_item);
