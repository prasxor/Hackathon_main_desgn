import React from "react";
import "./NewsErrorBtn.css";
import backBtn from "../../../../../assets/left arrow.png";

const NewErrorBtn = ({ title, onClick }) => {
  return (
    <div className="NewErrorBtnContainer" onClick={onClick}>
      <div className="NewErrorBtnSubContainerLeft">
        <img src={backBtn} alt="backbtn" />
      </div>
      <div className="NewErrorBtnSubContainerRight">
        <button type="submit">{title}</button>
      </div>
    </div>
  );
};

export default NewErrorBtn;
