import { React, useState, useEffect } from "react";
import "./style.css";
import Clndr from "./registering_components/Calendar/Calendar";
import Explanation from "./registering_components/Explanation/Explanation";
import { connect } from "react-redux";
import axios from "../../../Axios/burtgel_axios";
import Spinner from "../spinner/Spinner";
//componentdidmount
const Registering = (props) => {
  const [loading, setloading] = useState(false);
  const [yes_no_default, setyesnoDefault] = useState(""); //tuhain songoson udriin uurinh ni default_yes_no
  const [db_days_info, setdbdays] = useState([]); //db-s irsen udruudiin medeelel
  const [day_click, setdayclick] = useState(""); //songogdson udur
  const [choice, setchoice] = useState(""); //irsen ireegui songolt
  const [note_of_day_db, setnotedaydb] = useState(""); //yg tuhain x udriin note-iin medeelel from db
  const [should_update_day, setupdate_day_or_not] = useState(false); //tuhain udriig update hiih eswel submit hiihiiin ylgag oloh
  const [db_deer_bga_udur, set_db_deer_bga_udur] = useState(""); //yg tuhain x udriin tuhain medeellig ter chiger ni awah
  const [huudas_dahin_unshih, set_huudas_unshih] = useState(false); //tuhain huudas/component-g refresh hiih eseh ?
  useEffect(() => {
    setloading(true);
    axios
      .get(
        "udriin_burtgel.json?&auth=" +
          props.user_info[4][1] +
          '&orderBy="userId"&equalTo=' +
          '"' +
          props.user_info[1][1] +
          '"'
      )
      .then((response) => {
        try {
          setdbdays(Object.entries(response.data));
        } catch (e) {}
        setloading(false);
      });
  }, []);
  //[huudas_dahin_unshih]-aas hamaaruulan useEffect-g ajluulj bn. Zorilgo:calendar deer update hiihed tuhain register component-g dahin refresh hiij data-aa dahin awah shaardlaga garj bn
  useEffect(() => {
    setloading(true);
    axios
      .get(
        "udriin_burtgel.json?&auth=" +
          props.user_info[4][1] +
          '&orderBy="userId"&equalTo=' +
          '"' +
          props.user_info[1][1] +
          '"'
      )
      .then((response) => {
        try {
          setdbdays(Object.entries(response.data));
        } catch (e) {
          console.log(e);
        }
        setloading(false);
        set_huudas_unshih(false);
      });
  }, [huudas_dahin_unshih]);
  const huudasni_trigger_func = (istriggered) => {
    //tuhain huudasiig dahin refresh hiih shaardlagatai eseh
    set_huudas_unshih(istriggered);
  };
  const dayclk = (day, state) => {
    for (let i = 0; i < db_days_info.length; i++) {
      const element = db_days_info[i][1].day;
      if (day === element) {
        setnotedaydb(db_days_info[i][1].note); //tuhain x udriin note-g awj bn
        set_db_deer_bga_udur(db_days_info[i][0]); //ene udur yg db deer bga bol tuhain udriin id-g awj bn
        setupdate_day_or_not(true);
        break;
      }
      if (i === db_days_info.length - 1) {
        setnotedaydb("");
        setupdate_day_or_not(false);
      }
    }
    setyesnoDefault(state); //tuhain [day]-d hargalzah state buyu yes_no-g yes_no_default-d olgoj bn
    setchoice(state);
    setdayclick(day);
  };
  const no_yes = (btnnm) => {
    try {
      if (btnnm === "Y") {
        setchoice("Y");
        document.getElementById(day_click + "day").setAttribute("day_id", "Y");
      } else {
        setchoice("N");
        document.getElementById(day_click + "day").setAttribute("day_id", "N");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="Header">
      <span className="titlez">REGISTERING</span>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div className="grid-container">
          <Clndr
            db_day={db_days_info}
            changed_choice={choice}
            dayclick={dayclk}
          ></Clndr>
          <Explanation
            user_info={props.user_info}
            huudasni_trigger={huudasni_trigger_func}
            db_day={db_days_info}
            should_update={should_update_day}
            note_db={note_of_day_db}
            selected_day_info={db_deer_bga_udur} //calendar deer songogdson udriin db deer bga infog awah
            default_yes_no={yes_no_default}
            yes_or_no={no_yes}
            day={day_click}
          ></Explanation>
        </div>
      )}
    </div>
  );
};

const a = (state) => {
  return {
    ajliin_udruud: state.days,
  };
};
const b = (dispatch) => {
  return {
    add_day_info: (dayinfo) => dispatch({ type: "ADD_DAY" }),
    update_day_info: (dayinfo) => dispatch({ type: "UPDATE_DAY" }),
  };
};

export default connect(a, b)(Registering); //connect(registering()) gej damjuulj bn gesen ug ymuda brg
