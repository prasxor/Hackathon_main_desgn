import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import Logo from "../../../assets/output-onlinegiftools.gif";
import Logo from "../../../assets/NavbarLogo.png";

import ToggleBtn from "../Atoms/ToggleBtn/ToggleBtn";
import "./Navbar.css";
import DropDown from "../Atoms/DropDown/DropDown";

const Navbar = () => {
  const ArrEle = ["Home", "About", "FAQ", "Contact"];
  const ArrLink = ["/", "/about", "/News", "/contact"];
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
            <Link to={ArrLink[index]}>{item}</Link>{" "}
            {/* Use Link for navigation */}
          </li>
        ))}
      </ul>
      <ul className="NavbarList NavbarList2">
        {ArrEle2.map((item, index) => (
          <li key={index} className="NavbarItems NavbarItems2">
            <Link to={ArrLink2[index]}>{item}</Link>{" "}
            {/* Use Link for navigation */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
