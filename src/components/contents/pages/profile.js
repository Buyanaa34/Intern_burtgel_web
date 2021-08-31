import { React } from "react";
import Profileform from "./profile_form_folder/form_of_profile/profile_form";
import "./style.css";
//import Password from "./profile_form_folder/change_password/password_change";
const Profile = (props) => {
  const isloggedin = () => props.isloggedin();
  return (
    <div className="Header">
      <span className="titlez">PROFILE</span>
      <div className="profile_container">
        <Profileform
          isloggedin={isloggedin}
          user_info={props.user_info}
        ></Profileform>
        {/* {changepasswordclicked ? (
          <div>
            <Shadow show={true}></Shadow>
            <Password submit_or_cancel={sbmt_or_cncl}></Password>
          </div>
        ) : (
          <div />
        )} */}
      </div>
    </div>
  );
};

export default Profile;
