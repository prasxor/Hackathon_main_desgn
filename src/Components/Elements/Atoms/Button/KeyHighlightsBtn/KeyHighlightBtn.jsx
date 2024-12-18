import React, { useState } from "react";
import "./KeyHighlightBtn.css";

const KeyHighlightBtn = ({ image, text, onClick }) => {
  const [rotation, setRotation] = useState(0);

  // Updated handleClick to handle both image rotation and onClick
  const handleClick = () => {
    setRotation((prevRotation) => prevRotation + 720); // Rotate by 720 degrees
    if (onClick) onClick(); // Trigger the onClick function passed from the parent
  };

  return (
    <div className="KeyHighlightBtnMain">
      {/* Apply handleClick to the entire button */}
      <button onClick={handleClick}>
        <img
          src={image}
          alt=""
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: "transform 1s ease-in-out",
          }}
        />
        <span>{text}</span>
      </button>
    </div>
  );
};

export default KeyHighlightBtn;




// import React, { useState } from "react";
// import "./KeyHighlightBtn.css";

// const KeyHighlightBtn = ({ image, text, onClick }) => {
//   const [rotation, setRotation] = useState(0); // Track the rotation angle

//   const handleClick = () => {
//     setRotation((prevRotation) => prevRotation + 720); // Increment by 720 degrees each time
//   };

//   return (
//     <div className="KeyHighlightBtnMain">
//       <button onClick={handleClick}>
//         <img
//           src={image}
//           alt=""
//           style={{
//             transform: `rotate(${rotation}deg)`, // Correctly apply rotation
//             transition: "transform 1s ease-in-out",
//           }}
//         />
//         <a href="#">{text}</a>
//       </button>
//     </div>
//   );
// };

// export default KeyHighlightBtn;

