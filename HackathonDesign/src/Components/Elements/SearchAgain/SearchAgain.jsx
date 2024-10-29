import React from "react";
import "./SearchAgain.css";
import SearchImg from "./../../../assets/Searchicon.png"; // Adjust the path as necessary

const SearchAgain = ({ onClose }) => {
  return (
    <div id="SearchAgainContainer" onClick={onClose}>
      <img src={SearchImg} alt="Read Full Article" />
      <button>Search Again</button>
    </div>

  );
};

export default SearchAgain;
