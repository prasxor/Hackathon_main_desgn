// import React from "react";
// import "./SubCategoriesPageComponent.css";
// import Image from "../../../../assets/FakeNewsImg3.jpg";

// const truncateText = (text, limit = 40) => {
//   if (typeof text !== 'string') {
//     return ''; // Return an empty string if the text is not a valid string
//   }
  
//   if (text.length > limit) {
//     return text.substring(0, limit) + "...";
//   }
//   return text;
// };

// const truncateText1 = (text, limit = 60) => {
//   if (typeof text !== 'string') {
//     return ''; // Return an empty string if the text is not a valid string
//   }
  
//   if (text.length > limit) {
//     return text.substring(0, limit) + "...";
//   }
//   return text;
// };


// const SubCategoriesPageComponent = ({ news }) => {
//   const domain = new URL(news.url).hostname;

//   return (
//     <div className="SubCategoriesPageComponentMainContainer">
//       <div className="SubCategoriesComponentSubContainerLeft">
//         {/* Truncate title and description */}
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
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import "./SubCategoriesPageComponent.css";
import Image from "../../../../assets/FakeNewsImg3.jpg";

const truncateText = (text, limit = 40) => {
  if (typeof text !== 'string') {
    return ''; // Return an empty string if the text is not a valid string
  }
  
  if (text.length > limit) {
    return text.substring(0, limit) + "...";
  }
  return text;
};

const truncateText1 = (text, limit = 60) => {
  if (typeof text !== 'string') {
    return ''; // Return an empty string if the text is not a valid string
  }
  
  if (text.length > limit) {
    return text.substring(0, limit) + "...";
  }
  return text;
};

const SubCategoriesPageComponent = ({ news }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const domain = new URL(news.url).hostname;

  const handleClick = () => {
    navigate("/final-news", { state: { news } }); // Navigate to FinalNewsPage and pass the news object
  };

  return (
    <div className="SubCategoriesPageComponentMainContainer" onClick={handleClick}> {/* Add onClick handler */}
      <div className="SubCategoriesComponentSubContainerLeft">
        {/* Truncate title and description */}
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
