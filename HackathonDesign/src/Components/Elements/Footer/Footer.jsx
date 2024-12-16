import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Footer.css";
import LogoImg from "../../../assets/trademarklogo.png";

const Footer = () => {
  const FooterEle1 = ["Terms", "Privacy Policy"];
  const FooterLink1 = ["/", "/"];
  // const FooterEle2 = ["Search", "Features", "News", "Subscribe"];
  // const FooterLink2 = ["#", "#", "#", "#FifthHomeMain"];
  // const FooterEle3 = ["Team", "Home", "Contact", "About"];
  // const FooterLink3 = ["/team", "/", "/contact", "/about"];

  // const liTitle = ["Pages", "Sections", "Website", "Socials"];

  return (
    <div className="FooterContainer">
      <div className="FooterSubContainer">
        <div className="FooterContainerSubLeft">
          <img src={LogoImg} alt="" />
        </div>
        <div className="FooterContainerSubMiddle">
          <p>© 2024 TruthLens All rights reserved.</p>
        </div>
        <div className="FooterContainerSubRight">
          <div className="FooterContainerTopFirst">
            <ul>
              {FooterEle1.map((item, index) => (
                <li key={index} className="FooterItems">
                  <Link to={FooterLink1[index]}>{item}</Link>{" "}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <div className="footerMainContent">
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
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div> */
}
{
  /* <div className="FooterContainerBottom">
        <div className="FooterContainerBottomFirst">
          <p>{TradeMark}</p>
        </div>
      </div> */
}
