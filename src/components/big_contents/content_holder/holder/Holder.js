import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../../contents/pages/home";
import Profile from "../../../contents/pages/profile";
import Registering from "../../../contents/pages/registering";
import Login from "../../../SignUp_Login/Login";
import Signup from "../../../SignUp_Login/SignUp";
import { Redirect } from "react-router";
import "./style.css";
const Holder = (props) => {
  const isloggedFuncz = (islogged) => {
    props.isloggedFunc(islogged);
  };
  return (
    <div className="Holder">
      {props.islogged ? (
        <Switch>
          <Route path="/profile">
            <Profile users={props.user_info}></Profile>
          </Route>
          <Route path="/registering">
            <Registering user_info={props.user_info}></Registering>
          </Route>
          <Redirect to="/home"></Redirect>
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/login">
            <Login isloggedFunc={isloggedFuncz}></Login>
          </Route>
          <Route exact path="/signup">
            <Signup></Signup>
          </Route>
          <Redirect to="/home"></Redirect>
        </Switch>
      )}
      <Switch>
        <Route path="/home">
          <Home users={props.user_info}></Home>
        </Route>
        <Route exact path="/">
          <Home users={props.user_info}></Home>
        </Route>
      </Switch>
    </div>
  );
};

export default Holder;
