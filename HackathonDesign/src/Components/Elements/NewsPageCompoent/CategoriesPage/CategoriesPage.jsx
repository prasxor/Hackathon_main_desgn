// import React from 'react'
// import { useLocation } from "react-router-dom";
// import "./CategoriesPage.css"
// import SubCategoriesPageComponent from '../SubCategoriesPageComponent/SubCategoriesPageComponent'

// const CategoriesPage = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const title = queryParams.get("title");
//   return (
//     <div className='CategoriesMainContainer'>
//       <div className='CategoriesSubContainerTop'>
//         <h2>{title}</h2>
//       </div>
//       <div className='CategoriesSubContainerBottom'>
//         <SubCategoriesPageComponent/>
//         <SubCategoriesPageComponent/>
//         <SubCategoriesPageComponent/>
//         <SubCategoriesPageComponent/>
//         <SubCategoriesPageComponent/>
//         <SubCategoriesPageComponent/>
//         <SubCategoriesPageComponent/>
//         <SubCategoriesPageComponent/>
//       </div>
//     </div>
//   )
// }

// export default CategoriesPage


import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import "./CategoriesPage.css";
import SubCategoriesPageComponent from '../SubCategoriesPageComponent/SubCategoriesPageComponent';
import newsData from '../../../Data/newsData.json'; 
const CategoriesPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get("title");

  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (title && newsData[title.toLowerCase()]) {
      setCategoryNews(newsData[title.toLowerCase()]);
    } else {
      setCategoryNews([]);
    }
  }, [title]);

  return (
    <div className='CategoriesMainContainer'>
      <div className='CategoriesSubContainerTop'>
        <h2>{title} News</h2>
      </div>
      <div className='CategoriesSubContainerBottom'>
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
}

export default CategoriesPage;
