import React, { useState } from "react";
import "./style.css";
import Clndr from "./registering_components/Calendar/Calendar";
import Explanation from "./registering_components/Explanation/Explanation";
const Registering = () => {
  const [yes_no_default, setyesnodefault] = useState(""); //tuhain songoson udriin uurinh ni default_yes_no
  const [day_click, setdayclick] = useState(""); //songogdson udur
  const [choice, setchoice] = useState(""); //irsen ireegui songolt
  const dayclk = (day, state) => {
    setyesnodefault(state); //tuhain [day]-d hargalzah state buyu yes_no-g yes_no_default-d olgoj bn
    setdayclick(day);
  };
  const no_yes = (btnnm) => {
    if (btnnm === "y") {
      try {
        document.getElementById(day_click + "day").setAttribute("day_id", "Y");
        setchoice("Y");
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        document.getElementById(day_click + "day").setAttribute("day_id", "N");
        setchoice("N");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="Header">
      REGISTERING
      <div className="grid-container">
        <Clndr changed_choice={choice} dayclick={dayclk}></Clndr>
        <Explanation
          default_yes_no={yes_no_default}
          yes_or_no={no_yes}
          day={day_click}
        ></Explanation>
      </div>
    </div>
  );
};

export default Registering;
