import React, { useState } from "react"; // Import useState
import "./SearchInput.css";
import TopBtn from "../Button/TopBtn/TopBtn";

const SearchInput = ({ btnTitle, searchPlaceholder, onSubscribe }) => {
  const [email, setEmail] = useState(''); // State to hold email input

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    if (email) {
      onSubscribe(email); // Call the onSubscribe function with the email
      setEmail(''); // Clear the input field after submission
    }
  };

  return (
    <div className="SearchInputContainer">
      <form action="#" className="SearchInputContainerForm" onSubmit={handleSubmit}>
        <input
          type="email" // Change input type to email for better validation
          className="SearchInputContainerFormInput"
          placeholder={searchPlaceholder}
          value={email} // Bind input value to state
          onChange={(e) => setEmail(e.target.value)} // Update state on input change
          required // Ensure the input is not empty
        />
        <TopBtn title={btnTitle} onClick={handleSubmit} /> {/* Optional: Handle onClick here */}
      </form>
    </div>
  );
};

export default SearchInput;
