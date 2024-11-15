import React from "react";

const DislikePopupSubmitBtn = ({ onClose, text, image }) => {
  return (
    <div
      id="ReadFullArticleContainer"
      style={{ width: "130px" }}
      onClick={onClose}
    >
      <a href="#" style={{ textDecoration: "none" }}>
        <button>{text}</button>
      </a>
    </div>
  );
};

export default DislikePopupSubmitBtn;
