import React from "react";
import "./KeyHighlightBtn.css";

const KeyHighlightBtn = ({ image, text }) => {
  return (
    <div className="KeyHighlightBtnMain">
      <button>
        <img src={image} alt="" />
        <a href="#">{text}</a>
      </button>
    </div>
  );
};

export default KeyHighlightBtn;
