



// import React from "react";
// import "./NewsVerticalCardsCollection.css";
// import NewsVerticalCards from "../NewsVeritcalCards/NewsVerticalCards";
// import RightArrow from "../../../../assets/NewsRightArrow.png";

// const NewsVerticalCardsCollection = ({ title, newsList }) => (
//   <div className="NewsVerticalCardsCollectionMainContainer">
//     <div className="NewsVerticalCardsCollectionSubContainerTop">
//       <p>{title}</p>
//       <img src={RightArrow} alt="Arrow" />
//     </div>
//     <div className="NewsVerticalCardsCollectionSubContainerBottom">
//       {newsList.map((news, index) => (
//         <NewsVerticalCards key={index} news={news} />
//       ))}
//     </div>
//   </div>
// );


// export default NewsVerticalCardsCollection;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./NewsVerticalCardsCollection.css";
import NewsVerticalCards from "../NewsVeritcalCards/NewsVerticalCards";
import RightArrow from "../../../../assets/NewsRightArrow.png";

const NewsVerticalCardsCollection = ({ title, newsList }) => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(`/news/${title.toLowerCase()}`);
  };


  return (
    <div className="NewsVerticalCardsCollectionMainContainer" onClick={handleCategoryClick}
    style={{ cursor: "pointer" }}>
      <div
        className="NewsVerticalCardsCollectionSubContainerTop"
        
      >
        <p>{title}</p>
        <img src={RightArrow} alt="Arrow" />
      </div>
      <div className="NewsVerticalCardsCollectionSubContainerBottom">
        {newsList.map((news, index) => (
          <NewsVerticalCards key={index} news={news} />
        ))}
      </div>
    </div>
  );
};

export default NewsVerticalCardsCollection;


