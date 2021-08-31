import React from "react";
import "./style.css";
import Form from "../form/Form";
import { withRouter } from "react-router";
import burtgel_axios from "../../../Axios/burtgel_axios";
const Add_news = (props) => {
  const btnclick = (type) => {
    if (type === "cancel") {
      props.history.push({
        pathname: "/home",
      });
    } else {
      //console.log(document.getElementById("garchig").value);
      if (
        document.getElementById("garchig").value === "" ||
        document.getElementById("bodyy").value === ""
      ) {
        alert("Fill all the boxes ");
      } else {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + "/" + mm + "/" + dd;
        //console.log(today);
        const news_info = {
          header: document.getElementById("garchig").value,
          body: document.getElementById("bodyy").value,
          published_date: today,
        };
        burtgel_axios
          .post("/News.json?auth=" + props.user_info[4][1], news_info)
          .then((respone) => {
            alert("Added successfully");
            props.history.push({
              pathname: "/home",
            });
          })

          .catch((e) => {
            alert(e);
            console.log(e);
          });
      }
    }
  };
  return (
    <div className="Header">
      <span className="titlez">ADD NEWS</span>
      <div className="news_add_holder">
        <Form id="garchig" txt="Header of the news" turul="text"></Form>
        <div>
          <textarea
            id="bodyy"
            placeholder="Type the essential informations about the news"
            className="ih_bie"
          ></textarea>
        </div>
        <button onClick={() => btnclick("submit")} id="submit" className="btn">
          Submit
        </button>
        <button onClick={() => btnclick("cancel")} id="cancel" className="btn">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default withRouter(Add_news);
