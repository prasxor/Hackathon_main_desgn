import React, { useState } from "react";
import "./FifthSection.css";
// import SearchInput from "../Atoms/SearchInput/SearchInput";
import SubscribedMsg from "../Atoms/SubscribedMsg/SubscribedMsg";
import EmailInput from "../Atoms/EmailInput/EmailInput";
import FaqSection from "../Atoms/FAQSection/FaqSection";

const FifthSection = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (inputEmail) => {
    setEmail(inputEmail); // Store the email
    setSubscribed(true); // Update subscription status
    // Optionally store email in local storage or send it to a backend
    localStorage.setItem('subscribedEmail', inputEmail); 
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
          <SubscribedMsg title={email} />
        )}
      </div>
    </div>
  );
};

export default FifthSection;
