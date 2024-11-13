import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../../../assets/NavbarLogo.png";
import "./Navbar.css";

const Navbar = () => {
  const ArrEle = ["Home", "About", "FAQ", "Contact"];
  const ArrLink = ["#top", "/about", "#sixthSectionMain", "/contact"]; // Link to top for "Home" and section for "FAQ"
  const ArrEle2 = ["News"];
  const ArrLink2 = ["/News"];

  return (
    <div className="NavbarMain">
      <div className="itemImg">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="NavbarList">
        {ArrEle.map((item, index) => (
          <li key={index} className="NavbarItems">
            {item === "Home" || item === "FAQ" ? (
              // Use <a> tag for smooth scrolling
              <a href={ArrLink[index]}>{item}</a>
            ) : (
              <Link to={ArrLink[index]}>{item}</Link>
            )}
          </li>
        ))}
      </ul>
      <ul className="NavbarList NavbarList2">
        {ArrEle2.map((item, index) => (
          <li key={index} className="NavbarItems NavbarItems2">
            <Link to={ArrLink2[index]}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
