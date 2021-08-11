import React from "react";
import Button from "../contents/button/Button";
import Form from "../contents/form/Form";
import "./style.css";
const Login = () => {
  return (
    <div className="Login">
      <div className="Login_container">
        <Form txt="Username" turul="text"></Form>
        <br></br>
        <Form txt="Password" turul="password"></Form>
        <br></br>
        <Button txt="Login"></Button>
      </div>
      <p>Dont have an account yet ?</p>
      <Button txt="Sign Up"></Button>
    </div>
  );
};

export default Login;
