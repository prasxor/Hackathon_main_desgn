import React from "react";
import "./bottomBtn.css";

const BottomBtn = ({ title }) => {
  return (
    <div>
      <button className="SearchInputContainerFormBtnBottom" type="submit">
        {title}
      </button>
    </div>
  );
};

export default BottomBtn;
