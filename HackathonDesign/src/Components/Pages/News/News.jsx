import React from "react";
import "./News.css";
import MiniNavbar from "../../Elements/Atoms/MiniNavbar/MiniNavbar";
import NewsSearch from "../../Elements/NewsSearch/NewsSearch";
import NewsPageMainBanner from "../../Elements/NewsPageCompoent/NewsPageMainBanner/NewsPageMainBanner";
import NewsPageCards from "../../Elements/Atoms/Cards/NewsPageCards/NewsPageCards";
import NewsVerticalCardsCollection from "../../Elements/NewsPageCompoent/NewVerticalCardsCollection/NewsVerticalCardsCollection";

const News = () => {
  return (
    <div className="NewsContainerMain">
      <div className="NewsContainerTopSection">
        <MiniNavbar />
        <NewsSearch searchPlaceholder={"Search News"} btnTitle={"Search"} />
      </div>
      <div className="NewsContainerMainSection">
        <div className="NewsMainBanner">
          <NewsPageMainBanner />
        </div>
        <div className="LatestNewsSection">
          <div className="LatestNewsSectionTitle">
            <h2>Latest News</h2>
          </div>
          <div className="LatestNewsSectionMainCards">
            <NewsPageCards />
            <NewsPageCards />
            <NewsPageCards />
            <NewsPageCards />
            <NewsPageCards />
            <NewsPageCards />
          </div>
        </div>
        <div className="SectionsContainer">
          <div className="LatestNewsSectionTitle">
            <h2>Sections</h2>
          </div>
          <div className="NewsSectionBottom">
            <NewsVerticalCardsCollection title={"Technology"} />
            <NewsVerticalCardsCollection title={"Education"} />
            <NewsVerticalCardsCollection title={"Sports"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
