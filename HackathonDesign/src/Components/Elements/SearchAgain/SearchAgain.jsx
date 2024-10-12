import React from "react";
import "./SearchAgain.css";
import SearchImg from "./../../../assets/Searchicon.png"; // Adjust the path as necessary

const SearchAgain = ({ onClose }) => {
  return (
    <div id="SearchAgainContainer" onClick={onClose}>
      <img src={SearchImg} alt="Read Full Article" />
      <button>Search Again</button>
    </div>
    // <div id='SearchAgainContainer' onClick={onClose}>
    //   <a href="" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
    //     <img src={SearchImg} alt="Read Full Article" />
    //     <button>Search Again</button>
    //   </a>
    // </div>
  );
};

export default SearchAgain;
