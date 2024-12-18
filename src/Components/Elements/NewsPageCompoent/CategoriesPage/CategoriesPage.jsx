


// import React, { useState, useEffect } from 'react';
// import { useParams } from "react-router-dom"; // Import useParams for dynamic routing
// import "./CategoriesPage.css";
// import SubCategoriesPageComponent from '../SubCategoriesPageComponent/SubCategoriesPageComponent';
// import newsData from '../../../Data/newsData.json'; 
// import MiniNavbar from '../../Atoms/MiniNavbar/MiniNavbar';

// const CategoriesPage = () => {
//   const { category } = useParams(); // Retrieve the dynamic category parameter
//   const [categoryNews, setCategoryNews] = useState([]);

//   useEffect(() => {
//     if (category && newsData[category.toLowerCase()]) {
//       setCategoryNews(newsData[category.toLowerCase()]);
//     } else {
//       setCategoryNews([]);
//     }
//   }, [category]);

//   // const FirstLetterCapital = category;

//   return (
//     <div className='CategoriesMainContainer'>
//       <div className="NewsContainerTopSection FinalNewsPageMiniNavbar">
//         <MiniNavbar />
//       </div>
//       <div className='CategoriesSubContainerTop'>
//         {/* <h2>{category} News</h2> */}
//         <h2>{category.charAt(0).toUpperCase() + category.slice(1)} News</h2>
//         {/* <h2>{FirstLetterCapital.charAt(0).toUpperCase() + category.slice(1)} News</h2> */}
//       </div>
//       <div className='CategoriesSubContainerBottom'>
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

// export default CategoriesPage;



import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams for dynamic routing
import "./CategoriesPage.css";
import SubCategoriesPageComponent from '../SubCategoriesPageComponent/SubCategoriesPageComponent';
import newsData from "../../../Data/newsData.json"; 
import MiniNavbar from "../../Atoms/MiniNavbar/MiniNavbar";

const CategoriesPage = () => {
  const { category } = useParams(); // Retrieve the dynamic category parameter (e.g., "headlines")
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    // Fetch the data from newsData based on the category, assuming the data is organized in categories
    if (category && newsData[category.toLowerCase()]) {
      setCategoryNews(newsData[category.toLowerCase()]);
    } else {
      setCategoryNews([]);
    }
  }, [category]);

  return (
    <div className="CategoriesMainContainer">
      <div className="NewsContainerTopSection FinalNewsPageMiniNavbar">
        <MiniNavbar />
      </div>
      <div className="CategoriesSubContainerTop">
        <h2>{category.charAt(0).toUpperCase() + category.slice(1)} News</h2>
      </div>
      <div className="CategoriesSubContainerBottom">
        {categoryNews.length > 0 ? (
          categoryNews.map((newsItem, index) => (
            <SubCategoriesPageComponent key={index} news={newsItem} />
          ))
        ) : (
          <p>No news available for this category</p>
        )}
      </div>
    </div>
  );
};

export default CategoriesPage;
