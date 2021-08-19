import burtgel_axios from "../../../../../Axios/burtgel_axios";
import { React, useState } from "react";
import "./style.css";
import Spinner from "../../../spinner/Spinner";
// import firebaseDb from "../../../..//../firebase/firebase";

const Explanation = (props) => {
  const [loading, setloading] = useState(false); //db-s ugugdul unshij bga eseh
  const [result_of_btn, setresultofbtn] = useState("");
  const btnclick = (whichbtn) => {
    setresultofbtn(whichbtn);
    props.yes_or_no(whichbtn);
  };

  const submt = () => {
    if (props.day !== "") {
      setloading(true);
      let yesno = "";
      if (result_of_btn === "") {
        yesno = props.default_yes_no;
      } else {
        yesno = result_of_btn;
      }
      const burtgel = {
        userId: props.user_info[1][1],
        day: props.day,
        note: document.getElementById("tailbar_txt_area").value,
        yesno_state: yesno,
      };
      if (props.should_update) {
        //update the note
        burtgel_axios
          .put(
            "udriin_burtgel/" +
              props.selected_day_info +
              ".json?auth=" +
              props.user_info[4][1],
            burtgel
          )
          .then((respones) => {
            alert("Successfully updated note and form of the day");
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        //save the note
        burtgel_axios
          .post("/udriin_burtgel.json?auth=" + props.user_info[4][1], burtgel)
          .then((respone) => {
            alert("Successfully saved note and form of the day");
          })
          .catch((e) => {
            console.log(e);
          });
      }
      props.huudasni_trigger(true);
      setloading(false);
    } else {
      alert("Please choose which day you wanted to change ");
    }
  };
  // console.log(props.note_db);
  return (
    <div className="Explanation">
      <span>EXPLANATION</span>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        <div>
          <div>
            <span style={{ fontSize: "20px" }}>
              NOTE OF THE DAY: {props.day}
            </span>
          </div>
          <div className="tailbar">
            <textarea
              placeholder="You can add some notes to your selected day"
              id="tailbar_txt_area"
              defaultValue={props.note_db}
            />
          </div>
          <div className="burtgel">
            <span>
              Came?:
              <button className="btn" onClick={() => btnclick("Y")} id="y">
                YES
              </button>
              <button className="btn" onClick={() => btnclick("N")} id="n">
                NO
              </button>
            </span>
          </div>
          <button className="btn" id="sbmt" onClick={submt}>
            {props.should_update ? "Update" : "Submit"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Explanation;
