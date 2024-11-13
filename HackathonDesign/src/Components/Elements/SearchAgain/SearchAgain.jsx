import React from "react";
import "./SearchAgain.css";
import SearchImg from "./../../../assets/Searchicon.png"; // Adjust the path as necessary

const SearchAgain = ({ onClose }) => {
  return (
    // <div id="SearchAgainContainer" onClick={onClose}>
    //   <img src={SearchImg} alt="Read Full Article" />
    //   <button>Search Again</button>
    // </div>

    <div id='ReadFullArticleContainer' style={{width: '210px'}}  onClick={onClose}>
      <a href='#' style={{ textDecoration: 'none' }}>
        <img src={SearchImg} alt="Search again" style={{width: '11%'}}/>
        <button>Search Again</button>
      </a>
    </div>

  );
};

export default SearchAgain;
