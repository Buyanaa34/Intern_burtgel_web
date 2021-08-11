import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../../contents/pages/home";
import Profile from "../../../contents/pages/profile";
import Registering from "../../../contents/pages/registering";
import Logout from "../../../SignUp_Login/Login";
import "./style.css";
const Holder = () => {
  return (
    <div className="Holder">
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/registering" component={Registering}></Route>
        <Route exact path="/" component={Logout}></Route>
      </Switch>
    </div>
  );
};

export default Holder;
