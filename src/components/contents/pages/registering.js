import React, { useState } from "react";
import "./style.css";
import Clndr from "./registering_components/Calendar/Calendar";
import Explanation from "./registering_components/Explanation/Explanation";
const Registering = () => {
  const [day_click, setdayclick] = useState("");
  const dayclk = (day) => {
    setdayclick(day);
    console.log(day_click);
  };
  return (
    <div className="Header">
      REGISTERING
      <div className="grid-container">
        <Clndr dayclick={dayclk}></Clndr>
        <Explanation day={day_click}></Explanation>
      </div>
    </div>
  );
};

export default Registering;
