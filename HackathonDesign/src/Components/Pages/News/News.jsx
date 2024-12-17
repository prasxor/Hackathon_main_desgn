

import React, { useState, useEffect } from "react";
import "./News.css";
import MiniNavbar from "../../Elements/Atoms/MiniNavbar/MiniNavbar";
import NewsSearch from "../../Elements/NewsSearch/NewsSearch";
import NewsPageMainBanner from "../../Elements/NewsPageCompoent/NewsPageMainBanner/NewsPageMainBanner";
import NewsPageCards from "../../Elements/Atoms/Cards/NewsPageCards/NewsPageCards";
import NewsVerticalCardsCollection from "../../Elements/NewsPageCompoent/NewVerticalCardsCollection/NewsVerticalCardsCollection";
import newsData from "../../Data/newsData.json"; // Importing the static JSON file

const News = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [sections, setSections] = useState({
    Technology: [],
    Business: [],
    Sports: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    try {
      // Using the imported newsData.json
      if (newsData) {
        setLatestNews(newsData.latestNews.slice(0, 6)); // Limit to 6 articles
        setSections({
          Technology: newsData.technology.slice(0, 3), // Limit to 3 articles
          Business: newsData.business.slice(0, 3), // Limit to 3 articles
          Sports: newsData.sports.slice(0, 3), // Limit to 3 articles
        });
      }
    } catch (err) {
      setError("Error loading news data");
      console.error("Error loading data:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <div className="loading">Loading News...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="NewsContainerMain">
      <div className="NewsContainerTopSection">
        <MiniNavbar />
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
            {latestNews.length > 0 ? (
              latestNews.map((news, index) => (
                <NewsPageCards key={index} news={news} />
              ))
            ) : (
              <p>No latest news available</p>
            )}
          </div>
        </div>
        <div className="SectionsContainer">
          <div className="LatestNewsSectionTitle">
            <h2>Sections</h2>
          </div>
          <div className="NewsSectionBottom">
            {Object.keys(sections).map((category, index) => (
              <NewsVerticalCardsCollection
                key={index}
                title={category}
                newsList={sections[category]} // Each section now has a max of 3 articles
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
