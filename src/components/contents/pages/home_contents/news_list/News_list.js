import React from "react";
import "./style.css";
const Newslist = (props) => {
  const dummy_news = [];
  const news_dates = [];
  const news_contents = [];
  const news_id = [];
  try {
    for (let i = 0; i < props.db_news_info.length; i++) {
      const element = props.db_news_info[i][1].header;
      dummy_news.push(element);
      news_id.push(props.db_news_info[i][0]);
      news_contents.push(props.db_news_info[i][1].body);
      news_dates.push(props.db_news_info[i][1].published_date);
    }
  } catch (e) {
    console.log("WHILE PUSHING NEWS INFO:" + e);
  }

  const newsclick = (whichnews) => {
    props.newsclk(
      dummy_news[whichnews],
      news_contents[whichnews],
      news_id[whichnews]
    );
  };
  const news_creation = () => {
    let news = [];
    for (let i = 0; i < dummy_news.length; i++) {
      news.push(
        <div key={i} className="single_news" onClick={() => newsclick(i)}>
          <span>{dummy_news[i]}</span>
          <div style={{ fontSize: "10px" }}>{news_dates[i]}</div>
        </div>
      );
    }
    return news;
  };
  return (
    <div className="news_list">
      <span>NEWS</span>
      {news_creation()}
    </div>
  );
};

export default Newslist;
