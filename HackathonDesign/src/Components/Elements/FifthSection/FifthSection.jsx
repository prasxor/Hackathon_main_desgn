import React, { useState, useEffect } from "react";
import "./FifthSection.css";
import Toast from "../Atoms/Popup/Popup";
import EmailInput from "../Atoms/EmailInput/EmailInput";
import { addValue, getValues } from "../../Data/EmailDataStore";
// import TopBtn from "../Atoms/Button/TopBtn/TopBtn";
import BottomBtn from "../Atoms/Button/BottomBtn/BottomBtn";

const FifthSection = () => {
  const [inputValue, setInputValue] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      addValue(inputValue); // Add input value to the data store and localStorage
      setToastMessage(`Subscribed with email: ${inputValue}`); // Set toast message
      setShowToast(true); // Show toast
      setInputValue(""); // Clear the input field
    }
  };

  // Function to close the toast
  const handleCloseToast = () => {
    setShowToast(false);
  };

  // Simulate getting values from localStorage or data store
  const getValues = () => {
    return JSON.parse(localStorage.getItem("subscribedEmails")) || [];
  };

  // Update localStorage whenever input changes (for demonstration)
  const addValue = (value) => {
    const currentValues = getValues();
    currentValues.push(value);
    localStorage.setItem("subscribedEmails", JSON.stringify(currentValues));
  };
  return (
    <div id="FifthSectionMainContainer">
      <div id='FifthSectionMainContainerTop'>
        <p className='SecondHomePara FourthHomeSecondPara'>Sign Up For Email Updates</p>
        <p id="FourthHomeThirdPara">Keep up with fake news and product features.</p>
      </div>
      <form action="#" id='fifthSectionForm' onSubmit={handleSubmit}>
        <EmailInput
          label="Enter something:"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Email address"
        />
        <BottomBtn title={'Subscribe'} id="SearchInputContainerFormBtnEmail"/>
      </form>
      {/* <ul>
        {getValues().map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul> */}

      {/* Toast Component */}
      <Toast 
        message={toastMessage} 
        show={showToast} 
        onClose={handleCloseToast} 
      />
    </div>
  );
};

export default FifthSection;
