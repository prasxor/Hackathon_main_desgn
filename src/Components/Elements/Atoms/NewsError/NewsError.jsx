// import React from "react";
import "./NewsError.css";
import NewErrorBtn from '../Button/NewsErrorBtn/NewErrorBtn'
import CartoonBlinkingEyes from '../../../../assets/eye-6662.gif'
// import home from ''


// const NewsError = () => {
//   return (
//     <div className="newsError">
//       <div className="CartoonBlinkingEyes">
//         <img src={CartoonBlinkingEyes} alt="" />
//       </div>
//       <div className="NewsErrormsg">
//         <p className="NewsErrormsgtop">OUR PRODUCT</p>
//         <p className="NewsErrormsgmiddle">IS LAUNCHING</p>
//         <pre className="NewsErrormsgbottom">VERY S         N...</pre>
//       </div>
//       <div className="NewsErrorMsgBtn">
//         <NewErrorBtn title={"Back To Home"}/>
//       </div>
//     </div>
//   );
// };

// export default NewsError;

import React from "react";
import { useNavigate } from "react-router-dom";

const NewsError = () => {
  const navigate = useNavigate();

  const handleHomeRedirect = () => {
    // navigate("../../../Pages/Home/Home"); 
    navigate("/"); 
  };

  return (
    <div className="newsError">
      <div className="CartoonBlinkingEyes">
        <img src={CartoonBlinkingEyes} alt="Cartoon Blinking Eyes" />
      </div>
      <div className="NewsErrormsg">
        <p className="NewsErrormsgtop">OUR PRODUCT</p>
        <p className="NewsErrormsgmiddle">IS LAUNCHING</p>
        <pre className="NewsErrormsgbottom">VERY S         N...</pre>
      </div>
      <div className="NewsErrorMsgBtn">
        <NewErrorBtn title={"Back To Home"} onClick={handleHomeRedirect} />
      </div>
    </div>
  );
};

export default NewsError;
