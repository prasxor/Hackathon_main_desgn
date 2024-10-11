import React from "react";
import './SearchAgain.css';
import SearchImg from './../../../assets/Searchicon.png'; // Adjust the path as necessary

const SearchAgain = () => {
  return (
    <div id='SearchAgainContainer'>
      <a href="#" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <img src={SearchImg} alt="Read Full Article" />
        <button>Search Again</button>
      </a>
    </div>
  );
};

export default SearchAgain;

