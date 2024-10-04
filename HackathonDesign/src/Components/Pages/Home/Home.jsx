import React from "react";
import Navbar from "../../Elements/Navbar/Navbar";
import MainHome from "../../Elements/MainHome/MainHome";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="MainHomeComp">
        <MainHome  />
      </div>
    </div>
  );
};

export default Home;
