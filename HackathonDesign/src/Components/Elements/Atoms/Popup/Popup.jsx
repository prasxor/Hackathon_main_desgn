// import React, { useState, useEffect } from "react";
// import "./Popup.css";
// import CloseBtn from "../../../../assets/closebtn.png";
// import ReadFullArticle from "../ReadFullArticle/ReadFullArticle";
// import SearchAgain from "../../SearchAgain/SearchAgain";
// import FeedbackBtn from "../Button/FeedbackBtn/FeedbackBtn";
// import thumbsup from "../../../../assets/thumsup.png";
// import thumbsdown from "../../../../assets/thumsdown.png";
// import BackgroundPopupLines from "../../../../assets/popupBackground.png";
// import SearchImg from "../../../../assets/Searchicon.png";
// import PopupDislike from "../../Atoms/PopupDislike/PopupDislike";

// const Popup = ({ truthValue, link, onClose }) => {
//   const [progress, setProgress] = useState(0);
//   const [showDislikePopup, setShowDislikePopup] = useState(false);

//   const RealNewsNumber = 100;
//   const FakeNewsNumber = 0;

//   const normalizedFactsValue = truthValue.trim().toLowerCase();
//   const randomNewsNumber =
//     normalizedFactsValue === "true" || normalizedFactsValue === "true."
//       ? RealNewsNumber
//       : FakeNewsNumber;

//   const getBackgroundColorAndShadow = (number) => {
//     if (number <= 10) return { backgroundColor: "#F1212F", boxShadow: `0 0 3px #F1212F` };
//     if (number >= 90) return { backgroundColor: "#0ACF83", boxShadow: `0 0 3px #0ACF83` };
//     return { backgroundColor: "#E0E0E2", boxShadow: `0 0 3px #e0e0e2` };
//   };

//   const { backgroundColor, boxShadow } = getBackgroundColorAndShadow(randomNewsNumber);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev < randomNewsNumber) return prev + 1;
//         clearInterval(interval);
//         return randomNewsNumber;
//       });
//     }, 10);
//     return () => clearInterval(interval);
//   }, [randomNewsNumber]);

//   const handleDislikeClick = () => setShowDislikePopup(true);
//   const handleCloseDislikePopup = () => setShowDislikePopup(false);

//   return (
//     <div
//       id="PopupContainer"
//       style={{
//         backgroundImage: `url(${BackgroundPopupLines})`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         width: "100%",
//         height: "100%",
//       }}
//     >
//       <div
//         id="closebtn"
//         onClick={onClose}
//         role="button"
//         tabIndex={0}
//         onKeyPress={(e) => e.key === "Enter" && onClose()}
//       >
//         <img src={CloseBtn} alt="Close Button" />
//       </div>

//       {/* Conditional Rendering based on showDislikePopup */}
//       {!showDislikePopup ? (
//         <div className="contentWrapper">
//           <div id="progressBarPopup">
//             <div id="ProgressBarTop">
//               <p id="ProgressBarTopData">{randomNewsNumber}%</p>
//               <p id="ProgressBarBottomData">ACCURACY</p>
//             </div>
//             <div id="ProgressBarBottom">
//               <div
//                 className="progressBarBottomIndicator glowing-background"
//                 style={{
//                   width: `${randomNewsNumber}%`,
//                   backgroundColor,
//                   boxShadow,
//                 }}
//               ></div>
//             </div>
//           </div>

//           <div id="ArticlePopup">
//             <SearchAgain onClose={onClose} image={SearchImg} text="Search Again" />
//             <ReadFullArticle link={link} truthValue={truthValue} />
//           </div>
//         </div>
//       ) : (
//         <div className="contentWrapper">
//           <PopupDislike onClose={handleCloseDislikePopup} />
//         </div>
//       )}

//       <div className="feedbackSection">
//         <p>How was the response?</p>
//         <div className="feedbackSectionBtn">
//           <FeedbackBtn Image={thumbsup} text="Like" />
//           <FeedbackBtn Image={thumbsdown} text="Dislike" onClick={handleDislikeClick} />
//         </div>
//       </div>

//       <div className="MistakeContainer">
//         <p>TruthLens can make mistakes. Verify important news.</p>
//       </div>
//     </div>
//   );
// };

// export default Popup;

