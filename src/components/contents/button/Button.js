import React from "react";
import { withRouter } from "react-router-dom";
const button = (props) => {
  const loginclick = () => {
    if (props.txt === "Login") {
      props.history.push({
        pathname: "/home",
      });
    } else if (props.txt === "Sign Up") {
      props.history.push({
        pathname: "/sign_up",
      });
    }
  };

  return (
    <button className="button" onClick={loginclick}>
      <span id="button_txt">{props.txt}</span>
    </button>
  );
};

export default withRouter(button);
