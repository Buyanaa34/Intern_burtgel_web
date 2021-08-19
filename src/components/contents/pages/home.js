import { React, useState } from "react";
import "./style.css";
import NewsContent from "./home_contents/news_content/News_content";
import NewsList from "./home_contents/news_list/News_list";
const Home = (props) => {
  const [news, setnews] = useState();
  const news_onclick = (clicked_news) => {
    setnews(clicked_news);
  };
  return (
    <div className="Header">
      <span className="titlez">HOME</span>
      <div className="list_and_content">
        <NewsList newsclk={news_onclick}></NewsList>
        <NewsContent news_info={news}></NewsContent>
      </div>
    </div>
  );
};

export default Home;