// import React, { useState, useEffect } from "react";
// import "./Popup.css";
// import CloseBtn from "../../../../assets/closebtn.png";
// import ReadFullArticle from "../ReadFullArticle/ReadFullArticle";
// import SearchAgain from "../../SearchAgain/SearchAgain";
// import FeedbackBtn from "../Button/FeedbackBtn/FeedbackBtn";
// import thumbsup from "../../../../assets/thumsup.png";
// import thumbsdown from "../../../../assets/thumsdown.png";
// import BackgroundPopupLines from "../../../../assets/popupBackground.png";
// import SearchImg from "../../../../assets/Searchicon.png";
// import PopupDislike from "../../Atoms/PopupDislike/PopupDislike";

// const Popup = ({ truthValue, link, onClose }) => {
//   const [progress, setProgress] = useState(0);
//   const [showDislikePopup, setShowDislikePopup] = useState(false);

//   const RealNewsNumber = 100;
//   const FakeNewsNumber = 0;

//   const normalizedFactsValue = truthValue.trim().toLowerCase();
//   const randomNewsNumber =
//     normalizedFactsValue === "true" || normalizedFactsValue === "true."
//       ? RealNewsNumber
//       : FakeNewsNumber;

//   const getBackgroundColorAndShadow = (number) => {
//     if (number <= 10) return { backgroundColor: "#F1212F", boxShadow: `0 0 3px #F1212F` };
//     if (number >= 90) return { backgroundColor: "#0ACF83", boxShadow: `0 0 3px #0ACF83` };
//     return { backgroundColor: "#E0E0E2", boxShadow: `0 0 3px #e0e0e2` };
//   };

//   const { backgroundColor, boxShadow } = getBackgroundColorAndShadow(randomNewsNumber);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev < randomNewsNumber) return prev + 1;
//         clearInterval(interval);
//         return randomNewsNumber;
//       });
//     }, 10);
//     return () => clearInterval(interval);
//   }, [randomNewsNumber]);

//   // Toggle the visibility of PopupDislike
//   const handleDislikeClick = () => setShowDislikePopup(prev => !prev);

//   return (
//     <div
//       id="PopupContainer"
//       style={{
//         backgroundImage: `url(${BackgroundPopupLines})`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         width: "100%",
//         height: "100%",
//       }}
//     >
//       <div
//         id="closebtn"
//         onClick={onClose}
//         role="button"
//         tabIndex={0}
//         onKeyPress={(e) => e.key === "Enter" && onClose()}
//       >
//         <img src={CloseBtn} alt="Close Button" />
//       </div>

//       {/* Conditional Rendering based on showDislikePopup */}
//       {!showDislikePopup ? (
//         <div className="contentWrapper">
//           <div id="progressBarPopup">
//             <div id="ProgressBarTop">
//               <p id="ProgressBarTopData">{randomNewsNumber}%</p>
//               <p id="ProgressBarBottomData">ACCURACY</p>
//             </div>
//             <div id="ProgressBarBottom">
//               <div
//                 className="progressBarBottomIndicator glowing-background"
//                 style={{
//                   width: `${randomNewsNumber}%`,
//                   backgroundColor,
//                   boxShadow,
//                 }}
//               ></div>
//             </div>
//           </div>

//           <div id="ArticlePopup">
//             <SearchAgain onClose={onClose} image={SearchImg} text="Search Again" />
//             <ReadFullArticle link={link} truthValue={truthValue} />
//           </div>
//         </div>
//       ) : (
//         <div className="contentWrapper">
//           <PopupDislike onClose={() => setShowDislikePopup(false)} />
//         </div>
//       )}

//       <div className="feedbackSection">
//         <p>How was the response?</p>
//         <div className="feedbackSectionBtn">
//           <FeedbackBtn Image={thumbsup} text="Like" />
//           <FeedbackBtn Image={thumbsdown} text="Dislike" onClick={handleDislikeClick} />
//         </div>
//       </div>

//       <div className="MistakeContainer">
//         <p>TruthLens can make mistakes. Verify important news.</p>
//       </div>
//     </div>
//   );
// };

// export default Popup;

// import React, { useState, useEffect } from "react";
// import "./Popup.css";
// import CloseBtn from "../../../../assets/closebtn.png";
// import ReadFullArticle from "../ReadFullArticle/ReadFullArticle";
// import SearchAgain from "../../SearchAgain/SearchAgain";
// import FeedbackBtn from "../Button/FeedbackBtn/FeedbackBtn";
// import thumbsup from "../../../../assets/thumsup.png";
// import thumbsdown from "../../../../assets/thumsdown.png";
// import BackgroundPopupLines from "../../../../assets/popupBackground.png";
// import SearchImg from "../../../../assets/Searchicon.png";
// import PopupDislike from "../../Atoms/PopupDislike/PopupDislike";

