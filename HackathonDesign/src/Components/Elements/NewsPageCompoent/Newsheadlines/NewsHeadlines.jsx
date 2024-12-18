// import React from "react";

// const NewsHeadlines = () => {
//   const { category } = useParams(); // Retrieve the dynamic category parameter (e.g., "headlines")
//   const [categoryNews, setCategoryNews] = useState([]);

//   useEffect(() => {
//     // Fetch the data from newsData based on the category, assuming the data is organized in categories
//     if (category && newsData[category.toLowerCase()]) {
//       setCategoryNews(newsData[category.toLowerCase()]);
//     } else {
//       setCategoryNews([]);
//     }
//   }, [category]);

//   return (
//     <div className="CategoriesMainContainer">
//       <div className="NewsContainerTopSection FinalNewsPageMiniNavbar">
//         <MiniNavbar />
//       </div>
//       <div className="CategoriesSubContainerTop">
//         <h2>{category.charAt(0).toUpperCase() + category.slice(1)} News</h2>
//       </div>
//       <div className="CategoriesSubContainerBottom">
//         {categoryNews.length > 0 ? (
//           categoryNews.map((newsItem, index) => (
//             <SubCategoriesPageComponent key={index} news={newsItem} />
//           ))
//         ) : (
//           <p>No news available for this category</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NewsHeadlines;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import newsData from "../../../Data/newsData.json";
// import MiniNavbar from "../../Atoms/MiniNavbar/MiniNavbar";
// import SubCategoriesPageComponent from "../SubCategoriesPageComponent/SubCategoriesPageComponent";

// const NewsHeadlines = () => {
//   const { category } = useParams(); // Retrieve the dynamic category parameter (e.g., "headlines")
//   const [categoryNews, setCategoryNews] = useState([]);

//   useEffect(() => {
//     // Fetch only the latestNews data from newsData.json
//     if (category === "headlines" && newsData.latestNews) {
//       setCategoryNews(newsData.latestNews); // Set the state to the latestNews from the JSON data
//     } else {
//       setCategoryNews([]); // Clear the state if category is not "headlines" or no data is available
//     }
//   }, [category]);

//   return (
//     <div className="CategoriesMainContainer">
//       <div className="NewsContainerTopSection FinalNewsPageMiniNavbar">
//         <MiniNavbar />
//       </div>
//       <div className="CategoriesSubContainerTop">
//         <h2>Headlines News</h2> {/* Always display "Headlines News" */}
//       </div>
//       <div className="CategoriesSubContainerBottom">
//         {categoryNews.length > 0 ? (
//           categoryNews.map((newsItem, index) => (
//             <SubCategoriesPageComponent key={index} news={newsItem} />
//           ))
//         ) : (
//           <p>No headlines available at the moment</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NewsHeadlines;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SubCategoriesPageComponent from "../SubCategoriesPageComponent/SubCategoriesPageComponent";
import "../CategoriesPage/CategoriesPage.css";
import data from "../../../Data/newsData.json";
import MiniNavbar from "../../Atoms/MiniNavbar/MiniNavbar";

const NewsHeadlines = () => {
  return (
    <div className="NewsHeadlinesContainer">
      <div className="NewsContainerTopSection FinalNewsPageMiniNavbar">
        <MiniNavbar />
      </div>
      <div className="CategoriesSubContainerTop">
        <h2>Headlines News</h2>
      </div>
      <div className="CategoriesSubContainerBottom">
        {data.latestNews.length > 0 ? (
          data.latestNews.map((newsItem, index) => (
            <SubCategoriesPageComponent key={index} news={newsItem} />
          ))
        ) : (
          <p>No headlines available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default NewsHeadlines;
