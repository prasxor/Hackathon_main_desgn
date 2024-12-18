import React from "react";
import "./NewsPageCards.css";
import { useNavigate } from "react-router-dom";
import NoImage from "../../../../../assets/Cards_noImage.png";
// import Image from "../../../../../assets/banner-sizes.jpg";

const NewsPageCards = ({ news }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/final-news", { state: { news } });
  };
  return (
    <div className="NewsPageCardsSubContainer" onClick={handleClick}>
      <div className="NewsPageSubContainerTop">
        <img src={news.urlToImage || `${NoImage}`} alt={news.title} />
      </div>
      <div className="NewsPageSubContainerBottom">
        <p>{news.title}</p>
      </div>
    </div>
  );
};

export default NewsPageCards;
