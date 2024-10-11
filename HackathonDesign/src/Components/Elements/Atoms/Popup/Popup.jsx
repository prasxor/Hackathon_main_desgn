import React from "react";
import "./Popup.css";
import CloseBtn from "../../../../assets/closebtn.png";
import ReadFullArticle from "../ReadFullArticle/ReadFullArticle";
import backgroundColorRed from '../../../../assets/backgroundRed.png';
import backgroundColorGreen from '../../../../assets/backgroundGreen.png';

const Popup = ({ truthValue, link }) => {
  const factsValue = truthValue;


  const RealNewsNumbers = Array.from({ length: 51 }, (_, index) => 50 + index);
  const FakeNewsNumbers = Array.from({ length: 50 }, (_, i) => i + 1);


  let randomNewsNumber = 0;


  console.log("Received truthValue:", factsValue);


  const normalizedFactsValue = factsValue.trim().toLowerCase();

  if (normalizedFactsValue === "true" || normalizedFactsValue === "true.") {
    const randomIndex = Math.floor(Math.random() * RealNewsNumbers.length);
    randomNewsNumber = RealNewsNumbers[randomIndex];
    console.log("Random Index (True):", randomIndex); 
  } else if (normalizedFactsValue === "false") {
    const randomIndex = Math.floor(Math.random() * FakeNewsNumbers.length);
    randomNewsNumber = FakeNewsNumbers[randomIndex];
    console.log("Random Index (False):", randomIndex);
  } else {
    console.log("Unexpected truthValue:", factsValue); 
  }

  console.log("Random News Number:", randomNewsNumber); 


  const getBackgroundColor = (randomNewsNumber) => {
    if (randomNewsNumber < 50) {
      return '#F1212F'; 
    } else if (randomNewsNumber < 60) {
      return '#F17821';
    } else if (randomNewsNumber < 80) {
      return '#F1DC21'; 
    } else {
      return '#0ACF83'; 
    }
  };

 
  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Determine the background image based on randomNewsNumber
  const backgroundImage =
    randomNewsNumber < 50
      ? `url(${backgroundColorRed})` // Background for less than 50
      : `url(${backgroundColorGreen})`; // Background for 50 or greater

  return (
    <div
      id="PopupContainer"
      style={{
        backgroundImage,
        backgroundPosition: "center", // Ensure the background covers the entire area
        height: "800px", // Set a specific height if needed
        width: "70%", // Adjust width as needed

      }}
    >
      <div id="closebtn">
        <img src={CloseBtn} alt="closebtn" />
      </div>
      <div id="trueOrFalse">
        <p>{capitalizeFirstLetter(factsValue)}</p>
      </div>
      <div id="progressBarPopup">
        <div id="ProgressBarTop">
          <p>We Found that, It's {randomNewsNumber}% Accurate</p>
        </div>
        <div id="ProgressBarBottom">
          <div
            className="progressBarBottomIndicator"
            style={{
              width: `${randomNewsNumber}%`,
              backgroundColor: getBackgroundColor(randomNewsNumber),
            }}
          ></div>
        </div>
      </div>
      <div id="ArticlePopup">
        <ReadFullArticle link={link} truthValue={truthValue} />
      </div>
      <div className="MistakeContainer">
        <p>"TruthLens can make mistakes. Verify important news."</p>
      </div>
    </div>
  );
};

export default Popup;
