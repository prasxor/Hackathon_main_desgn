import React, { useState } from "react";
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
  const [showDislikePopup, setShowDislikePopup] = useState(false);
  const [likeActive, setLikeActive] = useState(false);
  const [dislikeActive, setDislikeActive] = useState(false);

  // Real news score is fixed
  const RealNewsNumber = 100;

  // Array of fake news scores from 5 to 45 in 0.1 increments
  const FakeNewsNumbers = Array.from({ length: 400 }, (_, i) => (5 + i * 0.1).toFixed(1)).map(Number);

  // Function to pick a random fake news score
  function getRandomFakeNewsNumber() {
    const randomIndex = Math.floor(Math.random() * FakeNewsNumbers.length);
    return FakeNewsNumbers[randomIndex];
  }

  // Determine the displayed news score based on truth value
  const normalizedFactsValue = truthValue.trim().toLowerCase();
  const newsScore = normalizedFactsValue === "true" || normalizedFactsValue === "true."
    ? RealNewsNumber
    : getRandomFakeNewsNumber();

  // Determine background color and shadow based on news score
  const getBackgroundColorAndShadow = (number) => {
    if (number <= 50) return { backgroundColor: "#F1212F", boxShadow: `0 0 3px #F1212F` };
    if (number >= 90) return { backgroundColor: "#0ACF83", boxShadow: `0 0 3px #0ACF83` };
    return { backgroundColor: "#E0E0E2", boxShadow: `0 0 3px #e0e0e2` };
  };

  const { backgroundColor, boxShadow } = getBackgroundColorAndShadow(newsScore);

  const handleDislikeClick = () => {
    setShowDislikePopup((prev) => !prev);
    setDislikeActive((prev) => !prev);
  };

  const handleLikeClick = () => {
    setLikeActive((prev) => !prev);
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

      {!showDislikePopup ? (
        <div className="contentWrapper">
          <div id="progressBarPopup">
            <div id="ProgressBarTop">
              <p id="ProgressBarTopData">{newsScore}%</p>
              <p id="ProgressBarBottomData">ACCURACY</p>
            </div>
            <div id="ProgressBarBottom">
              <div
                className="progressBarBottomIndicator glowing-background"
                style={{
                  width: `${newsScore}%`,
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
