import React from "react";
import "./style.css";
const Form = (props) => {
  return (
    <input className="form" placeholder={props.txt} type={props.turul}></input>
  );
};

export default Form;
