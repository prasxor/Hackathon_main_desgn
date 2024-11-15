import React from "react";
import "./News.css";
import MiniNavbar from "../../Elements/Atoms/MiniNavbar/MiniNavbar";
import NewsError from "../../Elements/Atoms/NewsError/NewsError";
import PopupDislike from "../../Elements/Atoms/PopupDislike/PopupDislike";

const News = () => {
  return (
    <div className="NewsContainerMain">
      <div className="newsErrorContainer">
        {/* <NewsError/> */}
        <PopupDislike/>
      </div>
    </div>
  );
};

export default News;
