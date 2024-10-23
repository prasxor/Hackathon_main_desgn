import React, { useState } from "react";
import styled from "styled-components";

const ContactInput = ({ typepurpose, label }) => {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    const newValue = e.target.value;

    // Allow only numbers for "number" type
    if (typepurpose === "number" && /^\d*$/.test(newValue)) {
      setValue(newValue);
    } else if (typepurpose === "text" || typepurpose === "email") {
      // Allow text input for "text" and "email" types
      setValue(newValue);
    }
  };

  return (
    <StyledWrapper>
      <div className="input-field">
        <input
          required
          autoComplete="off"
          type={typepurpose}
          id={label} // Use label directly as the id
          className="contact-input" // Assuming you have a specific class for styling
          value={value}
          onChange={handleInputChange}
          maxLength={typepurpose === "number" ? 11 : undefined} // Set maxLength for number input
        />
        <label htmlFor={label}>{label}</label> {/* Using label directly */}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    padding: 0 20px;
    width: 335px;
    height: auto;
  }

  .form {
    max-width: 335px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .input-field {
    position: relative;
  }

  .input-field label {
    position: absolute;
    color: #8d8d8d;
    pointer-events: none;
    background-color: transparent;
    left: 15px;
    transform: translateY(0.6rem);
    transition: all 0.3s ease;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
  }

  .input-field input {
    padding: 10px 15px;
    font-size: 1rem;
    border-radius: 14px;
    border: solid 1px #2a2a2d;
    letter-spacing: 1px;
    width: 100%;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
    background-color: #17181f;
  }

  .input-field input:focus,
  .input-field input:valid {
    outline: none;
  }

  .input-field input:focus ~ label,
  .input-field input:valid ~ label {
    transform: translateY(-50%) translateX(-18px) scale(0.9);
    background-color: #17181f;
    width: max-content; // Use max-content to adapt to label width
    padding: 0 5px;
    color: #e0e0e2;
    letter-spacing: 1px;
    border: none;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
    margin: 0 10px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export default ContactInput;
