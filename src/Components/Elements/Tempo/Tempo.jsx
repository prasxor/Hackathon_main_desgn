import React from "react";
import "./Tempo.css";
import Popup from "../Atoms/Popup/Popup";

const Tempo = ({ truthValue, link }) => {
  console.log("your truthValue is:", truthValue); // Debugging
  console.log("Type of truthValue:", typeof truthValue); // For debugging

  return (
    <div id="TempoContainer">
      <Popup truthValue={truthValue} link={link} />
    </div>
  );
};

export default Tempo;
