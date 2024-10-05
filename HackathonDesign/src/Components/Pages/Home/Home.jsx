// import { useState } from "react";
import Navbar from "../../Elements/Navbar/Navbar";
import MainHome from "../../Elements/MainHome/MainHome";
import SecondHome from "../../Elements/SecondHome/SecondHome";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="MainHomeComp">
        <MainHome />
      </div>
      <div className="SecondHomeComp">
        <SecondHome />
      </div>
    </div>
  );
};

export default Home;
