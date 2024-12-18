

import React from "react";
import "./PopupDislike.css";
import DislikeBtn from "../../../../assets/closebtn.png";
import PopupDislikeMiniCollection from "../PopupDislikeMiniCollection/PopupDislikeMinicollection";
import DislikePopupSubmitBtn from "../../Atoms/Button/DislikePopupSumbitBtn/DislikePopupSubmitBtn";

const PopupDislike = ({ onClose,click }) => { // Add onClose prop
  return (
    <div className="PopupDislikeMainContainer">
      <div className="PopupDislikeHeading">
        {/* <div className="empty"></div> */}
        <div className="PopupDislikeHeadingPara">
          <p>Provide Feedback</p>
        </div>
        {/* <div className="PopupDislikeHeadingImage" onClick={click} role="button" tabIndex={0}>
          <img src={DislikeBtn} alt="Close" />
        </div> */}
      </div>
      <div className="PopupDislikeForm">
        <form action="#" className="PopupDislikeFormMainContainer">
          <div className="PopupDislikeFormContainer">
            <PopupDislikeMiniCollection />
          </div>
          <div className="PopupDislikeFormInputContainer">
            <div className="PopupDislikeFormInputTop">
              <input type="text" placeholder="Explain briefly (optional)" />
            </div>
            <div className="PopupDislikeFormInputTop">
              <DislikePopupSubmitBtn text={"Submit"} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupDislike;
