

import React from "react";
import "./FeedbackBtn.css";

const FeedbackBtn = ({ Image, text, onClick }) => {
  return (
    <div className="FeedBackBtnMainContainer" onClick={onClick}>
      <img src={Image} alt={text} />
      <p>{text}</p>
    </div>
  );
};

export default FeedbackBtn;

