import React, { useState } from "react";
import { FaTimes, FaChevronDown } from "react-icons/fa";
import "./FaqItems.css";

// FAQItem Component
const FaqItems = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4 FaqItemsContainer">
      <div
        className="flex justify-between items-center border-b border-gray-700 py-4 cursor-pointer FaqItemsContainerSub"
        onClick={onClick}
      >
        <h2 className="text-xl">{question}</h2>
        <i>{isOpen ? <FaTimes /> : <FaChevronDown />}</i>
      </div>
      {isOpen && <p className="text-gray-400 mt-2">{answer}</p>}
    </div>
  );
};

export default FaqItems;