// const Popup = ({ truthValue, link, onClose }) => {
//   const [progress, setProgress] = useState(0);
//   const [showDislikePopup, setShowDislikePopup] = useState(false);
//   const [showLikeGif, setShowLikeGif] = useState(false); // State for Like GIF
//   const [showDislikeGif, setShowDislikeGif] = useState(false); // State for Dislike GIF

//   const RealNewsNumber = 100;
//   const FakeNewsNumber = 0;

//   const normalizedFactsValue = truthValue.trim().toLowerCase();
//   const randomNewsNumber =
//     normalizedFactsValue === "true" || normalizedFactsValue === "true."
//       ? RealNewsNumber
//       : FakeNewsNumber;

//   const getBackgroundColorAndShadow = (number) => {
//     if (number <= 10)
//       return { backgroundColor: "#F1212F", boxShadow: `0 0 3px #F1212F` };
//     if (number >= 90)
//       return { backgroundColor: "#0ACF83", boxShadow: `0 0 3px #0ACF83` };
//     return { backgroundColor: "#E0E0E2", boxShadow: `0 0 3px #e0e0e2` };
//   };

//   const { backgroundColor, boxShadow } =
//     getBackgroundColorAndShadow(randomNewsNumber);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev < randomNewsNumber) return prev + 1;
//         clearInterval(interval);
//         return randomNewsNumber;
//       });
//     }, 10);
//     return () => clearInterval(interval);
//   }, [randomNewsNumber]);

//   // Toggle the visibility of PopupDislike
//   const handleDislikeClick = () => {
//     setShowDislikePopup((prev) => !prev);
//     setShowDislikeGif(true); // Show Dislike GIF when clicked
//     setTimeout(() => setShowDislikeGif(false), 3000); // Hide GIF after 3 seconds
//   };

//   const handleLikeClick = () => {
//     setShowLikeGif(true); // Show Like GIF when clicked
//     setTimeout(() => setShowLikeGif(false), 3000); // Hide GIF after 3 seconds
//   };

//   return (
//     <div
//       id="PopupContainer"
//       style={{
//         backgroundImage: `url(${BackgroundPopupLines})`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         width: "100%",
//         height: "100%",
//       }}
//     >
//       <div
//         id="closebtn"
//         onClick={onClose}
//         role="button"
//         tabIndex={0}
//         onKeyPress={(e) => e.key === "Enter" && onClose()}
//       >
//         <img src={CloseBtn} alt="Close Button" />
//       </div>

//       {/* Conditional Rendering based on showDislikePopup */}
//       {!showDislikePopup ? (
//         <div className="contentWrapper">
//           <div id="progressBarPopup">
//             <div id="ProgressBarTop">
//               <p id="ProgressBarTopData">{randomNewsNumber}%</p>
//               <p id="ProgressBarBottomData">ACCURACY</p>
//             </div>
//             <div id="ProgressBarBottom">
//               <div
//                 className="progressBarBottomIndicator glowing-background"
//                 style={{
//                   width: `${randomNewsNumber}%`,
//                   backgroundColor,
//                   boxShadow,
//                 }}
//               ></div>
//             </div>
//           </div>

//           <div id="ArticlePopup">
//             <SearchAgain
//               onClose={onClose}
//               image={SearchImg}
//               text="Search Again"
//             />
//             <ReadFullArticle link={link} truthValue={truthValue} />
//           </div>
//         </div>
//       ) : (
//         <div className="contentWrapper">
//           <PopupDislike onClose={() => setShowDislikePopup(false)} />
//         </div>
//       )}

//       <div className="feedbackSection">
//         <p>How was the response?</p>
//         <div className="feedbackSectionBtn">
//           <div className="FeedbackBtnContainer">
//             <FeedbackBtn
//               Image={thumbsup}
//               text="Like"
//               onClick={handleLikeClick}
//             />
//           </div>
//           <div className="FeedbackBtnContainer">
//             <FeedbackBtn
//               Image={thumbsdown}
//               text="Dislike"
//               onClick={handleDislikeClick}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Display the GIFs conditionally
//       {showLikeGif && <img src={LikeGif} alt="Like GIF" className="feedbackGif" />}
//       {showDislikeGif && <img src={DislikeGif} alt="Dislike GIF" className="feedbackGif" />} */}

//       <div className="MistakeContainer">
//         <p>TruthLens can make mistakes. Verify important news.</p>
//       </div>
//     </div>
//   );
// };

// export default Popup;


