

import React from "react";
import { useLocation } from "react-router-dom";
import "./FinalNewsPage.css";
import image from "../../../../assets/FakeNewsImg3.jpg";
import AiLogo from "../../../../assets/AiLogo.png";

const FinalNewsPage = () => {
  const location = useLocation();
  const { news } = location.state || {};
  if (!news) {
    return <div>No news available</div>;
  }

  return (
    <div className="FinalNewsPageContainer">
      <div className="FinalNewsPageContainerSub">
        <div className="FinalNewsPageContainerHeading">
          <h2>{news.title}</h2>
        </div>
        <div className="FinalNewsPageContainerMainContent">
          <div className="FinalNewsPageMainContentLeft">
            <img src={news.urlToImage || `${image}`} alt={news.title} />
          </div>
          <div className="FinalNewsPageMainContentRight">
            <h3>Description</h3>
            <p>{news.description}</p>
            <p>{news.content}</p>
          </div>
        </div>
        <div className="FinalNewsPageBottomBtn">
          <div className="FinalNewsPageBottomBtnSub">
            <div className="FinalNewsPageBottomBtnSummarize">
              <button>
                <img src={AiLogo} alt="" />
                Summarize
              </button>
            </div>
            <div className="FinalNewsPageBottomBtnFullArticle">
              <button>
                <a href={news.url} target="_blank" rel="noopener noreferrer">
                  Read Full Article
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalNewsPage;
