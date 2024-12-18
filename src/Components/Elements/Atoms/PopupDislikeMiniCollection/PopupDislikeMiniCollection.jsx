import React from "react";
import "./PopupDislikeMiniCollection.css";
import PopupDislikeSelectionCards from "../PopupdislikeSelectionCards/PopupDislikeselectionCards";

const PopupDislikeMiniCollection = () => {
  const list = [
    "Misinformation",
    "Inaccurate",
    "Biased",
    "Outdated",
    "Irrelevant Sources",
    "Technical Issue",
    "Other",
  ];

  return (
    <div className="PopupDislikeCollection">
      {list.map((item, index) => (
        <PopupDislikeSelectionCards key={index} text={item} />
      ))}
    </div>
  );
};

export default PopupDislikeMiniCollection;
