import React from "react";
import "./FourthHome.css";
import KeyHighlights from "../Atoms/KeyHighlights/KeyHighlights";
import Img from '../../../assets/fourthSectionImg.png'

const FourthHome = () => {
  return (
    <div id="FourthHomeContainer">
      <div id="FourthHomeContainerTop">
        <KeyHighlights text={"Our  Mission"} />
        <p className='SecondHomePara FourthHomeSecondPara'>Promoting Media Literacy</p>
        <p id="FourthHomeThirdPara">In today’s fast-paced digital landscape, misinformation can spread rapidly, making it essential for individuals to have the tools and knowledge to discern fact from fiction.</p>
      </div>
      <div id="FourthHomeContainerBottom">
        <img src={Img} alt="fourthSectionImg" />
        <p>Empowering Users: We believe that an informed public is a powerful one. By equipping our users with critical thinking skills and practical strategies, we enable them to navigate the complexities of news and media. Our resources help users to ask the right questions, evaluate sources, and recognize bias in reporting.</p>
      </div>
    </div>
  );
};

export default FourthHome;
