import React from "react";
import "./About.css";
import KeyHighlights from "../../Elements/Atoms/KeyHighlights/KeyHighlights";
import Navbar from "../../Elements/Navbar/Navbar";
import AboutFirstPara from "../../../Components/Elements/Atoms/AboutFirstPara/AboutFirstPara";
import AboutCards from "../../Elements/Atoms/AboutCards/AboutCards";
import AboutCardsLeft from "../../Elements/Atoms/AboutCards/AboutCardsLeft";
import Footer from "../../Elements/Footer/Footer"

const About = () => {
  return (
    <div id="AboutMain">
      <div className="NavbarAboutContainer">
        <Navbar />
      </div>
      <div className="KeyHighlightsAboutContainer">
        <KeyHighlights text={"About Us"} />
      </div>
      <div className="AboutFirstParaAboutContainer">
        <AboutFirstPara />
      </div>
      <div className="AboutCardsAboutContainer">
        <AboutCards title={"What We Stand For"} />
        <AboutCardsLeft title={"Behind the Scenes"}/>
      </div>
      <div className="footerAboutContainer">
        <Footer/>
      </div>
    </div>
  );
};

export default About;
