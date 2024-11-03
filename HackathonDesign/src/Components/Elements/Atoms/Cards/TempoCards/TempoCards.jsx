import React, { useRef } from 'react';
import './TempoCards.css'

const Card = () => {
  const blobRef = useRef(null);

  const handleMouseMove = (e) => {
    const blob = blobRef.current;
    const { left, top, width, height } = blob.getBoundingClientRect();
    
    blob.style.opacity = "1";
    blob.style.transform = `translate(${e.clientX - left - width / 2}px, ${e.clientY - top - height / 2}px)`;
  };

  return (
    <div className="card" onMouseMove={handleMouseMove}>
      <div className="inner">Your Content Here</div>
      <div className="blob" ref={blobRef}></div>
      <div className="fakeblob"></div>
    </div>
  );
};

export default Card;
