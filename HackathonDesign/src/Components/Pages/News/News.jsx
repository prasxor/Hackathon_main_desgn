import React from "react";
import "./News.css";
import MiniNavbar from "../../Elements/Atoms/MiniNavbar/MiniNavbar";
import NewsError from "../../Elements/Atoms/NewsError/NewsError";
import PopupDislike from "../../Elements/Atoms/PopupDislike/PopupDislike"
import NewsSearch from "../../Elements/NewsSearch/NewsSearch";
import SearchBtn from "../../../assets/NewsSearchBtn.png"
import NewsPageMainBanner from "../../Elements/NewsPageCompoent/NewsPageMainBanner/NewsPageMainBanner";
import NewsPageCards from "../../Elements/Atoms/Cards/NewsPageCards/NewsPageCards";

const News = () => {
  return (
    <div className="NewsContainerMain">
      <div className="NewsContainerTopSection">
      <MiniNavbar/>
      <NewsSearch searchPlaceholder={"Search News"} btnTitle={"Search"}/>
      </div>
      <div className="NewsContainerMainSection">
      <div className="NewsMainBanner">
        <NewsPageMainBanner/>
      </div>
      <div className="LatestNewsSection">
              <NewsPageCards/>  
      </div>
      </div>

    </div>
  );
};

export default News;
