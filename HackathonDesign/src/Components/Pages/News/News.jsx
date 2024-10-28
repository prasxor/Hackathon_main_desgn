import React from "react";
import "./News.css";
import MiniNavbar from "../../Elements/Atoms/MiniNavbar/MiniNavbar";
import NewsError from "../../Elements/Atoms/NewsError/NewsError";

const News = () => {
  return (
    <div className="NewsContainerMain">
      {/* <div className="MiniNavbarContainerMain">
        <MiniNavbar />
      </div> */}
      <div className="newsErrorContainer">
        <NewsError/>
      </div>
    </div>
  );
};

export default News;
