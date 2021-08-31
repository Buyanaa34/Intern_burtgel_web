import { React, useState, useEffect } from "react";
import "./style.css";
import NewsContent from "./home_contents/news_content/News_content";
import NewsList from "./home_contents/news_list/News_list";
import { Fragment } from "react";
import axios from "../../../Axios/burtgel_axios";
import Spinner from "../spinner/Spinner";
const Home = (props) => {
  const [news, setnews] = useState();
  const [clicked_news_content, set_clicked_news_content] = useState();
  const [clicked_news_id, set_clicked_news_id] = useState();
  const [loading, setloading] = useState(false);
  const [db_news_info, db_setnews_info] = useState();
  const [should_reset, set_should_reset] = useState(false);
  useEffect(() => {
    setloading(true);
    axios
      .get("News.json")
      .then((response) => {
        db_setnews_info(Object.entries(response.data));
        setloading(false);
      })
      .catch((e) => {
        console.log(e);
        setloading(false);
      });
    set_clicked_news_content();
    set_clicked_news_id();
    setnews();
  }, [should_reset]);
  useEffect(() => {
    setloading(true);
    axios
      .get("News.json")
      .then((response) => {
        db_setnews_info(Object.entries(response.data));
        setloading(false);
      })
      .catch((e) => {
        console.log(e);
        setloading(false);
      });
  }, []);

  const news_onclick = (
    clicked_news,
    clicked_news_content,
    clicked_news_id
  ) => {
    setnews(clicked_news);
    set_clicked_news_id(clicked_news_id);
    set_clicked_news_content(clicked_news_content);
  };
  const resetdata_origin = () => {
    set_should_reset(true);
  };
  //console.log(localStorage.getItem("isadmin"));
  return (
    <div className="Header">
      {localStorage.getItem("isadmin") === "true" ? (
        <Fragment>
          <span className="titlez">HOME/ADMIN/</span>
          {loading ? (
            <Spinner></Spinner>
          ) : (
            <div className="list_and_content">
              <NewsList
                db_news_info={db_news_info}
                newsclk={news_onclick}
              ></NewsList>
              <NewsContent
                resetdata={resetdata_origin}
                news_info={news}
                news_id={clicked_news_id}
                news_body={clicked_news_content}
              ></NewsContent>
            </div>
          )}
        </Fragment>
      ) : (
        <Fragment>
          <span className="titlez">HOME</span>
          {loading ? (
            <Spinner></Spinner>
          ) : (
            <div className="list_and_content">
              <NewsList
                db_news_info={db_news_info}
                newsclk={news_onclick}
              ></NewsList>
              <NewsContent
                resetdata={resetdata_origin}
                news_info={news}
                news_id={clicked_news_id}
                news_body={clicked_news_content}
              ></NewsContent>
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
};

export default Home;
