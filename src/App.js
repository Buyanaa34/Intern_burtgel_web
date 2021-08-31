import "./App.css";
import { useState, useEffect } from "react";
import { withRouter } from "react-router";
//import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/big_contents/sidebar/Sidebar";
import Holder from "./components/big_contents/content_holder/holder/Holder";
import axios from "./Axios/burtgel_axios";
function App(props) {
  const [islogged, setlogged_or_not] = useState(false);
  const [user_info, setuserinfo] = useState();
  const [isadmin, setadmin] = useState(false);
  //AUTO LOGIN*********************************************************
  useEffect(() => {
    const token = localStorage.getItem("token");
    const user_info_local = JSON.parse(localStorage.getItem("user_info"));
    const expiredate = new Date(localStorage.getItem("expireDate"));
    if (token) {
      // herwee auto login hiiheed tanii expire date odoogiin date-s hetersen baiwal ta dahin login hiih shaardlagatai
      if (expiredate > new Date()) {
        //hetreegui ued
        setlogged_or_not(true);
        setuserinfo(user_info_local);
        //expire date-ee shinechlen ugch bn
        timerfunction(expiredate.getTime() - new Date().getTime());
      } else {
        //hetersen ued
        setlogged_or_not(false);
        localStorage.removeItem("token");
        localStorage.removeItem("user_info");
        localStorage.removeItem("expireDate");
        localStorage.removeItem("isadmin");
        localStorage.removeItem("all_items_id");
        props.history.push({
          pathname: "/login",
        });
      }
    }
  }, []);
  const timerfunction = (ms) => {
    setTimeout(() => {
      console.log(ms + "on function");
      setlogged_or_not(false);
      localStorage.removeItem("token");
      localStorage.removeItem("user_info");
      localStorage.removeItem("expireDate");
      localStorage.removeItem("isadmin");
      localStorage.removeItem("all_items_id");
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
            const arr = Object.entries(response.data);
            const string_arr = JSON.stringify(arr);
            //tuhain hereglegch admin erhtei esehig shalgaj bn
            axios
              .get(
                "Admins.json?&auth=" +
                  arr[4][1] +
                  '&orderBy="userId"&equalTo=' +
                  '"' +
                  arr[1][1] +
                  '"'
              )
              .then((response) => {
                //admin mun bol
                const massiv = Object.entries(response.data);
                console.log("IS ADMIN OR NOT:" + massiv[0][0]); //herew admin bish bol error zaana
                localStorage.setItem("isadmin", true);
                setadmin(true);
              })
              .catch((e) => {
                //admin bish bol
                //login hiisen hereglegchiin id-g all-user-d burtgesen esehig shalgah
                axios
                  .get(
                    "AllUsers.json?&auth=" +
                      arr[4][1] +
                      '&orderBy="user_id"&equalTo=' +
                      '"' +
                      arr[1][1] +
                      '"'
                  )
                  .then((response) => {
                    console.log("response:" + response.data);
                    //all-users-d burtgeltei bol
                    const massiv = Object.entries(response.data);
                    console.log(
                      "CHECK IF THERE IS THIS USER OR NOT:" + massiv[0][0]
                    ); //herew burtgeltei bish bol error zaana
                    const update_all_user = {
                      user_name: arr[3][1],
                      user_id: arr[1][1],
                    };

                    //tuhain burtgeltei hereglegchin username-g allusers-iin username-tei tulgaj bn
                    axios
                      .put(
                        "AllUsers/" + massiv[0][0] + ".json?auth=" + arr[4][1],
                        update_all_user
                      )
                      .then(() => {
                        console.log(massiv[0][0]);
                        localStorage.setItem("all_items_id", massiv[0][0]);
                      })
                      .catch((e) => {
                        console.log("WHILE UPDATING ALLUSER:" + e);
                      });
                  })
                  .catch((e) => {
                    console.log("alluser-d burtgelgui bn" + e);
                    //all-users-d burtgelgui bol
                    //login hiisen hereglegchiin id-g all-user-id geh node-d hiij bn
                    const user_id = {
                      user_id: arr[1][1],
                      user_name: arr[3][1],
                    };
                    axios
                      .post("/AllUsers.json?auth=" + arr[4][1], user_id)
                      .then((respone) => {})
                      .catch((e) => {
                        console.log(e);
                      });
                  });
                localStorage.setItem("isadmin", false);
                console.log("IS ADMIN OR NOT:" + e);
                setadmin(false);
              });
            setuserinfo(arr);
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
            // 0: (2) ["kind", "identitytoolkit#VerifyPasswordResponse"]
            // 1: (2) ["localId", "WyanLiVrwJXb2jtYPdXVavoMHv22"]
            // 2: (2) ["email", "georgehenry070@gmail.com"]
            // 3: (2) ["displayName", "Buyankhishig"]
            // 4: (2) ["idToken", "eyJhbGciOiJSUzI1NiIsImtpZCI6IjM2NGU4NTQ1NzI5OWQ5Nz…Bm4NBpMzUjFZ64yaIuC5-JE8N74ciVrotZLeIiWb3G3s_DV3Q"]
            // 5: (2) ["registered", true]
            // 6: (2) ["refreshToken", "ACzBnCg6jwdpk6sw2f5PizXZnJWLsaQqRkMvB5Eq4MRQhsit2K…YGEAiSI1hr3VYmJX81Ltutfs6DDQUVJvfxeRBOx3lQ9DbBnmM"]
            //AUTO LOGOUT TIMER****************************************************
            props.history.push({
              pathname: "/home",
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
  const isloggedin = () => {
    setlogged_or_not(false);
  };
  return (
    <div className="App">
      <Sidebar
        user_info={user_info}
        isloggedFunc={() => isloggedFunc(false)}
        islogged={islogged}
        isadmin={isadmin}
      ></Sidebar>
      <Holder
        isadmin={isadmin}
        isloggedin={isloggedin}
        user_info={user_info}
        islogged={islogged} //profile info-goo uurchluh ued
        isloggedFunc={() => isloggedFunc(true)}
      ></Holder>
    </div>
  );
}

export default withRouter(App);
