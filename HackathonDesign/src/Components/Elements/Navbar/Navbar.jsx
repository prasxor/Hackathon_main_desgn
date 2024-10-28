import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../../../assets/output-onlinegiftools.gif";
import ToggleBtn from "../Atoms/ToggleBtn/ToggleBtn";
import "./Navbar.css";
import DropDown from "../Atoms/DropDown/DropDown";

const Navbar = () => {
  const ArrEle = ["Home", "News", "About", "Contact"];
  const ArrLink = ["/", "/News", "/about", "/contact"]; // Update links to match your routes
  const ClassName = [];

  return (
    <div className="NavbarMain">
      <div className="itemImg">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="NavbarList">
        {ArrEle.map((item, index) => (
          <li key={index} className='NavbarItems'>
            <Link to={ArrLink[index]}>{item}</Link> {/* Use Link for navigation */}
          </li>
        ))}
        {/* <li>
          <DropDown />
        </li> */}
      </ul>
      {/* <div className="toggle-container">
        <ToggleBtn className="ToggleBtn" />
      </div> */}
    </div>
  );
};

export default Navbar;
