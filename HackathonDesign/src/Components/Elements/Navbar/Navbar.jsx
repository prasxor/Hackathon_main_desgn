import React, { useState } from "react";
import Logo from "../../../assets/animatedLogo.gif";
import ToggleBtn from "../Atoms/ToggleBtn/ToggleBtn";
import "./Navbar.css";
import DropDown from "../Atoms/DropDown/DropDown";

const Navbar = () => {
  const ArrEle = ["Home", "News", "About", "Contact"];
  const ArrLink = ["/Home", "#", "#", "#"];
  const ClassName = []
  return (
    <div className="NavbarMain">
      <div className="itemImg">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="NavbarList">
        {ArrEle.map((item, index) => (
          <li key={index} className='NavbarItems'>
            <a href={ArrLink[index]}>{item}</a>
          </li>
        ))}

        {/* <li>
          <DropDown/>
        </li> */}

      </ul>
      {/* <div className="toggle-container">
        <ToggleBtn className="ToggleBtn" />
      </div> */}
    </div>
  );
};

export default Navbar;
