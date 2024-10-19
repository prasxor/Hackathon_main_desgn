import React from "react";
import "./About.css";
import KeyHighlights from "../../Elements/Atoms/KeyHighlights/KeyHighlights";
import Navbar from "../../Elements/Navbar/Navbar";
import AboutFirstPara from "../../../Components/Elements/Atoms/AboutFirstPara/AboutFirstPara";
import AboutCards from '../../Elements/Atoms/AboutCards/AboutCards'

const About = () => {
  return (
    <div id="AboutMain">
      <Navbar />
      <KeyHighlights text={"About Us"} />
      <AboutFirstPara />
      <AboutCards/>
    </div>
  );
};

export default About;
