import { React, useState } from "react";
import Form from "../contents/form/Form";
import axios from "../../Axios/burtgel_axios";
import Spinner from "../contents/spinner/Spinner";
import { withRouter } from "react-router";
const SignUp = (props) => {
  const [loading, setloading] = useState(false);
  try {
    props.users.forEach((element) => {
      console.log(element[1]);
    });
  } catch (e) {}

  const submit_click = () => {
    setloading(true);
    if (
      document.getElementById("Firstname").value === "" ||
      document.getElementById("Gmail").value === "" ||
      document.getElementById("Password").value === "" ||
      document.getElementById("Password_2nd_time").value === ""
    ) {
      alert("Please fill all the boxes !");
      setloading(false);
    } else {
      if (
        document.getElementById("Password").value !==
        document.getElementById("Password_2nd_time").value
      ) {
        alert("Password does not match with Confirmation password");
        setloading(false);
      } else {
        //Password unique esehiig shalgan && Username unique esehiig shalgan && Gmail unique esehig shalgan
        // const bcrypt = require("bcryptjs");
        // const hashed_password = bcrypt.hashSync(
        //   document.getElementById("Password").value,
        //   bcrypt.genSaltSync()
        // );

        const user_info = {
          displayName: document.getElementById("Firstname").value,
          email: document.getElementById("Gmail").value,
          password: document.getElementById("Password").value,
          returnSecureToken: true,
        };
        axios
          .post(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBMK0jKUrEZ0JBwlYowSdLWCt0as6_Y5xo",
            user_info
          )
          .then((response) => {
            alert("Successfully registered");
            props.history.push({
              pathname: "/login",
            });
            setloading(false);
            document.getElementById("Firstname").value = "";
            document.getElementById("Gmail").value = "";
            document.getElementById("Password").value = "";
            document.getElementById("Password_2nd_time").value = "";
          })
          .catch((e) => {
            setloading(false);
            alert(e.response.data.error.errors[0].message);
          });
      }
    }
  };
  return (
    <div className="SignUp">
      <span className="title">SIGN UP</span>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="signup_holder">
          <div className="container">
            <Form id="Firstname" txt="Your Name Ex:M.Bold" turul="text"></Form>
            <Form id="Gmail" txt="Gmail" turul="text"></Form>
            <Form id="Password" txt="Password" turul="password"></Form>
            <Form
              id="Password_2nd_time"
              txt="Confirm Password"
              turul="password"
            ></Form>
          </div>
          <div className="button_container">
            <button id="Submit" className="btn" onClick={submit_click}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(SignUp);
