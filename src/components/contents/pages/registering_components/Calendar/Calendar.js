import React from "react";
import "./style.css";
const Calendar_z = (props) => {
  const months = ["JUN", "JUL", "AUG"];
  const weeks = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  const days = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];
  const daynumclick = (day) => {
    props.dayclick(day);
  };
  return (
    <div className="Clndr">
      <span style={{ fontSize: "30px" }}>CALENDAR</span>
      <div className="Weekz">
        <button className="towch">PREV</button>
        <span>
          MONTH:{months[0]} WEEK:{weeks[1]}
        </span>
        <button className="towch">NEXT</button>
      </div>
      <span style={{ fontSize: "30px" }}>DAYS</span>
      <div className="Dayz">
        <span className="day_name">MON</span>
        <span className="day_name">TUE</span>
        <span className="day_name">WED</span>
        <span className="day_name">THU</span>
        <span className="day_name">FRI</span>
        <span id="day_num_1" onClick={() => daynumclick(1)} className="day_num">
          1
        </span>
        <span id="day_num_1" onClick={() => daynumclick(2)} className="day_num">
          2
        </span>
        <span id="day_num_1" onClick={() => daynumclick(3)} className="day_num">
          3
        </span>
        <span id="day_num_1" onClick={() => daynumclick(4)} className="day_num">
          4
        </span>
        <span id="day_num_1" onClick={() => daynumclick(5)} className="day_num">
          5
        </span>
        <span className="status" id="Y">
          Y
        </span>
        <span className="status" id="Y">
          Y
        </span>
        <span className="status" id="N">
          N
        </span>
        <span className="status" id="Y">
          Y
        </span>
        <span className="status" id="N">
          N
        </span>
      </div>
      <div></div>
    </div>
  );
};

export default Calendar_z;
