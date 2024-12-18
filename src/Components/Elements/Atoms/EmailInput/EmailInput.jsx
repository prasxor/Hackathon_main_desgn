import React, { useState } from "react"; // Import useState
import './EmailInput.css'
import BottomBtn from "../Button/BottomBtn/BottomBtn";

const EmailInput = ({ btnTitle, searchPlaceholder, onSubscribe }) => {
  const [email, setEmail] = useState(""); // State to hold email input

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      onSubscribe(email);
      setEmail("");
    }
  };

  return (
    <div className="SearchInputContainerBtn">
      <form
        action="#"
        className="SearchInputContainerFormBtn"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          className="SearchInputContainerFormInputBtn"
          placeholder={searchPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <BottomBtn title={btnTitle} onClick={handleSubmit} />{" "}
      </form>
    </div>
  );
};

export default EmailInput;
