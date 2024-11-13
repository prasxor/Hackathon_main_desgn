import React from "react";
import "./FeedbackBtn.css";
// import Image1 from '../../../../../assets/thumsup.png'

const FeedbackBtn = ({ Image, text }) => {
  return (
    <div className="FeedBackBtnMainContainer">
      <img src={Image} alt="image" />
      <p>{text}</p>
    </div>
  );
};
import "./FeedbackBtn.css";

export default FeedbackBtn;
