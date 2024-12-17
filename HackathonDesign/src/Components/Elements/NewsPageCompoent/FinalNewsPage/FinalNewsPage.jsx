// import React from "react";
// import "./FinalNewsPage.css";
// import image from '../../../../assets/FakeNewsImg3.jpg'
// import AiLogo from "../../../../assets/AiLogo.png"

// const FinalNewsPage = () => {
//   return (
//     <div className="FinalNewsPageContainer">
//       <div className="FinalNewsPageContainerSub">
//         <div className="FinalNewsPageContainerHeading">
//           <h2>World's biggest iceberg heads north</h2>
//         </div>
//         <div className="FinalNewsPageContainerMainContent">
//           <div className="FinalNewsPageMainContentLeft">
//             <img src={image} alt="" />
//           </div>
//           <div className="FinalNewsPageMainContentRight">
//             <h3>Article</h3>
//             <p>
//             ABC News will pay $15 million to Donald Trump to settle a defamation lawsuit after anchor George Stephanopoulos falsely claimed Trump was "liable for rape." The comments, made during a March interview, referred to a civil case where Trump was found liable for "sexual abuse." ABC will also issue a public apology.

//             View the latest news and videos, including politics and breaking news headlines on the Israel-Hamas war. We send you timely email notifications about trending fake news stories relevant to your interests, helping you stay informed and vigilant.
//             </p>
//           </div>
//         </div>
//         <div className="FinalNewsPageBottomBtn">
//           <div className="FinalNewsPageBottomBtnSub">
//             <div className="FinalNewsPageBottomBtnSummarize">
//               <button>
//                 <img src={AiLogo} alt="" />
//                 Summarize
//               </button>
//             </div>
//             <div className="FinalNewsPageBottomBtnFullArticle">
//               <button>
//                 <a href="#">Read Full Article</a>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FinalNewsPage;

// import React from "react";
// import { useLocation } from "react-router-dom"; // Import useLocation to get passed state
// import "./FinalNewsPage.css";
// import image from '../../../../assets/FakeNewsImg3.jpg'
// import AiLogo from "../../../../assets/AiLogo.png";

// const FinalNewsPage = () => {
//   const location = useLocation(); // Get the location object
//   const { news } = location.state || {}; // Retrieve the news object passed in state

//   if (!news) {
//     return <div>No news available</div>; // Handle the case where no news is passed
//   }

//   return (
//     <div className="FinalNewsPageContainer">
//       <div className="FinalNewsPageContainerSub">
//         <div className="FinalNewsPageContainerHeading">
//           <h2>{news.title}</h2> {/* Use the title from the passed news object */}
//         </div>
//         <div className="FinalNewsPageContainerMainContent">
//           <div className="FinalNewsPageMainContentLeft">
//             <img src={news.urlToImage || image} alt={news.title} />
//           </div>
//           <div className="FinalNewsPageMainContentRight">
//             <h3>Article</h3>
//             <p>{news.description}</p>
//             <p>{news.content}</p> {/* Assuming 'content' is available in the news data */}
//           </div>
//         </div>
//         <div className="FinalNewsPageBottomBtn">
//           <div className="FinalNewsPageBottomBtnSub">
//             <div className="FinalNewsPageBottomBtnSummarize">
//               <button>
//                 <img src={AiLogo} alt="" />
//                 Summarize
//               </button>
//             </div>
//             <div className="FinalNewsPageBottomBtnFullArticle">
//               <button>
//                 <a href={news.url} target="_blank" rel="noopener noreferrer">
//                   Read Full Article
//                 </a>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FinalNewsPage;


import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to get passed state
import "./FinalNewsPage.css";
import image from '../../../../assets/FakeNewsImg3.jpg';
import AiLogo from "../../../../assets/AiLogo.png";

const FinalNewsPage = () => {
  const location = useLocation(); // Get the location object
  const { news } = location.state || {}; // Retrieve the news object passed in state

  if (!news) {
    return <div>No news available</div>; // Handle the case where no news is passed
  }

  return (
    <div className="FinalNewsPageContainer">
      <div className="FinalNewsPageContainerSub">
        <div className="FinalNewsPageContainerHeading">
          <h2>{news.title}</h2> {/* Display the title from the passed news object */}
        </div>
        <div className="FinalNewsPageContainerMainContent">
          <div className="FinalNewsPageMainContentLeft">
            <img src={news.urlToImage || `${image}`} alt={news.title} />
          </div>
          <div className="FinalNewsPageMainContentRight">
            <h3>Description</h3>
            <p>{news.description}</p>
            <p>{news.content}</p> {/* Assuming 'content' is available in the news data */}
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
