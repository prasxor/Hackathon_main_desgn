// import React from "react";
// import "./Popup.css";
// import CloseBtn from "../../../../assets/closebtn.png";
// import ReadFullArticle from "../ReadFullArticle/ReadFullArticle";
// import backgroundColorRed from "../../../../assets/backgroundRed.png";
// import backgroundColorGreen from "../../../../assets/backgroundGreen.png";
// import SearchAgain from "../../SearchAgain/SearchAgain";

// const Popup = ({ truthValue, link,onClose }) => {
//   const factsValue = truthValue;

//   const RealNewsNumbers = Array.from({ length: 51 }, (_, index) => 50 + index);
//   const FakeNewsNumbers = Array.from({ length: 50 }, (_, i) => i + 1);

//   let randomNewsNumber = 0;

//   console.log("Received truthValue:", factsValue);

//   const normalizedFactsValue = factsValue.trim().toLowerCase();

//   if (normalizedFactsValue === "true" || normalizedFactsValue === "true.") {
//     const randomIndex = Math.floor(Math.random() * RealNewsNumbers.length);
//     randomNewsNumber = RealNewsNumbers[randomIndex];
//     console.log("Random Index (True):", randomIndex);
//   } else if (normalizedFactsValue === "false") {
//     const randomIndex = Math.floor(Math.random() * FakeNewsNumbers.length);
//     randomNewsNumber = FakeNewsNumbers[randomIndex];
//     console.log("Random Index (False):", randomIndex);
//   } else {
//     console.log("Unexpected truthValue:", factsValue);
//   }

//   console.log("Random News Number:", randomNewsNumber);

//   const getBackgroundColor = (randomNewsNumber) => {
//     if (randomNewsNumber < 30) {
//       return "#F1212F";
//     } else if (randomNewsNumber < 50) {
//       return "#F17821";
//     } else if (randomNewsNumber < 70) {
//       return "#214FF1";
//     } else if (randomNewsNumber < 90) {
//       return "#F1DC21";
//     } else {
//       return "#0ACF83";
//     }
//   };

//   const capitalizeFirstLetter = (string) => {
//     if (!string) return "";
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   };

//   const backgroundImage =
//     randomNewsNumber < 50
//       ? `url(${backgroundColorRed})`
//       : `url(${backgroundColorGreen})`;

//   return (
//     <div
//       id="PopupContainer"
//       style={{
//         backgroundImage,
//         backgroundPosition: "center",
//         height: "700px",
//         width: "100%",
//       }}
//     >
//       <div id="closebtn" onClick={onClose}>
//         <img src={CloseBtn} alt="closebtn" />
//       </div>
//       <div id="trueOrFalse">
//         <p>{capitalizeFirstLetter(factsValue)}</p>
//       </div>
//       <div id="progressBarPopup">
//         <div id="ProgressBarTop">
//           <p>We Found that, It's {randomNewsNumber}% Accurate</p>
//         </div>
//         <div id="ProgressBarBottom">
//           <div
//             className="progressBarBottomIndicator"
//             style={{
//               width: `${randomNewsNumber}%`,
//               backgroundColor: getBackgroundColor(randomNewsNumber),
//             }}
//           ></div>
//         </div>
//       </div>
//       <div id="ArticlePopup">
//         <ReadFullArticle link={link} truthValue={truthValue} />
//         <SearchAgain />
//       </div>
//       <div className="MistakeContainer">
//         <p>"TruthLens can make mistakes. Verify important news."</p>
//       </div>
//     </div>
//   );
// };

// export default Popup;

// Popup.js
// import React, { useEffect, useState } from "react";
// import "./Popup.css"; // Importing CSS for Popup
// import CloseBtn from "../../../../assets/closebtn.png"; // Importing close button image
// import ReadFullArticle from "../ReadFullArticle/ReadFullArticle"; // Importing ReadFullArticle component
// import backgroundColorRed from "../../../../assets/backgroundRed.png"; // Importing background images
// import backgroundColorGreen from "../../../../assets/backgroundGreen.png";
// import SearchAgain from "../../SearchAgain/SearchAgain"; // Importing SearchAgain component

// const Popup = ({ truthValue, link, onClose }) => { // Receiving truthValue, link, and onClose as props
//   const factsValue = truthValue;

//   const RealNewsNumbers = Array.from({ length: 51 }, (_, index) => 50 + index);
//   const FakeNewsNumbers = Array.from({ length: 50 }, (_, i) => i + 1);

//   let randomNewsNumber = 0;

//   const normalizedFactsValue = factsValue.trim().toLowerCase();

//   if (normalizedFactsValue === "true" || normalizedFactsValue === "true.") {
//     const randomIndex = Math.floor(Math.random() * RealNewsNumbers.length);
//     randomNewsNumber = RealNewsNumbers[randomIndex];
//   } else if (normalizedFactsValue === "false") {
//     const randomIndex = Math.floor(Math.random() * FakeNewsNumbers.length);
//     randomNewsNumber = FakeNewsNumbers[randomIndex];
//   }

//   const getBackgroundColor = (randomNewsNumber) => {
//     if (randomNewsNumber < 30) {
//       return "#F1212F"; // Red
//     } else if (randomNewsNumber < 50) {
//       return "#F17821"; // Orange
//     } else if (randomNewsNumber < 70) {
//       return "#214FF1"; // Blue
//     } else if (randomNewsNumber < 90) {
//       return "#F1DC21"; // Yellow
//     } else {
//       return "#0ACF83"; // Green
//     }
//   };

