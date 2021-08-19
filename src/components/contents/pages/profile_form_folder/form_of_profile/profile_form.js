import React from "react";
import Form from "../../../form/Form";
import "./style.css";
import * as Profile_animation from "../../../../animations/50124-user-profile.json";
import Lottie from "react-lottie";
const profile_form = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,

    animationData: Profile_animation.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const btn_click = () => {
    props.btnclick();
  };
  const submit_click = () => {
    if (
      document.getElementById("Firstname").value === "" ||
      document.getElementById("Gmail").value === ""
    ) {
      alert("Please fill all the boxes !");
    } else {
      alert("Successfully changed your information");
      document.getElementById("Firstname").value = "";
      document.getElementById("Gmail").value = "";
    }
  };
  return (
    <div className="Form_holder">
      <div className="form_grid_container">
        <div className="right_container">
          <Form id="Firstname" txt="Your Name Ex:M.Bold" turul="text"></Form>
          <Form id="Gmail" txt="Gmail" turul="text"></Form>
          <div className="button_container">
            <button id="Change_password" className="btn" onClick={btn_click}>
              Change Password
            </button>
            <button id="Submit" className="btn" onClick={submit_click}>
              Submit
            </button>
          </div>
        </div>

        <Lottie options={defaultOptions} width={"68%"}></Lottie>
      </div>
    </div>
  );
};

export default profile_form;
