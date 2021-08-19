import { React, useState } from "react";
import Profileform from "./profile_form_folder/form_of_profile/profile_form";
import Password from "./profile_form_folder/change_password/password_change";
import Shadow from "../shadow/Shadow";
import "./style.css";
//import Password from "./profile_form_folder/change_password/password_change";
const Profile = (props) => {
  const [changepasswordclicked, setstate_pass] = useState(false);
  const password_click = () => {
    setstate_pass(true);
  };
  const sbmt_or_cncl = () => {
    setstate_pass(false);
  };
  return (
    <div className="Header">
      <span className="titlez">PROFILE</span>
      <div className="profile_container">
        <Profileform btnclick={password_click}></Profileform>
        {changepasswordclicked ? (
          <div>
            <Shadow show={true}></Shadow>
            <Password submit_or_cancel={sbmt_or_cncl}></Password>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default Profile;
