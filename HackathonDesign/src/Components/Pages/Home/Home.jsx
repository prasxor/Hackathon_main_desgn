// import { useState } from "react";
import Navbar from "../../Elements/Navbar/Navbar";
import MainHome from "../../Elements/MainHome/MainHome";
import SecondHome from "../../Elements/SecondHome/SecondHome";
import "./Home.css";
import ThirdHome from "../../Elements/ThirdHome/ThirdHome"

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
      <div className="ThirdHomeComp">
        <ThirdHome/>
      </div>
    </div>
  );
};

export default Home;
