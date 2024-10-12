// import "./MainHome.css";
// import RealText from "../../../assets/RealText.png";
// import FakeText from "../../../assets/FakeText.png";
// import SearchInput from "../../Elements/Atoms/SearchInput/SearchInput";
// import { useEffect } from "react";
// import Popup from "../Atoms/Popup/Popup";

// const MainHome = ({ onDataReceived }) => {
//   return (
//     <>
//     <div className="mainHomeContainer">
//       <div className="mainHomeTopContent">
//         <div className="mainHomeTopFirstTitle">
//           <img src={RealText} alt="" />
//           <h2>Or</h2>
//           <img src={FakeText} alt="" />
//         </div>
//         <div className="mainHomeTopSecondTitle">
//           <h1>Uncover the Facts!</h1>
//         </div>
//         <div className="mainHomeTopThirdTitle">
//           <p>
//             We help users determine the authenticity of news articles by
//             providing fact-checking tools and resources.
//           </p>
//         </div>
//       </div>
//       <div className="mainHomeBottomInput">
//         <SearchInput onDataReceived={onDataReceived} btnTitle={'Search'} searchPlaceholder={"Paste News or article"} />
//       </div>
//     </div>
//     <Popup/>
//     </>
//   );
// };

// export default MainHome;


// MainHome.js
import "./MainHome.css"; // Import your CSS styles
import RealText from "../../../assets/RealText.png"; // Importing images
import FakeText from "../../../assets/FakeText.png";
import SearchInput from "../../Elements/Atoms/SearchInput/SearchInput";
import { useState } from "react"; // Importing useState for state management
import Popup from "../Atoms/Popup/Popup"; // Importing Popup component

const MainHome = ({ onDataReceived }) => {
  const [showPopup, setShowPopup] = useState(false); // State to manage Popup visibility
  const [truthValue, setTruthValue] = useState(''); // State to hold truth value
  const [link, setLink] = useState(''); // State to hold article link

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
        {showPopup ? ( // Conditionally render Popup or Main Home content
          <Popup truthValue={truthValue} link={link} onClose={handleClosePopup} /> // Pass onClose prop
        ) : (
          <>
            <div className="mainHomeTopContent">
              <div className="mainHomeTopFirstTitle">
                <img src={RealText} alt="Real" />
                <h2>Or</h2>
                <img src={FakeText} alt="Fake" />
              </div>
              <div className="mainHomeTopSecondTitle">
                <h1>Uncover the Facts!</h1>
              </div>
              <div className="mainHomeTopThirdTitle">
                <p>
                  We help users determine the authenticity of news articles by
                  providing fact-checking tools and resources.
                </p>
              </div>
            </div>
            <div className="mainHomeBottomInput">
              <SearchInput onDataReceived={handleDataReceived} btnTitle={'Search'} searchPlaceholder={"Paste News or article"} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MainHome;



