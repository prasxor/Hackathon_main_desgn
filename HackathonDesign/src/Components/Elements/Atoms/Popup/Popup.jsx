import React, { useEffect, useState } from "react";
import "./Popup.css";
import CloseBtn from "../../../../assets/closebtn.png";
import ReadFullArticle from "../ReadFullArticle/ReadFullArticle";
import SearchAgain from "../../SearchAgain/SearchAgain";
import FeedbackBtn from "../Button/FeedbackBtn/FeedbackBtn";
import thumbsup from "../../../../assets/thumsup.png";
import thumbsdown from "../../../../assets/thumsdown.png";
import BackgroundPopupLines from "../../../../assets/popupBackground.png";

const Popup = ({ truthValue, link, onClose }) => {
  const [progress, setProgress] = useState(0);
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
        backgroundSize: 'cover',
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
              backgroundColor: '#E0E0E2',
            }}
          ></div>
        </div>
      </div>

      <div id="ArticlePopup">
        <SearchAgain onClose={onClose} />
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
