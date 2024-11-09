// import React from "react";
// import "./KeyHighlightBtn.css";

// const KeyHighlightBtn = ({ image, text }) => {
//   return (
//     <div className="KeyHighlightBtnMain">
//       <button>
//         <img src={image} alt="" />
//         <a href="#">{text}</a>
//       </button>
//     </div>
//   );
// };

// export default KeyHighlightBtn;


import React, { useState } from "react";
import "./KeyHighlightBtn.css";

const KeyHighlightBtn = ({ image, text }) => {
  const [rotation, setRotation] = useState(0); // Track the rotation angle

  const handleClick = () => {
    setRotation((prevRotation) => prevRotation + 720); // Increment by 720 degrees each time
  };

  return (
    <div className="KeyHighlightBtnMain">
      <button onClick={handleClick}>
        <img
          src={image}
          alt=""
          style={{
            transform: `rotate(${rotation}deg)`, // Correctly apply rotation
            transition: "transform 1s ease-in-out",
          }}
        />
        <a href="#">{text}</a>
      </button>
    </div>
  );
};

export default KeyHighlightBtn;

