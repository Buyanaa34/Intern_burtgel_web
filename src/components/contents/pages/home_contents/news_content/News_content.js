import { React } from "react";
import "./style.css";
import Lottie from "react-lottie";
import * as animation_calendar from "../../../../animations/calendar_animation_2.json";
import { Fragment } from "react";
import { withRouter } from "react-router";
import axios from "../../../../../Axios/burtgel_axios";
const NewsContent = (props) => {
  //const [isnewsaddclicked, setnewsadd] = useState(false);
  const addnews = (type) => {
    if (type === "add") {
      props.history.push({
        pathname: "/add_news",
      });
    } else {
      if (window.confirm("Are you sure you want to delete this news ?")) {
        axios
          .delete(
            "News/" +
              props.news_id +
              ".json?auth=" +
              JSON.parse(localStorage.getItem("user_info"))[4][1]
          )
          .then((response) => {
            alert("Successfully deleted the news");
            document.getElementById("txt_newz").value = null;
            props.resetdata();
          })
          .catch((e) => {
            alert("While deleting:" + e);
          });
      }
    }
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation_calendar.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="news_content">
      {props.news_info !== undefined ? (
        <div>
          <span>{props.news_info}</span>
          <div className="txt_of_news_holder">
            <p id="txt_newz" className="txt_of_news">
              {props.news_body}
            </p>
          </div>
        </div>
      ) : (
        <div>
          <span>WELCOME</span>
          <div className="txt_of_news_holder">
            <Lottie
              options={defaultOptions}
              height={"50%"}
              width={"70%"}
            ></Lottie>
          </div>
        </div>
      )}
      {localStorage.getItem("isadmin") === "true" ? (
        <Fragment>
          <button id="add" onClick={() => addnews("add")} className="btn">
            Add news
          </button>
          {props.news_info !== undefined ? (
            <Fragment>
              <button
                id="delete"
                onClick={() => addnews("delete")}
                className="btn"
              >
                Delete
              </button>
            </Fragment>
          ) : (
            <Fragment></Fragment>
          )}
        </Fragment>
      ) : (
        <span></span>
      )}
    </div>
  );
};

export default withRouter(NewsContent);
