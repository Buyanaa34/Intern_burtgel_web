import { React, useState, useEffect } from "react";
import "./style.css";
import Lottie from "react-lottie";
import * as animation_calendar from "../../../../animations/56142-festival-calendar.json";
import { withRouter } from "react-router";
import { Fragment } from "react";
const Workattendance = (props) => {
  const [which_month, set_month] = useState(1);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation_calendar.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const lol_array = [
    ["m1", "MAY-24", "MAY-25", "MAY-26", "MAY-27", "MAY-28"],
    ["m1", "MAY-31", "JUN-1", "JUN-2", "JUN-3", "JUN-4"],
    ["m1", "JUN-7", "JUN-8", "JUN-9", "JUN-10", "JUN-11"],
    ["m1", "JUN-14", "JUN-15", "JUN-16", "JUN-17", "JUN-18"],
    ["m1", "JUN-21", "JUN-22", "JUN-23", "JUN-24", "JUN-25"],
    ["m2", "JUN-28", "JUN-29", "JUN-30", "JUL-1", "JUL-2"],
    ["m2", "JUL-5", "JUL-6", "JUL-7", "JUL-8", "JUL-9"],
    ["m2", "JUL-12", "JUL-13", "JUL-14", "JUL-15", "JUL-16"],
    ["m2", "JUL-19", "JUL-20", "JUL-21", "JUL-22", "JUL-23"],
    ["m2", "JUL-26", "JUL-27", "JUL-28", "JUL-29", "JUL-30"],
    ["m3", "AUG-2", "AUG-3", "AUG-4", "AUG-5", "AUG-6"],
    ["m3", "AUG-9", "AUG-10", "AUG-11", "AUG-12", "AUG-13"],
    ["m3", "AUG-16", "AUG-17", "AUG-18", "AUG-19", "AUG-20"],
    ["m3", "AUG-23", "AUG-24", "AUG-25", "AUG-26", "AUG-27"],
    ["m3", "AUG-30", "AUG-31", "SEP-1", "SEP-2", "SEP-3"],
  ];
  const yesnostate_default = [
    ["w0", "unknown", "unknown", "unknown", "unknown", "unknown"],
    ["w1", "unknown", "unknown", "unknown", "unknown", "unknown"],
    ["w2", "unknown", "unknown", "unknown", "unknown", "unknown"],
    ["w3", "unknown", "unknown", "unknown", "unknown", "unknown"],
    ["w4", "unknown", "unknown", "unknown", "unknown", "unknown"],
    ["w5", "unknown", "unknown", "unknown", "unknown", "unknown"],
    ["w6", "unknown", "unknown", "unknown", "unknown", "unknown"],
    ["w7", "unknown", "unknown", "unknown", "unknown", "unknown"],
    ["w8", "unknown", "unknown", "unknown", "unknown", "unknown"],
    ["w9", "unknown", "unknown", "unknown", "unknown", "unknown"],
    ["w10", "unknown", "unknown", "unknown", "unknown", "unknown"],
    ["w11", "unknown", "unknown", "unknown", "unknown", "unknown"],
    ["w12", "unknown", "unknown", "unknown", "unknown", "unknown"],
    ["w13", "unknown", "unknown", "unknown", "unknown", "unknown"],
    ["w14", "unknown", "unknown", "unknown", "unknown", "unknown"],
  ];
  //random udur deeer darahad hiih zuils
  const daynumclick = (day_id) => {
    document.getElementById("note_shower").innerHTML =
      "THE SELECTED DAY HAS NO NOTE";
    document.getElementById("selected_date").innerHTML = day_id;
    try {
      props.clicked_info[2][1].forEach((element) => {
        if (day_id === element[1].day) {
          document.getElementById("note_shower").innerHTML = element[1].note;
          document.getElementById("yesno").className = element[1].yesno_state;
        }
        //= props.clicked_info[1][1]
      });
    } catch {}
  };
  //calendar zurah heseg
  const create_month = () => {
    let classname = "unknown";
    let months = [];
    for (let index = -1; index < 4; index++) {
      for (let i = 1; i < 6; i++) {
        try {
          props.clicked_info[2][1].forEach((element) => {
            if (lol_array[which_month + index][i] === element[1].day) {
              yesnostate_default[which_month + index][i] =
                element[1].yesno_state;
            } else {
              classname = "unknown";
            }
          });
        } catch {}
        months.push(
          <span
            key={lol_array[which_month + index][i]}
            id={lol_array[which_month + index][i]}
            className={yesnostate_default[which_month + index][i]}
            onClick={() => daynumclick(lol_array[which_month + index][i])}
          >
            {lol_array[which_month + index][i]}
          </span>
        );
      }
    }
    return months;
  };
  const btnclick = (btn_name) => {
    //PREF OR NEXT BUTTON
    if (btn_name === "prev") {
      if (which_month > 1) {
        const dummy = which_month - 5;
        set_month(dummy);
      }
    } else {
      if (which_month < 10) {
        const dummy = which_month + 5;
        set_month(dummy);
      }
    }
  };
  let name_to_return = null;
  try {
    name_to_return = props.clicked_info[1][1];
  } catch (e) {
    // console.log(e);
  }
  return (
    <div className="attendance">
      {props.clicked_info.length !== 0 ? (
        <Fragment>
          <span style={{ fontSize: "20px" }}>{name_to_return}</span>
          <button className="btn" id="prev" onClick={() => btnclick("prev")}>
            PREV
          </button>
          <span id="month_and_week" style={{ fontSize: "15px" }}>
            MONTH
          </span>
          <button className="btn" id="nxt" onClick={() => btnclick("nxt")}>
            NEXT
          </button>
          <div className="main_content">
            <div className="month_show">{create_month()}</div>
          </div>
          <span id="selected_date" style={{ fontSize: "25px" }}></span>
          <div className="show_content">
            <div id="yesno" className="Y"></div>
            <div id="note_shower" className="note_shower">
              THE SELECTED DAY HAS NO NOTE
            </div>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <span>OBSERVATION</span>
          <div className="txt_of_news_holder">
            <Lottie options={defaultOptions} width={"45%"}></Lottie>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default withRouter(Workattendance);
