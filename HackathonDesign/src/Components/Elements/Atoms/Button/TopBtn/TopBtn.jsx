import React from "react";
import "./TopBtn.css";

const TopBtn = ({ title }) => {
  return (
    <div>
      <button className="SearchInputContainerFormBtn" type="submit">
        {title}
      </button>
    </div>
  );
};

export default TopBtn;
