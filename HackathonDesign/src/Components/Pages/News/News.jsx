import React from "react";
import "./News.css";
import MiniNavbar from "../../Elements/Atoms/MiniNavbar/MiniNavbar";
import NewsError from "../../Elements/Atoms/NewsError/NewsError";
import PopupDislike from "../../Elements/Atoms/PopupDislike/PopupDislike"
import NewsSearch from "../../Elements/NewsSearch/NewsSearch";
import SearchBtn from "../../../assets/NewsSearchBtn.png"
// import MiniNavbar from "../../Elements/Atoms/MiniNavbar/MiniNavbar";

const News = () => {
  return (
    <div className="NewsContainerMain">
      <div className="NewsContainerTopSection">
      <MiniNavbar/>
      <NewsSearch searchPlaceholder={"Search News"} btnTitle={"Search"}/>
      </div>
      <div className="NewsContainerMainSection">
      helloq
      </div>

    </div>
  );
};

export default News;
