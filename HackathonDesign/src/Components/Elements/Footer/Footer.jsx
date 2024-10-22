import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Footer.css";
import LogoImg from "../../../assets/trademarklogo.png";

const Footer = () => {
  const FooterEle1 = ["Home", "Team", "About", "Contact"];
  const FooterLink1 = ["/", "/team", "/about", "/contact"]; // Update links to match your routes
  const FooterEle2 = ["Search", "Features", "News", "Subscribe"];
  const FooterLink2 = ["#", "#", "#", "#FifthHomeMain"];
  const FooterEle3 = ["Team", "Home", "Contact", "About"];
  const FooterLink3 = ["/team", "/", "/contact", "/about"]; // Update links to match your routes
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
                  <Link to={FooterLink1[index]}>{item}</Link>{" "}
                  {/* Use Link for navigation */}
                </li>
              ))}
            </ul>
          </div>
          <div className="FooterContainerTopSecond">
            <ul>
              <li>{liTitle[1]}</li>
              {FooterEle2.map((item, index) => (
                <li key={index} className="FooterItems">
                  <Link to={FooterLink2[index]}>{item}</Link>{" "}
                  {/* Use Link for navigation */}
                </li>
              ))}
            </ul>
          </div>
          <div className="FooterContainerTopThird">
            <ul>
              <li>{liTitle[2]}</li>
              {FooterEle3.map((item, index) => (
                <li key={index} className="FooterItems">
                  <Link to={FooterLink3[index]}>{item}</Link>{" "}
                  {/* Use Link for navigation */}
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
