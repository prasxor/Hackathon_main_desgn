// import React from "react";
// import "./News.css";
// import MiniNavbar from "../../Elements/Atoms/MiniNavbar/MiniNavbar";
// import NewsSearch from "../../Elements/NewsSearch/NewsSearch";
// import NewsPageMainBanner from "../../Elements/NewsPageCompoent/NewsPageMainBanner/NewsPageMainBanner";
// import NewsPageCards from "../../Elements/Atoms/Cards/NewsPageCards/NewsPageCards";
// import NewsVerticalCardsCollection from "../../Elements/NewsPageCompoent/NewVerticalCardsCollection/NewsVerticalCardsCollection";

// const News = () => {
//   return (
//     <div className="NewsContainerMain">
//       <div className="NewsContainerTopSection">
//         <MiniNavbar />
//         <NewsSearch searchPlaceholder={"Search News"} btnTitle={"Search"} />
//       </div>
//       <div className="NewsContainerMainSection">
//         <div className="NewsMainBanner">
//           <NewsPageMainBanner />
//         </div>
//         <div className="LatestNewsSection">
//           <div className="LatestNewsSectionTitle">
//             <h2>Latest News</h2>
//           </div>
//           <div className="LatestNewsSectionMainCards">
//             <NewsPageCards />
//             <NewsPageCards />
//             <NewsPageCards />
//             <NewsPageCards />
//             <NewsPageCards />
//             <NewsPageCards />
//           </div>
//         </div>
//         <div className="SectionsContainer">
//           <div className="LatestNewsSectionTitle">
//             <h2>Sections</h2>
//           </div>
//           <div className="NewsSectionBottom">
//             <NewsVerticalCardsCollection title={"Technology"} />
//             <NewsVerticalCardsCollection title={"Business"} />
//             <NewsVerticalCardsCollection title={"Sports"} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default News;

// import React, { useState, useEffect } from "react";
// import "./News.css";
// import MiniNavbar from "../../Elements/Atoms/MiniNavbar/MiniNavbar";
// import NewsSearch from "../../Elements/NewsSearch/NewsSearch";
// import NewsPageMainBanner from "../../Elements/NewsPageCompoent/NewsPageMainBanner/NewsPageMainBanner";
// import NewsPageCards from "../../Elements/Atoms/Cards/NewsPageCards/NewsPageCards";
// import NewsVerticalCardsCollection from "../../Elements/NewsPageCompoent/NewVerticalCardsCollection/NewsVerticalCardsCollection";