import React, { useState, useEffect } from "react";
import "./Popup.css";
import CloseBtn from "../../../../assets/closebtn.png";
import ReadFullArticle from "../ReadFullArticle/ReadFullArticle";
import SearchAgain from "../../SearchAgain/SearchAgain";
import FeedbackBtn from "../Button/FeedbackBtn/FeedbackBtn";
import thumbsup from "../../../../assets/thumsup.png";
import thumbsdown from "../../../../assets/thumsdown.png";
import BackgroundPopupLines from "../../../../assets/popupBackground.png";
import SearchImg from "../../../../assets/Searchicon.png";
import PopupDislike from "../../Atoms/PopupDislike/PopupDislike";

const Popup = ({ truthValue, link, onClose }) => {
  const [progress, setProgress] = useState(0);
  const [showDislikePopup, setShowDislikePopup] = useState(false);
  const [showLikeGif, setShowLikeGif] = useState(false); // State for Like GIF
  const [showDislikeGif, setShowDislikeGif] = useState(false); // State for Dislike GIF
  const [likeActive, setLikeActive] = useState(false); // Track like button active state
  const [dislikeActive, setDislikeActive] = useState(false); // Track dislike button active state

  const RealNewsNumber = 100;
  const FakeNewsNumber = 0;

  const normalizedFactsValue = truthValue.trim().toLowerCase();
  const randomNewsNumber =
    normalizedFactsValue === "true" || normalizedFactsValue === "true."
      ? RealNewsNumber
      : FakeNewsNumber;

  const getBackgroundColorAndShadow = (number) => {
    if (number <= 10)
      return { backgroundColor: "#F1212F", boxShadow: `0 0 3px #F1212F` };
    if (number >= 90)
      return { backgroundColor: "#0ACF83", boxShadow: `0 0 3px #0ACF83` };
    return { backgroundColor: "#E0E0E2", boxShadow: `0 0 3px #e0e0e2` };
  };

  const { backgroundColor, boxShadow } =
    getBackgroundColorAndShadow(randomNewsNumber);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < randomNewsNumber) return prev + 1;
        clearInterval(interval);
        return randomNewsNumber;
      });
    }, 10);
    return () => clearInterval(interval);
  }, [randomNewsNumber]);

  // Toggle the visibility of PopupDislike
  const handleDislikeClick = () => {
    setShowDislikePopup((prev) => !prev);
    setDislikeActive((prev) => !prev); 
    setShowDislikeGif(true); 
    setTimeout(() => setShowDislikeGif(false), 3000); 
  };

  const handleLikeClick = () => {
    setLikeActive((prev) => !prev); 
    setShowLikeGif(true); 
    setTimeout(() => setShowLikeGif(false), 3000); 
  };

  return (
    <div
      id="PopupContainer"
      style={{
        backgroundImage: `url(${BackgroundPopupLines})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        id="closebtn"
        onClick={onClose}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === "Enter" && onClose()}
      >
        <img src={CloseBtn} alt="Close Button" />
      </div>

      {/* Conditional Rendering based on showDislikePopup */}
      {!showDislikePopup ? (
        <div className="contentWrapper">
          <div id="progressBarPopup">
            <div id="ProgressBarTop">
              <p id="ProgressBarTopData">{randomNewsNumber}%</p>
              <p id="ProgressBarBottomData">ACCURACY</p>
            </div>
            <div id="ProgressBarBottom">
              <div
                className="progressBarBottomIndicator glowing-background"
                style={{
                  width: `${randomNewsNumber}%`,
                  backgroundColor,
                  boxShadow,
                }}
              ></div>
            </div>
          </div>

          <div id="ArticlePopup">
            <SearchAgain
              onClose={onClose}
              image={SearchImg}
              text="Search Again"
            />
            <ReadFullArticle link={link} truthValue={truthValue} />
          </div>
        </div>
      ) : (
        <div className="contentWrapper">
          <PopupDislike onClose={() => setShowDislikePopup(false)} />
        </div>
      )}

      <div className="feedbackSection">
        <p>How was the response?</p>
        <div className="feedbackSectionBtn">
          <div
            className={`FeedbackBtnContainer ${likeActive ? "active" : ""}`}
          >
            <FeedbackBtn
              Image={thumbsup}
              text="Like"
              onClick={handleLikeClick}
            />
          </div>
          <div
            className={`FeedbackBtnContainer ${dislikeActive ? "active" : ""}`}
          >
            <FeedbackBtn
              Image={thumbsdown}
              text="Dislike"
              onClick={handleDislikeClick}
              click={handleDislikeClick}
            />
          </div>
        </div>
      </div>

      <div className="MistakeContainer">
        <p>TruthLens can make mistakes. Verify important news.</p>
      </div>
    </div>
  );
};

export default Popup;
