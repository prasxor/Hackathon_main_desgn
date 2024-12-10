// import React, { useState } from "react";
// import "./FifthSection.css";
// // import SearchInput from "../Atoms/SearchInput/SearchInput";
// import SubscribedMsg from "../Atoms/SubscribedMsg/SubscribedMsg";
// import EmailInput from "../Atoms/EmailInput/EmailInput";
// import FaqSection from "../Atoms/FAQSection/FaqSection";

// const FifthSection = () => {
//   const [subscribed, setSubscribed] = useState(false);
//   const [email, setEmail] = useState('');

//   const handleSubscribe = (inputEmail) => {
//     setEmail(inputEmail); // Store the email
//     setSubscribed(true); // Update subscription status
//     // Optionally store email in local storage or send it to a backend
//     localStorage.setItem('subscribedEmail', inputEmail);
//   };

//   return (
//     <div id="FifthSectionMainContainer">
//       <div id="FifthSectionMainContainerTop">
//         <p className="SecondHomePara FourthHomeSecondPara">
//           Sign Up For Email Updates
//         </p>
//         <p id="FourthHomeThirdPara">
//           Keep up with fake news and product features.
//         </p>
//       </div>
//       <div className="SubBtnMain">
//         {!subscribed ? (
//           <EmailInput
//             btnTitle={"Subscribe"}
//             searchPlaceholder={"Email address"}
//             onSubscribe={handleSubscribe}
//           />
//         ) : (
//           <SubscribedMsg title={email} />
//         )}
//       </div>
//     </div>
//   );
// };

// export default FifthSection;

import React, { useState } from "react";
import "./FifthSection.css";
// import SearchInput from "../Atoms/SearchInput/SearchInput";
import SubscribedMsg from "../Atoms/SubscribedMsg/SubscribedMsg";
import EmailInput from "../Atoms/EmailInput/EmailInput";
import FaqSection from "../Atoms/FAQSection/FaqSection";

const FifthSection = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  // Add your Google Apps Script URL here
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxtFK-X15xG6DjCouCZ_7RijryzYfHKVXVQihhrVGYPQM1GAad1RdAfGPuVyuwYtZ4h/exec"; // Replace with your script URL

  const handleSubscribe = (inputEmail) => {
    setEmail(inputEmail); // Store the email
    setSubscribed(true); // Update subscription status

    // Send email to Google Sheets using fetch
    fetch(scriptURL, {
      method: "POST",
      body: new URLSearchParams({
        email: inputEmail, // Send the email in the POST request body
      }),
    })
      .then((response) => {
        console.log("Success:", response);
        // Optionally store email in local storage or notify the user
        localStorage.setItem("subscribedEmail", inputEmail);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div id="FifthSectionMainContainer">
      <div id="FifthSectionMainContainerTop">
        <p className="SecondHomePara FourthHomeSecondPara">
          Sign Up For Email Updates
        </p>
        <p id="FourthHomeThirdPara">
          Keep up with fake news and product features.
        </p>
      </div>
      <div className="SubBtnMain">
        {!subscribed ? (
          <EmailInput
            btnTitle={"Subscribe"}
            searchPlaceholder={"Email address"}
            onSubscribe={handleSubscribe}
          />
        ) : (
          <SubscribedMsg
            title={email}
            msgAbove={"Thank you for subscribing with"}
            messageData={"Please check your email for updates"}
          />
        )}
      </div>
    </div>
  );
};

export default FifthSection;
