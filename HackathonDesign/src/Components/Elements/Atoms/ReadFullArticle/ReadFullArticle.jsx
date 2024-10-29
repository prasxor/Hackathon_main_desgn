import React from "react";
import './ReadFullArticle.css';
import readFullArticleImg from '../../../../assets/readfullarticle.png'; // Adjust the path as necessary

const ReadFullArticle = ({ link, truthValue }) => {
  console.log("Value of truthValue is: ", truthValue);

  if (truthValue.toLowerCase() !== "true") {
    return null;
  }

  return (
    <div id='ReadFullArticleContainer'>
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <button>Read Full Article</button>
        <img src={readFullArticleImg} alt="Read Full Article" />
      </a>
    </div>
  );
};

export default ReadFullArticle;
