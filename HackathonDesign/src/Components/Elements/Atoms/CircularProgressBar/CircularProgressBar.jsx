import React, { useState, useEffect } from 'react';
import './CircularProgressBar.css'; // Ensure this file is in the same directory

const CircularProgressBar = () => {
  const [counter, setCounter] = useState(0);

  const value = 55;

  useEffect(() => {
    if (counter < 100) {
      const interval = setInterval(() => {
        setCounter(prevCounter => prevCounter + 1);
      }, 62);

      return () => clearInterval(interval);
    }
  }, [counter]);

  return (
    <div className="circular">
      <div className="inner"></div>
      <div className="outer"></div>
      <div className="numb">{value}%</div>
      <div className="circle">
        <div className="dot">
          <span></span>
        </div>
        <div className="bar left">
          <div className="progress"></div>
        </div>
        <div className="bar right">
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
};

export default CircularProgressBar;
