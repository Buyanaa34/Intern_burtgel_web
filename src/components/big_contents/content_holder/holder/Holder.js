import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../../../contents/pages/home";
import Profile from "../../../contents/pages/profile";
import AddNews from "../../../contents/pages/Add_news";
import Observation from "../../../contents/pages/Observation";
import Registering from "../../../contents/pages/registering";
import Login from "../../../SignUp_Login/Login";
//import Signup from "../../../SignUp_Login/SignUp";
import { Redirect } from "react-router";
import ChangePassword from "../../../contents/pages/profile_form_folder/change_password/password_change";
import "./style.css";
// const Home = React.lazy(() => {
//   return import("../../../contents/pages/home");
// });
// const Profile = React.lazy(() => {
//   return import("../../../contents/pages/profile");
// });
// const AddNews = React.lazy(() => {
//   return import("../../../contents/pages/Add_news");
// });
// const Observation = React.lazy(() => {
//   return import("../../../contents/pages/Observation");
// });
const Signup = React.lazy(() => {
  return import("../../../SignUp_Login/SignUp");
});
const Holder = (props) => {
  const isloggedFuncz = (islogged) => {
    props.isloggedFunc(islogged);
  };
  const isloggedin = () => props.isloggedin();
  return (
    <div className="Holder">
      <Suspense fallback={<div></div>}>
        {props.islogged ? (
          <Switch>
            <Route path="/profile">
              <Profile
                isloggedin={isloggedin}
                user_info={props.user_info}
              ></Profile>
            </Route>
            <Route path="/registering">
              <Registering user_info={props.user_info}></Registering>
            </Route>
            <Route path="/add_news">
              <AddNews user_info={props.user_info}></AddNews>
            </Route>
            <Route path="/observation">
              <Observation user_info={props.user_info}></Observation>
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
            <Route exact path="/forgot">
              <ChangePassword></ChangePassword>
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
      </Suspense>
    </div>
  );
};

export default Holder;
