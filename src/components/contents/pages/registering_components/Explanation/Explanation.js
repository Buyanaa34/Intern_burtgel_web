import React from "react";
import "./style.css";
const Explanation = (props) => {
  const btnclick = (whichbtn) => {
    props.yes_or_no(whichbtn);
  };
  const sumbit = () => {
    if (props.day !== "") {
      console.log(props.default_yes_no);
      alert(
        "Successfully saved note and form of the day:" +
          props.day +
          props.default_yes_no
      );
    } else {
      alert("CHOOSE THE DAY FIRST !");
    }
  };
  return (
    <div className="Explanation">
      <span>EXPLANATION</span>
      <br />
      <div>
        <span style={{ fontSize: "20px" }}>NOTE OF THE DAY: {props.day}</span>
      </div>
      <div className="tailbar">
        <textarea></textarea>
      </div>
      <div className="burtgel">
        <span>
          Came?:
          <button className="btn" onClick={() => btnclick("y")} id="y">
            YES
          </button>
          <button className="btn" onClick={() => btnclick("n")} id="n">
            NO
          </button>
        </span>
      </div>
      <button className="btn" id="sbmt" onClick={sumbit}>
        Submit
      </button>
    </div>
  );
};

export default Explanation;
