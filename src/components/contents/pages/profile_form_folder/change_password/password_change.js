import React from "react";
import "./style.css";
import Form from "../../../form/Form";
const password_change = (props) => {
  const oldpass = "Admin123";
  const Submit_change = (btn) => {
    if (btn === "Submit") {
      if (document.getElementById("New").value !== "") {
        if (oldpass === document.getElementById("Old").value) {
          props.submit_or_cancel();
          alert("Successfully changed the password");
        } else {
          alert("Old password does not match");
        }
      } else {
        alert("Please fill the boxes");
      }
    } else {
      props.submit_or_cancel();
    }
  };
  return (
    <div className="password_container">
      <div className="all_contents">
        <span style={{ fontSize: "30px" }}>PASSWORD</span>
        <Form id="Old" txt="Old Password" turul="password"></Form>
        <Form id="New" txt="New Password" turul="password"></Form>
        <div className="btn_holder">
          <button
            className="btn"
            id="Submit"
            onClick={() => Submit_change("Submit")}
          >
            Submit
          </button>
          <button
            className="btn"
            id="Cancel"
            onClick={() => Submit_change("Cancel")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default password_change;
