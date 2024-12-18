

import React from "react";
import "./NewsPageMainBanner.css";
import newsData from "../../../Data/newsData.json"; 
import banner_noImage from "../../../../assets/banner_noImage.png"
import { useNavigate } from "react-router-dom";

const NewsPageMainBanner = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/news/headlines");
  };


  return (
    <div className="NewsPageMainBannerContainer" >
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {newsData.latestNews.slice(0, 6).map((news, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="carousel-inner">
          {newsData.latestNews.slice(0, 6).map((news, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval={5000}
              onClick={handleClick}
            >
              <img src={news.urlToImage || `${banner_noImage}`} className="d-block w-100" alt={news.title} />
              <div className="carousel-caption d-none d-md-block">
                <h5>{news.title}</h5>
                <p>{news.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default NewsPageMainBanner;
