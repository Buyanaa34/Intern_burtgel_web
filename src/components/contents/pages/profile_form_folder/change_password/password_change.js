import { React, useState } from "react";
import "./style.css";
import Form from "../../../form/Form";
import { withRouter } from "react-router";
import { Fragment } from "react";
import axios from "axios";
import Spinner from "../../../spinner/Spinner";
const Password_change = (props) => {
  const [loading, setloading] = useState(false);
  const Submit_change = (type) => {
    if (type === "Submit") {
      setloading(true);
      const data = {
        requestType: "PASSWORD_RESET",
        email: document.getElementById("Email").value,
      };
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBMK0jKUrEZ0JBwlYowSdLWCt0as6_Y5xo",
          data
        )
        .then((response) => {
          alert("Successfully sent to your email");
          props.history.push({
            pathname: "/login",
          });
        })
        .catch((e) => {
          console.log(e);
        })
        .finally(setloading(false));
    } else {
      props.history.push({
        pathname: "/login",
      });
    }
  };
  return (
    <Fragment>
      <span id="headers" className="titlez">
        FORGOT PASSWORD
      </span>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="password_container">
          <div className="all_contents">
            <span style={{ fontSize: "30px" }}>YOUR MAIL</span>
            <Form id="Email" txt="Email" turul="text"></Form>
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
      )}
    </Fragment>
  );
};

export default withRouter(Password_change);
