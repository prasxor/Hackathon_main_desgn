import React, { useState } from "react";
import "./PopupDislikeSelectionCards.css";

const PopupDislikeSelectionCards = ({text}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true); 
  };

  return (
    <div
      className={`PopupDislikeMiniCards ${isClicked ? "active" : ""}`}
      onClick={handleClick}
    >
      <p>{text}</p>
    </div>
  );
};

export default PopupDislikeSelectionCards;
