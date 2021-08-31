import { React, useState, useEffect } from "react";
import Userlist from "./observation_content/Userlist/Userlist";
import Workattendance from "./observation_content/Workattendance/Workattendance";
import burtgel_axios from "../../../Axios/burtgel_axios";
const Observation = (props) => {
  //user_info_array[0]=>allusers
  //user_info_array[1]=>clicked_user_id
  //user_info_array[2]=>clicked_user_name
  const [user_info_array, set_user_info_array] = useState([]);
  const [allusers, setallusers] = useState();
  useEffect(() => {
    burtgel_axios
      .get("AllUsers.json?&auth=" + props.user_info[4][1])
      .then((response) => {
        setallusers(Object.entries(response.data));
      })
      .catch((e) => {
        console.log("WHILE RECIEVING ALL USERS INFO:" + e);
      });
  }, []);

  const userclk = (name, id, attendance_info) => {
    const dummy = [
      ["id", id],
      ["name", name],
      ["info", attendance_info],
    ];
    // console.log(dummy[2][1]);
    set_user_info_array(dummy);
  };
  return (
    <div className="Header">
      <span className="titlez">OBSERVATION</span>
      <div className="list_and_content">
        <Userlist
          user_info={props.user_info}
          userclk={userclk}
          all_users={allusers}
        ></Userlist>
        <Workattendance
          user_info={props.user_info} //login hiisen hereglgechin info
          clicked_info={user_info_array}
        ></Workattendance>
      </div>
    </div>
  );
};

export default Observation;
