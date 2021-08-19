import "./App.css";
import { useState, useEffect } from "react";
import { withRouter } from "react-router";
//import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/big_contents/sidebar/Sidebar";
import Holder from "./components/big_contents/content_holder/holder/Holder";
import axios from "axios";

function App(props) {
  const [islogged, setlogged_or_not] = useState(false);
  const [user_info, setuserinfo] = useState();
  //AUTO LOGIN*********************************************************
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user_info_local = JSON.parse(localStorage.getItem("user_info"));
    const expiredate = new Date(localStorage.getItem("expireDate"));
    // try {
    //   const refreshToken = user_info_local[6][1];
    // } catch (e) {}
    if (token) {
      // setlogged_or_not(true);
      // setuserinfo(user_info_local);
      // herwee auto login hiiheed tanii expire date odoogiin date-s hetersen baiwal ta dahin login hiih shaardlagatai
      if (expiredate > new Date()) {
        //hetreegui ued
        console.log("hetreeeeegu");
        setlogged_or_not(true);
        setuserinfo(user_info_local);
        //expire date-ee shinechlen ugch bn
        timerfunction(expiredate.getTime() - new Date().getTime());
      } else {
        console.log("hetersen");
        //hetersen ued
        setlogged_or_not(false);
        localStorage.removeItem("token");
        localStorage.removeItem("user_info");
        localStorage.removeItem("expireDate");
        props.history.push({
          pathname: "/login",
        });
      }
    }
  }, []);
  const timerfunction = (ms) => {
    setTimeout(() => {
      console.log(ms + "on functino");
      setlogged_or_not(false);
      localStorage.removeItem("token");
      localStorage.removeItem("user_info");
      localStorage.removeItem("expireDate");
      props.history.push({
        pathname: "/login",
      });
    }, ms);
  };
  const isloggedFunc = (logged) => {
    //islogged, infoz
    if (logged) {
      if (
        document.getElementById("Password").value === "" ||
        document.getElementById("Gmail").value === ""
      ) {
        alert("Fill all the boxes");
      } else {
        const data = {
          email: document.getElementById("Gmail").value,
          password: document.getElementById("Password").value,
          returnSecureToken: true,
        };
        axios
          .post(
            "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBMK0jKUrEZ0JBwlYowSdLWCt0as6_Y5xo",
            data
          )
          .then((response) => {
            //RESPONSE.DATA BUTETS
            // displayName: ""
            // email: "georgehenry070@gmail.com"
            // expiresIn: "3600"
            // idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjM2NGU4NTQ1NzI5OWQ5NzIxYjczNDQyZGNiNTQ3Y2U2ZDk4NGRmNTkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaW50ZXJuLWJ1cnRnZWwiLCJhdWQiOiJpbnRlcm4tYnVydGdlbCIsImF1dGhfdGltZSI6MTYyOTI3NzM2NCwidXNlcl9pZCI6IkdzUkRGUHBGS2xaME9waExlQjI3V1JYMndiWTIiLCJzdWIiOiJHc1JERlBwRktsWjBPcGhMZUIyN1dSWDJ3YlkyIiwiaWF0IjoxNjI5Mjc3MzY0LCJleHAiOjE2MjkyODA5NjQsImVtYWlsIjoiZ2VvcmdlaGVucnkwNzBAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImdlb3JnZWhlbnJ5MDcwQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.HqnDEYK6WwSkM0blyN1apFjakGMuyQ9wq02eeJrqAwoE8NbVwkK5VGQeaOelkaQ0qer9h5lbDXfWN8UhQ19hIscp8_l_wJ08d-eEWgQTfdLXjkl_Jkkzsl4K02Ess46nsZDmrqu81vo_wYbgoiq4uLlPam5bYqlNJR6jQk_MnXvfZSjaDZZhuUfBo28Q0y5nhsJJyO3hILlLcK2W7S7peIXQabkQWnfrc9kcxZLf4nH1YYz72rx_H_onu98IBAdOUjfIyb6j3APa8eGKXqVLviwyOtcoWo3qH-2KZ42aVoh5TzzyXhC_0ouvZRYenjZIeYTOPltgZo4bJif3XU8WDA"
            // kind: "identitytoolkit#VerifyPasswordResponse"
            // localId: "GsRDFPpFKlZ0OphLeB27WRX2wbY2"
            // refreshToken: "ACzBnChn7sMLO70bcZb853AHXMgIOO27jFGNJqua22JIFZGg7bQBwq0c3GDiRuQFm9742HYfbGXaG8h_WXQvn-VJIJsEE4NKGlcU8p9CI2R4E7mLle1RSVujZhu-CE-94-1oFDyoDG3yaHIKoRFEYQZRKie5MXjne2fQ9O7ACgGBG3Z5eMr-RpxUj0rq0PcwBZXi0h1s3C5AEbfCBlg_z564tXR6GgWRfw"
            const arr = Object.entries(response.data);
            const string_arr = JSON.stringify(arr);
            setuserinfo(arr);
            console.log(arr);
            localStorage.setItem("token", arr[4][1]);
            localStorage.setItem("user_info", string_arr);
            const expireDate = new Date(
              new Date().getTime() + arr[7][1] * 1000
            );
            localStorage.setItem("expireDate", expireDate);
            setlogged_or_not(true);
            //LOGIN SUCCESSFUL
            //AUTO LOGOUT TIMER****************************************************
            timerfunction(arr[7][1] * 1000);
            // setTimeout(() => {
            //   setlogged_or_not(false);
            //   localStorage.removeItem("token");
            //   localStorage.removeItem("user_info");
            //   localStorage.removeItem("expireDate");
            //   props.history.push({
            //     pathname: "/login",
            //   });
            // }, arr[7][1] * 1000);
            //AUTO LOGOUT TIMER****************************************************
            props.history.push({
              pathname: "/registering",
            });
          })
          .catch((e) => {
            try {
              alert(e.response.data.error.errors[0].message);
            } catch (e) {
              console.log(e);
            }
          });
      }
    } else {
      setlogged_or_not(false);
      setuserinfo();
    }
  };
  return (
    <div className="App">
      <Sidebar
        user_info={user_info}
        isloggedFunc={() => isloggedFunc(false)}
        islogged={islogged}
      ></Sidebar>
      <Holder
        user_info={user_info}
        islogged={islogged}
        isloggedFunc={() => isloggedFunc(true)}
      ></Holder>
    </div>
  );
}

export default withRouter(App);
