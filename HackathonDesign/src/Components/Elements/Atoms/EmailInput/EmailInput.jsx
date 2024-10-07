import React from "react";
import './EmailInput.css'

const EmailInput = ({ label, value, onChange, placeholder }) => {
  return (
    <div className="SearchInputContainer">
      <input
        type="email"
        id="SearchInputContainerFormInput"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default EmailInput;
