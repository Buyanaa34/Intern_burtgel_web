import React from "react";
import "./style.css";
const Newslist = (props) => {
  const dummy_news = ["NEWS#1", "NEWS#2", "NEWS#3", "NEWS#4", "NEWS#5"];
  const newsclick = (whichnews) => {
    props.newsclk(dummy_news[whichnews]);
  };
  const news_creation = () => {
    let news = [];
    for (let i = 0; i < 5; i++) {
      news.push(
        <div key={i} className="single_news" onClick={() => newsclick(i)}>
          <span>{dummy_news[i]}</span>
          <div style={{ fontSize: "10px" }}>2021-08-13</div>
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
