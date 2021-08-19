import { React, useState } from "react";
import Form from "../contents/form/Form";
import { withRouter } from "react-router";
import "./style.css";
import Spinner from "../contents/spinner/Spinner";
const Login = (props) => {
  const onclk = () => {
    props.history.push({
      pathname: "/signup",
    });
  };
  const islogged_or_not = (logged, user_info) => {
    props.isloggedFunc(logged, user_info);
  };
  const login_click = () => {
    islogged_or_not();
    // setloading(true);
    // if (
    //   document.getElementById("Password").value === "" ||
    //   document.getElementById("Gmail").value === ""
    // ) {
    //   alert("Fill all the boxes");
    //   setloading(false);
    // } else {
    //   const data = {
    //     email: document.getElementById("Gmail").value,
    //     password: document.getElementById("Password").value,
    //     returnSecureToken: true,
    //   };
    //   axios
    //     .post(
    //       "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBMK0jKUrEZ0JBwlYowSdLWCt0as6_Y5xo",
    //       data
    //     )
    //     .then((response) => {
    //       setloading(false);
    //       //RESPONSE.DATA BUTETS
    //       // displayName: ""
    //       // email: "georgehenry070@gmail.com"
    //       // expiresIn: "3600"
    //       // idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjM2NGU4NTQ1NzI5OWQ5NzIxYjczNDQyZGNiNTQ3Y2U2ZDk4NGRmNTkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaW50ZXJuLWJ1cnRnZWwiLCJhdWQiOiJpbnRlcm4tYnVydGdlbCIsImF1dGhfdGltZSI6MTYyOTI3NzM2NCwidXNlcl9pZCI6IkdzUkRGUHBGS2xaME9waExlQjI3V1JYMndiWTIiLCJzdWIiOiJHc1JERlBwRktsWjBPcGhMZUIyN1dSWDJ3YlkyIiwiaWF0IjoxNjI5Mjc3MzY0LCJleHAiOjE2MjkyODA5NjQsImVtYWlsIjoiZ2VvcmdlaGVucnkwNzBAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImdlb3JnZWhlbnJ5MDcwQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HqnDEYK6WwSkM0blyN1apFjakGMuyQ9wq02eeJrqAwoE8NbVwkK5VGQeaOelkaQ0qer9h5lbDXfWN8UhQ19hIscp8_l_wJ08d-eEWgQTfdLXjkl_Jkkzsl4K02Ess46nsZDmrqu81vo_wYbgoiq4uLlPam5bYqlNJR6jQk_MnXvfZSjaDZZhuUfBo28Q0y5nhsJJyO3hILlLcK2W7S7peIXQabkQWnfrc9kcxZLf4nH1YYz72rx_H_onu98IBAdOUjfIyb6j3APa8eGKXqVLviwyOtcoWo3qH-2KZ42aVoh5TzzyXhC_0ouvZRYenjZIeYTOPltgZo4bJif3XU8WDA"
    //       // kind: "identitytoolkit#VerifyPasswordResponse"
    //       // localId: "GsRDFPpFKlZ0OphLeB27WRX2wbY2"
    //       // refreshToken: "ACzBnChn7sMLO70bcZb853AHXMgIOO27jFGNJqua22JIFZGg7bQBwq0c3GDiRuQFm9742HYfbGXaG8h_WXQvn-VJIJsEE4NKGlcU8p9CI2R4E7mLle1RSVujZhu-CE-94-1oFDyoDG3yaHIKoRFEYQZRKie5MXjne2fQ9O7ACgGBG3Z5eMr-RpxUj0rq0PcwBZXi0h1s3C5AEbfCBlg_z564tXR6GgWRfw"
    //       // islogged_or_not(true, response.data);
    //       // console.log(response.data);
    //       alert("Successfully logged in");
    //       props.history.push({
    //         pathname: "/registering",
    //       });
    //     })
    //     .catch((e) => {
    //       try {
    //         alert(e.response.data.error.message);
    //       } catch (e) {
    //         console.log(e);
    //       }

    //       setloading(false);
    //     });
    //   //login hiihed oruulsan hereglegchin ner db-s awsan username-tai adil bwl ?
    //   // const bcrypt = require("bcryptjs");
    //   // bcrypt.compare(
    //   //   document.getElementById("Password").value,
    //   //   element[1].Password,
    //   //   function (err, result) {
    //   //     if (result) {
    //   //       //
    //   //       //
    //   //       isforeach_stopped = true;
    //   //       alert("Logged in successfully");
    //   //       throw BreakException;
    //   //     } else {
    //   //       alert("Wrong password !");
    //   //       isforeach_stopped = true;
    //   //       throw BreakException;
    //   //     }
    //   //   }
    //   // );
    // }
  };
  return (
    <div className="login_holder">
      <span className="title">Login</span>
      <div className="Login">
        <div className="Login_container">
          <Form id="Gmail" txt="Gmail" turul="text"></Form>
          <Form id="Password" txt="Password" turul="password"></Form>
          <button onClick={login_click} id="login" className="btn">
            Login
          </button>
        </div>
        <div className="to_signup">
          <div className="question">Don't have an account yet ?</div>
          <button onClick={onclk} className="btn">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
