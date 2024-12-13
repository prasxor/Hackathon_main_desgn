

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./SubCategoriesPageComponent.css";
// import Image from "../../../../assets/FakeNewsImg3.jpg";

// const truncateText = (text, limit = 40) => {
//   if (typeof text !== "string") {
//     return "";
//   }

//   if (text.length > limit) {
//     return text.substring(0, limit) + "...";
//   }
//   return text;
// };

// const truncateText1 = (text, limit = 60) => {
//   if (typeof text !== "string") {
//     return "";
//   }

//   if (text.length > limit) {
//     return text.substring(0, limit) + "...";
//   }
//   return text;
// };

// const SubCategoriesPageComponent = ({ news }) => {
//   const navigate = useNavigate();
//   const domain = new URL(news.url).hostname;

//   const handleClick = () => {
//     navigate("/final-news", { state: { news } });
//   };

//   return (
//     <div
//       className="SubCategoriesPageComponentMainContainer"
//       onClick={handleClick}
//     >
//       <div className="SubCategoriesComponentSubContainerLeft">
//         <h3>{truncateText(news.title)}</h3>
//         <p>{truncateText1(news.description)}</p>
//         <p className="SubCategoriesComponentSubContainerLeftLastPara">
//           <a href={news.url} target="_blank" rel="noopener noreferrer">
//             {domain}
//           </a>
//         </p>
//       </div>
//       <div className="SubCategoriesComponentSubContainerRight">
//         <img src={news.urlToImage || `${Image}`} alt={news.title} />
//       </div>
//     </div>
//   );
// };

// export default SubCategoriesPageComponent;


import React from "react";
import { useNavigate } from "react-router-dom";
import "./SubCategoriesPageComponent.css";
import Image from "../../../../assets/FakeNewsImg3.jpg";

const truncateText = (text, limit = 40) => {
  if (typeof text !== "string") {
    return "";
  }

  if (text.length > limit) {
    return text.substring(0, limit) + "...";
  }
  return text;
};

const truncateText1 = (text, limit = 60) => {
  if (typeof text !== "string") {
    return "";
  }

  if (text.length > limit) {
    return text.substring(0, limit) + "...";
  }
  return text;
};

const SubCategoriesPageComponent = ({ news }) => {
  const navigate = useNavigate();
  const domain = new URL(news.url).hostname;

  if (news.title === "[Removed]") {
    return null; 
  }

  const handleClick = () => {
    navigate("/final-news", { state: { news } });
  };

  return (
    <div
      className="SubCategoriesPageComponentMainContainer"
      onClick={handleClick}
    >
      <div className="SubCategoriesComponentSubContainerLeft">
        <h3>{truncateText(news.title)}</h3>
        <p>{truncateText1(news.description)}</p>
        <p className="SubCategoriesComponentSubContainerLeftLastPara">
          <a href={news.url} target="_blank" rel="noopener noreferrer">
            {domain}
          </a>
        </p>
      </div>
      <div className="SubCategoriesComponentSubContainerRight">
        <img src={news.urlToImage || `${Image}`} alt={news.title} />
      </div>
    </div>
  );
};

export default SubCategoriesPageComponent;
