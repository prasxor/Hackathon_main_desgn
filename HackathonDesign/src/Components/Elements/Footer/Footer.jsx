import React from "react";
import "./Footer.css";
import LogoImg from "../../../assets/trademarklogo.png";

const Footer = () => {
  const FooterEle1 = ["Home", "Team", "About", "Contact"];
  const FooterLink1 = ["#", "#", "#", "#", "#"];
  const FooterEle2 = ["Search", "Features", "News", "Subscribe"];
  const FooterLink2 = ["#", "#", "#", "#FifthHomeMain"];
  const FooterEle3 = ["Team", "Home", "Contact", "About"];
  const FooterLink3 = ["#", "#", "#", "#", "#"];
  const TradeMark = "© 2024 TruthLens All rights reserved.";

  const liTitle = ["Pages", "Sections", "Website", "Socials"];

  return (
    <div className="FooterContainer">
      <div className="footerMainContent">
        <div id="tradeMarkLogo">
          <img src={LogoImg} alt="" />
        </div>
        <div className="FooterContainerTop">
          <div className="FooterContainerTopFirst">
            <ul>
              <li>{liTitle[0]}</li>
              {FooterEle1.map((item, index) => (
                <li key={index} className="FooterItems">
                  <a href={FooterLink1[index]}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="FooterContainerTopSecond">
            <ul>
              <li>{liTitle[1]}</li>
              {FooterEle2.map((item, index) => (
                <li key={index} className="FooterItems">
                  <a href={FooterLink2[index]}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="FooterContainerTopThird">
            <ul>
              <li>{liTitle[2]}</li>
              {FooterEle3.map((item, index) => (
                <li key={index} className="FooterItems">
                  <a href={FooterLink3[index]}>{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="FooterContainerBottom">
        <div className="FooterContainerBottomFirst">
          <p>{TradeMark}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