// const News = () => {
//   const [latestNews, setLatestNews] = useState([]);
//   const [sections, setSections] = useState({
//     Technology: [],
//     Business: [],
//     Sports: [],
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   const fetchFromAPI = async (url) => {
//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       if (response.ok) return data;
//       throw new Error(data.message || "Failed to fetch news");
//     } catch (err) {
//       console.error("API Fetch Error:", err.message);
//       setError(err.message);
//     }
//   };

//   useEffect(() => {
//     const fetchNews = async () => {
//       setIsLoading(true);
//       try {
//         const API_KEY = "6cd7f944a31643dfb09807fcb927c73f";
//         const baseUrl = "https://newsapi.org/v2/top-headlines";

//         // Fetch latest news
//         const latestNewsData = await fetchFromAPI(
//           `${baseUrl}?country=us&pageSize=10&apiKey=${API_KEY}`
//         );
//         if (latestNewsData) setLatestNews(latestNewsData.articles);

//         // Fetch news by category
//         const categories = ["technology", "Business", "sports"];
//         const categoryNews = {};
//         await Promise.all(
//           categories.map(async (category) => {
//             const data = await fetchFromAPI(
//               `${baseUrl}?country=us&category=${category}&pageSize=5&apiKey=${API_KEY}`
//             );
//             if (data) {
//               categoryNews[category.charAt(0).toUpperCase() + category.slice(1)] = data.articles;
//             }
//           })
//         );

//         setSections(categoryNews);
//       } catch (error) {
//         console.error("Fetch News Error:", error);
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   if (isLoading) {
//     return <div className="loading">Loading News...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   return (
//     <div className="NewsContainerMain">
//       <div className="NewsContainerTopSection">
//         <MiniNavbar />
//         <NewsSearch searchPlaceholder={"Search News"} btnTitle={"Search"} />
//       </div>
//       <div className="NewsContainerMainSection">
//         <div className="NewsMainBanner">
//           <NewsPageMainBanner />
//         </div>
//         <div className="LatestNewsSection">
//           <div className="LatestNewsSectionTitle">
//             <h2>Latest News</h2>
//           </div>
//           <div className="LatestNewsSectionMainCards">
//             {latestNews.length > 0 ? (
//               latestNews.map((news, index) => (
//                 <NewsPageCards key={index} news={news} />
//               ))
//             ) : (
//               <p>No latest news available</p>
//             )}
//           </div>
//         </div>
//         <div className="SectionsContainer">
//           <div className="LatestNewsSectionTitle">
//             <h2>Sections</h2>
//           </div>
//           <div className="NewsSectionBottom">
//             {Object.keys(sections).map((category, index) => (
//               <NewsVerticalCardsCollection
//                 key={index}
//                 title={category}
//                 newsList={sections[category]}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default News;

// import React, { useState, useEffect } from "react";
// import "./News.css";
// import MiniNavbar from "../../Elements/Atoms/MiniNavbar/MiniNavbar";
// import NewsSearch from "../../Elements/NewsSearch/NewsSearch";
// import NewsPageMainBanner from "../../Elements/NewsPageCompoent/NewsPageMainBanner/NewsPageMainBanner";
// import NewsPageCards from "../../Elements/Atoms/Cards/NewsPageCards/NewsPageCards";
// import NewsVerticalCardsCollection from "../../Elements/NewsPageCompoent/NewVerticalCardsCollection/NewsVerticalCardsCollection";
// import newsData from "../../Data/newsData.json"; // Importing the static JSON file

// const News = () => {
//   const [latestNews, setLatestNews] = useState([]);
//   const [sections, setSections] = useState({
//     Technology: [],
//     Business: [],
//     Sports: [],
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     setIsLoading(true);
//     try {
//       // Using the imported newsData.json
//       if (newsData) {
//         setLatestNews(newsData.latestNews);
//         setSections(newsData.categories);
//       }
//     } catch (err) {
//       setError("Error loading news data");
//       console.error("Error loading data:", err);
//     } finally {
//       setIsLoading(false);
//     }
//   }, []);

//   if (isLoading) {
//     return <div className="loading">Loading News...</div>;
//   }

//   if (error) {
//     return <div className="error">Error: {error}</div>;
//   }

//   return (
//     <div className="NewsContainerMain">
//       <div className="NewsContainerTopSection">
//         <MiniNavbar />
//         <NewsSearch searchPlaceholder={"Search News"} btnTitle={"Search"} />
//       </div>
//       <div className="NewsContainerMainSection">
//         <div className="NewsMainBanner">
//           <NewsPageMainBanner />
//         </div>
//         <div className="LatestNewsSection">
//           <div className="LatestNewsSectionTitle">
//             <h2>Latest News</h2>
//           </div>
//           <div className="LatestNewsSectionMainCards">
//             {latestNews.length > 7 ? (
//               latestNews.map((news, index) => (
//                 <NewsPageCards key={index} news={news} />
//               ))
//             ) : (
//               <p>No latest news available</p>
//             )}
//           </div>
//         </div>
//         <div className="SectionsContainer">
//           <div className="LatestNewsSectionTitle">
//             <h2>Sections</h2>
//           </div>
//           <div className="NewsSectionBottom">
//             {Object.keys(sections).map((category, index) => (
//               <NewsVerticalCardsCollection
//                 key={index}
//                 title={category}
//                 newsList={sections[category]}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default News;


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
          Technology: newsData.categories.Technology.slice(0, 3), // Limit to 3 articles
          Business: newsData.categories.Business.slice(0, 3), // Limit to 3 articles
          Sports: newsData.categories.Sports.slice(0, 3), // Limit to 3 articles
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
        <NewsSearch searchPlaceholder={"Search News"} btnTitle={"Search"} />
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
