import React from "react";
import "./style.css";
const Explanation = (props) => {
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
          <button className="btn" id="y">
            YES
          </button>
          <button className="btn" id="n">
            NO
          </button>
        </span>
      </div>
      <button className="btn" id="sbmt">
        Submit
      </button>
    </div>
  );
};

export default Explanation;
