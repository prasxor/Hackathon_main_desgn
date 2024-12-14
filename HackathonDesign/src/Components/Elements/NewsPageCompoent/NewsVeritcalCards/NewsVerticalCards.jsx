// import React from "react";
// import "./NewsVerticalCards.css";
// import Image from '../../../../assets/FakeNewsImg1.jpg'

// const NewsVerticalCards = () => {
//   return <div className="NewsVerticalCardsMainContainer">
//           <div className="NewsVerticalCardsSubContainerLeft">
//             <p className="NewsVerticalCardsSubContainerLeftPTop">www.website.com</p>
//             <p className="NewsVerticalCardsSubContainerLeftPMiddle">Microsoft to introduce file sharing between iPhones and Windows PCs soon.</p>
//             <p className="NewsVerticalCardsSubContainerLeftPBottom">1 day ago</p>
//           </div>
//           <div className="NewsVerticalCardsSubContainerRight">
//             <img src={Image} alt="" />
//           </div>
//   </div>;
// };

// export default NewsVerticalCards;


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
