import { React, useState, useEffect } from "react";
import "./style.css";
const Calendar_z = (props) => {
  // const months = ["JUN", "JUL", "AUG"];
  // const weeks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const [which_week, set_Week] = useState(1);
  const [daragdsan_udur, setdaragdsnudur] = useState("");
  if (props.changed_choice !== "") {
    // console.log(props.changed_choice);
    try {
      // console.log(daragdsan_udur + "day");
      document
        .getElementById(daragdsan_udur + "day")
        .setAttribute("day_id", props.changed_choice);
    } catch (e) {}
  }
  const lol_array = [
    ["w0", "MAY-24", "MAY-25", "MAY-26", "MAY-27", "MAY-28"],
    ["w1", "MAY-31", "JUN-1", "JUN-2", "JUN-3", "JUN-4"],
    ["w2", "JUN-7", "JUN-8", "JUN-9", "JUN-10", "JUN-11"],
    ["w3", "JUN-14", "JUN-15", "JUN-16", "JUN-17", "JUN-18"],
    ["w4", "JUN-21", "JUN-22", "JUN-23", "JUN-24", "JUN-25"],
    ["w5", "JUN-28", "JUN-29", "JUN-30", "JUL-1", "JUL-2"],
    ["w6", "JUL-5", "JUL-6", "JUL-7", "JUL-8", "JUL-9"],
    ["w7", "JUL-12", "JUL-13", "JUL-14", "JUL-15", "JUL-16"],
    ["w8", "JUL-19", "JUL-20", "JUL-21", "JUL-22", "JUL-23"],
    ["w9", "JUL-26", "JUL-27", "JUL-28", "JUL-29", "JUL-30"],
    ["w10", "AUG-2", "AUG-3", "AUG-4", "AUG-5", "AUG-6"],
    ["w11", "AUG-9", "AUG-10", "AUG-11", "AUG-12", "AUG-13"],
    ["w12", "AUG-16", "AUG-17", "AUG-18", "AUG-19", "AUG-20"],
    ["w13", "AUG-23", "AUG-24", "AUG-25", "AUG-26", "AUG-27"],
    ["w14", "AUG-30", "AUG-31", "SEP-1", "SEP-2", "SEP-3"],
  ];
  const yesnostate_default = [
    ["w0", "N", "N", "N", "N", "N"],
    ["w1", "N", "N", "N", "N", "N"],
    ["w2", "N", "N", "N", "N", "N"],
    ["w3", "N", "N", "N", "N", "N"],
    ["w4", "N", "N", "N", "N", "N"],
    ["w5", "N", "N", "N", "N", "N"],
    ["w6", "N", "N", "N", "N", "N"],
    ["w7", "N", "N", "N", "N", "N"],
    ["w8", "N", "N", "N", "N", "N"],
    ["w9", "N", "N", "N", "N", "N"],
    ["w10", "N", "N", "N", "N", "N"],
    ["w11", "N", "N", "N", "N", "N"],
    ["w12", "N", "N", "N", "N", "N"],
    ["w13", "N", "N", "N", "N", "N"],
    ["w14", "N", "N", "N", "N", "N"],
  ];

  useEffect(() => {
    props.db_day.forEach((element) => {
      try {
        document
          .getElementById(element[1].day + "day")
          .setAttribute("day_id", element[1].yesno_state);
      } catch (e) {}
    });
  });

  const daynumclick = (day) => {
    setdaragdsnudur(day);
    //UDUR DEER DARAH UED
    const state_yes_no = document
      .getElementById(day + "day")
      .getAttribute("day_id");
    props.dayclick(day, state_yes_no);
  };

  const btnclick = (btn_name) => {
    //PREF OR NEXT BUTTON
    if (btn_name === "prev") {
      if (which_week !== 1) {
        const dummy = which_week - 1;
        set_Week(dummy);
      }
    } else {
      if (which_week !== 15) {
        const dummy = which_week + 1;
        set_Week(dummy);
      }
    }
  };
  //Udruudiig haruulah heseg
  const day_num_creation = () => {
    let day_num_content = [];
    for (let i = 1; i < 6; i++) {
      day_num_content.push(
        <span
          key={lol_array[which_week - 1][i]}
          id={lol_array[which_week - 1][i]}
          onClick={() => daynumclick(lol_array[which_week - 1][i])}
          className="day_num"
        >
          {lol_array[which_week - 1][i]}
        </span>
      );
    }
    return day_num_content;
  };
  //Red Green row-g haruulah heseg
  // const status_creation = () => {
  //   const dummy_status = ["Y", "Y", "N", "Y", "N"];
  //   let status_content = [];
  //   for (let i = 1; i < 6; i++) {
  //     status_content.push(
  //       <span
  //         day_id={dummy_status[i - 1]}
  //         key={lol_array[which_week - 1][i] + "day"}
  //         className="status"
  //         id={lol_array[which_week - 1][i] + "day"}
  //       ></span>
  //     );
  //   }
  //   return status_content;
  // };
  const dummy_yesno = () => {
    let yesno_content = [];
    for (let i = 1; i < 6; i++) {
      yesno_content.push(
        <span
          day_id={yesnostate_default[which_week - 1][i]}
          key={lol_array[which_week - 1][i] + "day"}
          className="status"
          id={lol_array[which_week - 1][i] + "day"}
        ></span>
      );
    }
    return yesno_content;
  };
  //Monday to Sunday haruulah heseg
  const mon_to_sun_creation = () => {
    const weekz = ["MON", "TUE", "WED", "THU", "FRI"];
    let mon_to_sun_content = [];
    for (let i = 0; i < 5; i++) {
      mon_to_sun_content.push(
        <span key={i} className="day_name">
          {weekz[i]}
        </span>
      );
    }
    return mon_to_sun_content;
  };
  return (
    <div className="Clndr">
      <span style={{ fontSize: "30px" }}>CALENDAR</span>
      <div className="Weekz">
        <button className="btn" id="prev" onClick={() => btnclick("prev")}>
          PREV
        </button>
        <span id="month_and_week" style={{ fontSize: "15px" }}>
          WEEK:{which_week}
        </span>
        <button className="btn" id="nxt" onClick={() => btnclick("next")}>
          NEXT
        </button>
      </div>
      <span style={{ fontSize: "30px" }}>DAYS</span>
      <div className="Dayz">
        {mon_to_sun_creation()}
        {/* ************************************************************DAYS************************************************************ */}
        {day_num_creation()}
        {/* ************************************************************STATUS************************************************************ */}
        {dummy_yesno()}
      </div>
      <div></div>
    </div>
  );
};
export default Calendar_z;