//   const backgroundImage = randomNewsNumber < 50
//     ? `url(${backgroundColorRed})`
//     : `url(${backgroundColorGreen})`;

//     useEffect(() => {
//       // Animate the progress bar when the component mounts
//       setTimeout(() => {
//         setProgress(randomNewsNumber);
//       }, 100); // Adding a slight delay for smoother animation
//     }, [randomNewsNumber]);

//   return (
//     <div
//       id="PopupContainer"
//       style={{
//         backgroundImage,
//         backgroundPosition: "center",
//         height: "700px",
//         width: "143%",
//       }}
//     >
//       <div id="closebtn" onClick={onClose} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && onClose()}>
//         <img src={CloseBtn} alt="closebtn" />
//       </div>
//       <div id="trueOrFalse">
//         <p>{factsValue}</p>
//       </div>
//       <div id="progressBarPopup">
//         <div id="ProgressBarTop">
//           <p>We Found that, It's {randomNewsNumber}% Accurate</p>
//         </div>
//         <div id="ProgressBarBottom">
//           <div
//             className="progressBarBottomIndicator"
//             style={{
//               width: `${randomNewsNumber}%`,
//               backgroundColor: getBackgroundColor(randomNewsNumber),
//             }}
//           ></div>
//         </div>
//       </div>
//       <div id="ArticlePopup">
//         <ReadFullArticle link={link} truthValue={truthValue} />
//         <SearchAgain onClose={onClose} />
//       </div>
//       <div className="MistakeContainer">
//         <p>"TruthLens can make mistakes. Verify important news."</p>
//       </div>
//     </div>
//   );
// };

// export default Popup;

import React, { useEffect, useState } from "react";
import "./Popup.css";
import CloseBtn from "../../../../assets/closebtn.png";
import ReadFullArticle from "../ReadFullArticle/ReadFullArticle";
import backgroundColorRed from "../../../../assets/backgroundRed.png";
import backgroundColorGreen from "../../../../assets/backgroundGreen.png";
import SearchAgain from "../../SearchAgain/SearchAgain";

const Popup = ({ truthValue, link, onClose }) => {
  const [progress, setProgress] = useState(0); // Initialize progress to 0
  const factsValue = truthValue;

  const RealNewsNumbers = Array.from({ length: 51 }, (_, index) => 50 + index);
  const FakeNewsNumbers = Array.from({ length: 50 }, (_, i) => i + 1);

  let randomNewsNumber = 0;

  const normalizedFactsValue = factsValue.trim().toLowerCase();

  if (normalizedFactsValue === "true" || normalizedFactsValue === "true.") {
    const randomIndex = Math.floor(Math.random() * RealNewsNumbers.length);
    randomNewsNumber = RealNewsNumbers[randomIndex];
  } else if (normalizedFactsValue === "false") {
    const randomIndex = Math.floor(Math.random() * FakeNewsNumbers.length);
    randomNewsNumber = FakeNewsNumbers[randomIndex];
  }

  const getBackgroundColor = (randomNewsNumber) => {
    if (randomNewsNumber < 30) {
      return "#F1212F";
    } else if (randomNewsNumber < 50) {
      return "#F17821";
    } else if (randomNewsNumber < 70) {
      return "#214FF1";
    } else if (randomNewsNumber < 90) {
      return "#F1DC21";
    } else {
      return "#0ACF83";
    }
  };

  const backgroundImage =
    randomNewsNumber < 50
      ? `url(${backgroundColorRed})`
      : `url(${backgroundColorGreen})`;

  useEffect(() => {
    // Animate the progress bar only once when the component mounts
    let interval;
    if (progress === 0) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < randomNewsNumber) {
            return prevProgress + 1; // Increment progress
          } else {
            clearInterval(interval); // Stop the interval when target reached
            return randomNewsNumber; // Ensure it stops at the right number
          }
        });
      }, 10); // Speed of the progress animation
    }

    return () => clearInterval(interval); // Cleanup on unmount
  }, [randomNewsNumber]);

  return (
    <div
      id="PopupContainer"
      style={{
        backgroundImage,
        backgroundPosition: "center",
        height: "700px",
        width: "143%",
      }}
    >
      <div
        id="closebtn"
        onClick={onClose}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === "Enter" && onClose()}
      >
        <img src={CloseBtn} alt="closebtn" />
      </div>
      <div id="trueOrFalse">
        <p>{factsValue.charAt(0).toUpperCase() + factsValue.slice(1)}</p>
      </div>
      <div id="progressBarPopup">
        <div id="ProgressBarTop">
          <p>We Found that, It's {randomNewsNumber}% Accurate</p>
        </div>
        <div id="ProgressBarBottom">
          <div
            className="progressBarBottomIndicator"
            style={{
              width: `${randomNewsNumber}%`, // Updated to reflect the animated progress
              backgroundColor: getBackgroundColor(randomNewsNumber),
            }}
          ></div>
        </div>
      </div>
      <div id="ArticlePopup">
        <ReadFullArticle link={link} truthValue={truthValue} />
        <SearchAgain onClose={onClose} />
      </div>
      <div className="MistakeContainer">
        <p>"TruthLens can make mistakes. Verify important news."</p>
      </div>
    </div>
  );
};

export default Popup;
