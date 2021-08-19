import React from "react";
import "./style.css";
import Lottie from "react-lottie";
import * as animation_calendar from "../../../../animations/calendar_animation_2.json";
const NewsContent = (props) => {
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
            <p className="txt_of_news">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
              vehicula justo, pretium ornare lectus. Vivamus finibus magna quis
              dapibus condimentum. Integer accumsan faucibus massa, sit amet
              vehicula mi sollicitudin non. Aenean ac ante nec orci rutrum
              luctus. Ut facilisis posuere risus in egestas. Aliquam a ante
              imperdiet, accumsan magna id, dictum mauris. Vivamus vel lorem
              efficitur dolor suscipit gravida eu nec dui. Cras urna augue,
              efficitur non turpis a, viverra semper nibh. Etiam porttitor,
              libero id molestie sagittis, urna odio posuere enim, vel feugiat
              est leo eu arcu. Quisque ac nibh ut lectus faucibus congue eu eget
              quam. Nullam aliquam non augue eget sagittis. Nam sit amet sapien
              nisi. Praesent rhoncus erat a mauris sodales varius. Nullam
              bibendum mi mi, et feugiat massa tincidunt sit amet. Vivamus vitae
              mi vel erat vestibulum egestas ut sed dui.
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
    </div>
  );
};

export default NewsContent;
