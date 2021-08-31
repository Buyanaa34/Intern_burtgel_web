import React from "react";
import burtgel_axios from "../../../../../Axios/burtgel_axios";
import "./style.css";
const Userlist = (props) => {
  const usernames = [];
  const user_id = [];
  //ali hereglegch deer darsan ????????????
  const userclick = (whichnews) => {
    let user_attendance = null;
    burtgel_axios
      .get(
        "udriin_burtgel.json?&auth=" +
          props.user_info[4][1] +
          '&orderBy="userId"&equalTo=' +
          '"' +
          user_id[whichnews] +
          '"'
      )
      .then((response) => {
        try {
          user_attendance = Object.entries(response.data);
          props.userclk(
            usernames[whichnews],
            user_id[whichnews],
            user_attendance
          );
        } catch (e) {
          console.log(e);
        }
      });
  };

  //get allllllll users infooooooo
  try {
    for (let i = 0; i < props.all_users.length; i++) {
      usernames.push(props.all_users[i][1].user_name);
      user_id.push(props.all_users[i][1].user_id);
    }
  } catch (e) {
    console.log("WHILE PUSHING ALL USERS INFO:" + e);
  }

  //create user list structure
  const user_creation = () => {
    let news = [];
    for (let i = 0; i < usernames.length; i++) {
      news.push(
        <div key={i} className="single_news" onClick={() => userclick(i)}>
          <span>{usernames[i]}</span>
        </div>
      );
    }
    return news;
  };
  return (
    <div className="news_list">
      <span>USERS</span>
      {user_creation()}
    </div>
  );
};

export default Userlist;
