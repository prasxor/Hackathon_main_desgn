// Cursor.js
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./Cursor.css";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const targetDiv = document.querySelector(".HightlightCardsMain");

    if (!targetDiv) {
      console.error("Target div not found");
      return;
    } else {
      console.log("Target div found:", targetDiv); // Log to confirm div is recognized
    }

    // GSAP animation for smooth cursor movement
    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power3",
      });
    };

    // Mouse enter animation
    const onMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.3 });
    };

    // Mouse leave animation
    const onMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, scale: 0, duration: 0.3 });
    };

    // Add event listeners on the target div
    targetDiv.addEventListener("mousemove", onMouseMove);
    targetDiv.addEventListener("mouseenter", onMouseEnter);
    targetDiv.addEventListener("mouseleave", onMouseLeave);

    return () => {
      targetDiv.removeEventListener("mousemove", onMouseMove);
      targetDiv.removeEventListener("mouseenter", onMouseEnter);
      targetDiv.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div
      className="cursor-follower"
      ref={cursorRef}
      style={{
        width: "150px",
        height: "150px",
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        position: "fixed",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        opacity: 1, // Start hidden until mouse enters
        zIndex: 1000,
        cursor: "none",
        mixBlendMode: "difference",
      }}
    ></div>
  );
};

export default Cursor;
