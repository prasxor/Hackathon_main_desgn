import React from "react";
import styled from "styled-components";
import "./ToggleBtn.css";

const ToggleBtn = () => {
  return (
    <div className="ToggleBtnMainContainer">
      <div className="svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-3 svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            style={{
              scale: "1.2",
              border: "1px solid green",
            }}
          />
        </svg>
      </div>
      <StyledWrapper>
        <input type="checkbox" className="theme-checkbox" />
      </StyledWrapper>
      <div className="svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-3 svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            style={{
              scale: "1",
            }}
          />
        </svg>
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  .theme-checkbox {
    --toggle-size: 8px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 6.25em;
    height: 3.125em;
    background: -webkit-gradient(
        linear,
        left top,
        right top,
        color-stop(50%, #efefef),
        color-stop(50%, #2a2a2a)
      )
      no-repeat;
    background: -o-linear-gradient(left, #efefef 50%, #2a2a2a 50%) no-repeat;
    background: linear-gradient(to right, #efefef 50%, #2a2a2a 50%) no-repeat;
    background-size: 205%;
    background-position: 0;
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
    border-radius: 99em;
    position: relative;
    cursor: pointer;
    font-size: var(--toggle-size);
  }

  .theme-checkbox::before {
    content: "";
    width: 2.25em;
    height: 2.25em;
    position: absolute;
    top: 0.438em;
    left: 0.438em;
    background: -webkit-gradient(
        linear,
        left top,
        right top,
        color-stop(50%, #efefef),
        color-stop(50%, #2a2a2a)
      )
      no-repeat;
    background: -o-linear-gradient(left, #efefef 50%, #2a2a2a 50%) no-repeat;
    background: linear-gradient(to right, #efefef 50%, #2a2a2a 50%) no-repeat;
    background-size: 205%;
    background-position: 100%;
    border-radius: 50%;
    -webkit-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
  }

  .theme-checkbox:checked::before {
    left: calc(100% - 2.25em - 0.438em);
    background-position: 0;
  }

  .theme-checkbox:checked {
    background-position: 100%;
  }
`;

export default ToggleBtn;
