import React from "react";
// import "../BottomBtn/BottomBtn.css";
import "./TopBtn.css"


const TopBtn = ({ title }) => {
  return (
    <div>
      <button className="SearchTopBtnBtn" type="submit">
        {title}
      </button>
    </div>
  );
};

export default TopBtn;
