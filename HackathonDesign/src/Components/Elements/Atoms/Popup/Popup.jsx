import React, { useEffect, useState } from "react";
import "./Popup.css";
import CloseBtn from "../../../../assets/closebtn.png";
import ReadFullArticle from "../ReadFullArticle/ReadFullArticle";
import SearchAgain from "../../SearchAgain/SearchAgain";
import FeedbackBtn from "../Button/FeedbackBtn/FeedbackBtn";
import thumbsup from "../../../../assets/thumsup.png";
import thumbsdown from "../../../../assets/thumsdown.png";
import BackgroundPopupLines from "../../../../assets/popupBackground.png";
import SearchImg from "../../../../assets/Searchicon.png"

const Popup = ({ truthValue, link, onClose }) => {
  const [progress, setProgress] = useState(0);
  const factsValue = truthValue;
  const RealNewsNumbers = [];
  for (let i = 94; i <= 100; i += 0.1) {
    RealNewsNumbers.push(parseFloat(i.toFixed(1)));
  }

  const FakeNewsNumbers = [];
  for (let i = 3; i <= 8; i += 0.1) {
    FakeNewsNumbers.push(parseFloat(i.toFixed(1)));
  }

  console.log(FakeNewsNumbers);

  let randomNewsNumber = 0;

  const normalizedFactsValue = factsValue.trim().toLowerCase();

  if (normalizedFactsValue === "true" || normalizedFactsValue === "true.") {
    const randomIndex = Math.floor(Math.random() * RealNewsNumbers.length);
    randomNewsNumber = RealNewsNumbers[randomIndex];
  } else if (normalizedFactsValue === "false") {
    const randomIndex = Math.floor(Math.random() * FakeNewsNumbers.length);
    randomNewsNumber = FakeNewsNumbers[randomIndex];
  }


  const getBackgroundColorAndShadow = (randomNewsNumber) => {
    let backgroundColor = "#E0E0E2";
    let boxShadow = "0 0 3px #e0e0e2, 0 0 1px #e0e0e2, 0 0 3px #e0e0e2, 0 0 5px #e0e0e2, 2px 2px 1px #e0e0e2, -2px -2px 1px #e0e0e2, 0 0 15px rgba(224, 224, 226, 1)";

    if (randomNewsNumber <= 10) {
      backgroundColor = "#F1212F";
      boxShadow = `0 0 3px #F1212F, 0 0 1px #F1212F, 0 0 3px #F1212F, 0 0 5px #F1212F, 2px 2px 1px #F1212F, -2px -2px 1px #F1212F, 0 0 15px rgba(241, 33, 47, 1)`;
    } else if (randomNewsNumber >= 90) {
      backgroundColor = "#0ACF83";
      boxShadow = `0 0 3px #0ACF83, 0 0 1px #0ACF83, 0 0 3px #0ACF83, 0 0 5px #0ACF83, 2px 2px 1px #0ACF83, -2px -2px 1px #0ACF83, 0 0 15px rgba(10, 207, 131, 1)`;
    }
    return { backgroundColor, boxShadow };
  };

  const { backgroundColor, boxShadow } = getBackgroundColorAndShadow(randomNewsNumber);

  useEffect(() => {
    let interval;
    if (progress === 0) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress < randomNewsNumber) {
            return prevProgress + 1;
          } else {
            clearInterval(interval);
            return randomNewsNumber;
          }
        });
      }, 10);
    }

    return () => clearInterval(interval);
  }, [randomNewsNumber]);

  return (
    <div
      id="PopupContainer"
      style={{
        backgroundImage: `url(${BackgroundPopupLines})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
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
        backgroundColor: backgroundColor,
        boxShadow: boxShadow, 
      }}
    ></div>
        </div>
      </div>

      <div id="ArticlePopup">
        <SearchAgain onClose={onClose} image={SearchImg} text={"Search Again"}/>
        <ReadFullArticle link={link} truthValue={truthValue} />
      </div>

      <div className="feedbackSection">
        <p>How was the response?</p>
        <div className="feedbackSectionBtn">
          <FeedbackBtn Image={thumbsup} text={"Like"} />
          <FeedbackBtn Image={thumbsdown} text={"Dislike"} />
        </div>
      </div>

      <div className="MistakeContainer">
        <p>TruthLens can make mistakes. Verify important news.</p>
      </div>
    </div>
  );
};

export default Popup;
