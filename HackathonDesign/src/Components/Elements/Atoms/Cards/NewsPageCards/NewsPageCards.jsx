import React from "react";
import "./NewsPageCards.css";
import NoImage from "../../../../../assets/Cards_noImage.png"
// import Image from "../../../../../assets/banner-sizes.jpg";

const NewsPageCards = ({news}) => {
  return (
    <div className="NewsPageCardsSubContainer">
      <div className="NewsPageSubContainerTop">
        <img src={news.urlToImage || `${NoImage}` } alt={news.title} />
      </div>
      <div className="NewsPageSubContainerBottom">
        <p>
          {news.title}
        </p>
      </div>
    </div>
  );
};

export default NewsPageCards;
