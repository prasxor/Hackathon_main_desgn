import "./MainHome.css";
import RealText from "../../../assets/RealText.png";
import FakeText from "../../../assets/FakeText.png";
import Arrow from "../../../assets/arrow.png";
import SearchInput from "../../Elements/Atoms/SearchInput/SearchInput";
import { useState } from "react";
import Popup from "../Atoms/Popup/Popup";

const MainHome = ({ onDataReceived }) => {
  const [showPopup, setShowPopup] = useState(false); // State to manage Popup visibility
  const [truthValue, setTruthValue] = useState(""); // State to hold truth value
  const [link, setLink] = useState(""); // State to hold article link

  // Handler to receive data and show Popup
  const handleDataReceived = (truthValue, link) => {
    setTruthValue(truthValue);
    setLink(link);
    setShowPopup(true); // Show Popup when data is received
  };

  // Handler to close Popup
  const handleClosePopup = () => {
    setShowPopup(false); // Hide Popup when close button is clicked
  };

  return (
    <>
      <div className="mainHomeContainer">
        
        {/* {showPopup ? ( 
          <Popup truthValue={truthValue} link={link} onClose={handleClosePopup} /> 
        ) : ( */}
        {/* <> */}
        <div className="mainHomeTopContent">
          {/* <div className="mainHomeTopFirstTitle">
                <img src={RealText} alt="Real" />
                <h2>Or</h2>
                <img src={FakeText} alt="Fake" />
              </div> */}
          <div className="mainHomeTopSecondTitle">
            <h1>Verify News With One Click.</h1>
          </div>
          <div className="mainHomeTopThirdTitle">
            <p>Enter a headline to uncover the truth.</p>
          </div>
          <div className="mainHomeTopFourthArrow">
            <img src={Arrow} alt="" />
          </div>
        </div>
        <div className="mainHomeBottomInput">
          <SearchInput
            onDataReceived={handleDataReceived}
            btnTitle={"Search"}
            searchPlaceholder={"Paste Url or Article"}
          />
        </div>
        {/* </> */}
        {/* )} */}
      </div>
    </>
  );
};

export default MainHome;
