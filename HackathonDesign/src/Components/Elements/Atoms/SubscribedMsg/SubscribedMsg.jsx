// import React from "react";
// import "./SubscribedMsg.css";

// const SubscribedMsg = ({ title }) => {
//   return (
//     <div className="SubscribedMsgContainer">
//       <p>Thank you for subscribing with</p>
//       <button className="SearchInputContainerSubBtn" type="submit">
//         {title}
//       </button>
//       <div className="SubscribedMsgSvgAndP">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="size-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
//           />
//         </svg>
//         <p>Please check your email for updates</p>
//       </div>
//     </div>
//   );
// };

// export default SubscribedMsg;
import React from "react";
import "./SubscribedMsg.css";

const SubscribedMsg = ({ title,msgAbove,messageData }) => {
  return (
    <div className="SubscribedMsgContainer">
      <p>{msgAbove}</p>
      <button className="SearchInputContainerSubBtn" type="submit">
        {title}
      </button>
      <div className="SubscribedMsgSvgAndP">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
        <p>{messageData}</p>
      </div>
    </div>
  );
};

export default SubscribedMsg;
