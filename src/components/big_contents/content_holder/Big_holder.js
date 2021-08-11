import React from "react";
import Sidebar from "../sidebar/Sidebar";
import Holder from "./holder/Holder";
import "./style.css";
const Big_Holder = () => {
  return (
    <div className="Big_holder">
      <Sidebar></Sidebar>
      <Holder></Holder>
    </div>
  );
};

export default Big_Holder;
