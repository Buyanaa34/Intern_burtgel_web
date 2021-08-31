import { React } from "react";
import Form from "../../../form/Form";
import "./style.css";
import * as Profile_animation from "../../../../animations/50124-user-profile.json";
import Lottie from "react-lottie";
import axios from "axios";
import burtgel_axios from "../../../../../Axios/burtgel_axios";
const profile_form = (props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Profile_animation.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const submit_click = () => {
    let Firstname = document.getElementById("Firstname").value;
    let email = document.getElementById("Gmail").value;
    if (email === "" && Firstname === "") {
      alert("Please change atleast one attribute");
    } else {
      if (Firstname === "") {
        Firstname = props.user_info[3][1];
      }
      if (email === "") {
        email = props.user_info[2][1];
      }
      const data = {
        idToken: props.user_info[4][1],
        displayName: Firstname,
        email: email,
        photoUrl: null,
        deleteAttribute: null,
        returnSecureToken: false,
      };
      const update_all_user = {
        user_name: Firstname,
        user_id: props.user_info[1][1],
      };
      //tuhain burtgeltei hereglegchin username-g allusers-iin username-tei tulgaj bn
      // console.log(
      //   "AllUsers/" + massiv[0][0] + ".json?auth=" + arr[4][1],
      //   "AllUsers/" +
      //     localStorage.getItem("all_items_id") +
      //     ".json?auth=" +
      //     localStorage.getItem("token")
      // );
      burtgel_axios
        .put(
          "AllUsers/" +
            localStorage.getItem("all_items_id") +
            ".json?auth=" +
            localStorage.getItem("token"),
          update_all_user
        )
        .then()
        .catch((e) => {
          console.log("WHILE UPDATING ALL USER:" + e);
        });
      axios
        .post(
          "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBMK0jKUrEZ0JBwlYowSdLWCt0as6_Y5xo",
          data
        )
        .then((response) => {
          localStorage.removeItem("user_info");
          localStorage.removeItem("token");
          localStorage.removeItem("isadmin");
          localStorage.removeItem("expireDate");
          localStorage.removeItem("all_items_id");
          props.isloggedin();
          alert("Successfully changed your information");
          props.history.push({
            pathname: "/login",
          });
        })
        .catch((e) => {
          console.log(e);
        });

      document.getElementById("Firstname").value = "";
      document.getElementById("Gmail").value = "";
    }
  };
  return (
    <div className="Form_holder">
      <div className="form_grid_container">
        <div className="right_container">
          <div>
            <Form
              id="Firstname"
              txt={props.user_info[3][1]}
              turul="text"
            ></Form>
          </div>
          <div>
            <Form id="Gmail" txt={props.user_info[2][1]} turul="text"></Form>
          </div>
          <div className="button_container">
            <button id="Submit" className="btn" onClick={submit_click}>
              Submit
            </button>
            {/* <button id="Change_password" className="btn" onClick={btn_click}>
              Change Password
            </button> */}
          </div>
        </div>

        <Lottie options={defaultOptions} width={"68%"}></Lottie>
      </div>
    </div>
  );
};

export default profile_form;
