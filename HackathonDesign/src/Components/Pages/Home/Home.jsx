import { useState } from "react";
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
  const [truthValue, setTruthValue] = useState("");
  const [link, setLink] = useState("");

  const handleDataReceived = (truthValue, link) => {
    setTruthValue(truthValue);
    setLink(link);
  };

  console.log("this is msg from home.jsx:" + link);

  return (
    <div id="HomeMainContainer">
      <div className="MainHomeComp">
        <MainHome onDataReceived={handleDataReceived} />
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
        <SixthSection />
        {/* <Button/> */}
      </div>

      {/* <div id="FooterSection">
        <Footer />
        </div> */}
      {/* <div id="tempoSection"> */}
      {/* <Tempo truthValue={truthValue} link={link} />{" "} */}
      {/* Pass truthValue and link to Tempo */}
      {/* </div> */}
    </div>
  );
};

export default Home;
