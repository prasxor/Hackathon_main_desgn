


import React from "react";
import "./NewsVerticalCards.css";
import NoImage from '../../../../assets/Cards_noImage.png'

const NewsVerticalCards = ({ news }) => (
  <div className="NewsVerticalCardsMainContainer">
    <div className="NewsVerticalCardsSubContainerLeft">
      <p className="NewsVerticalCardsSubContainerLeftPTop">{news.source?.name}</p>
      <p className="NewsVerticalCardsSubContainerLeftPMiddle">{news.title}</p>
      <p className="NewsVerticalCardsSubContainerLeftPBottom">{news.publishedAt}</p>
    </div>
    <div className="NewsVerticalCardsSubContainerRight">
      <img src={news.urlToImage || `${NoImage}`} alt="News Thumbnail" />
    </div>
  </div>
);



export default NewsVerticalCards;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./NewsVerticalCards.css";
// import NoImage from '../../../../assets/Cards_noImage.png';

// const NewsVerticalCards = ({ news }) => {
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     // Navigate to a detailed page for this specific news article
//     navigate(`/final-news/${news.id || "default-id"}`); // Replace "news.id" with the unique identifier for each news item
//   };

//   return (
//     <div
//       className="NewsVerticalCardsMainContainer"
//       onClick={handleCardClick}
//       style={{ cursor: "pointer" }}
//     >
//       <div className="NewsVerticalCardsSubContainerLeft">
//         <p className="NewsVerticalCardsSubContainerLeftPTop">{news.source?.name}</p>
//         <p className="NewsVerticalCardsSubContainerLeftPMiddle">{news.title}</p>
//         <p className="NewsVerticalCardsSubContainerLeftPBottom">{news.publishedAt}</p>
//       </div>
//       <div className="NewsVerticalCardsSubContainerRight">
//         <img src={news.urlToImage || `${NoImage}`} alt="News Thumbnail" />
//       </div>
//     </div>
//   );
// };

// export default NewsVerticalCards;

