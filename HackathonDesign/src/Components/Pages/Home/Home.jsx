// import { useState } from "react";
import Navbar from "../../Elements/Navbar/Navbar";
import MainHome from "../../Elements/MainHome/MainHome";
import SecondHome from "../../Elements/SecondHome/SecondHome";
import "./Home.css";
import ThirdHome from "../../Elements/ThirdHome/ThirdHome";
import FourthHome from "../../Elements/FourthHome/FourthHome";
import FifthSection from "../../Elements/FifthSection/FifthSection";
import Popup from "../../Elements/Atoms/Popup/Popup";
import Footer from "../../Elements/Footer/Footer";
import SixthSection from "../../Elements/SixthSection/SixthSection";
import Tempo from "../../Elements/Tempo/Tempo";

const Home = () => {
  return (
    <div id="HomeMainContainer">
      <div id="NavbarComponent">
        <Navbar />
      </div>
      <div className="MainHomeComp">
        <MainHome />
      </div>
      <div className="SecondHomeComp">
        <SecondHome />
      </div>
      <div className="ThirdHomeComp">
        <ThirdHome />
      </div>
      <div className="FourthHomeMain">
        <FourthHome />
      </div>
      <div id="FifthHomeMain">
        <FifthSection />
      </div>
      <div id="sixthSectionMain">
        <SixthSection/>
      </div>
      <div id="FooterSection">
        <Footer />
      </div>
      <div id="tempoSection">
        <Tempo/>
      </div>
    </div>
  );
};

export default Home;
