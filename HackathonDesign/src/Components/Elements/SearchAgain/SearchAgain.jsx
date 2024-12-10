import React from "react";
import "./SearchAgain.css";
// import SearchImg from "./../../../assets/Searchicon.png"; // Adjust the path as necessary

const SearchAgain = ({ onClose, text,image }) => {
  return (
    <div id='ReadFullArticleContainer' style={{width: '210px'}}  onClick={onClose}>
      <a href='#' style={{ textDecoration: 'none' }}>
        <img src={image} alt="" style={{width: '11%'}}/>
        <button>{text}</button>
      </a>
    </div>
  )
};

export default SearchAgain;
