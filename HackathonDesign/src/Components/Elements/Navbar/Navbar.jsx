import React, { useState } from "react";
import Logo from "../../../assets/animatedLogo.gif";
import ToggleBtn from "../Atoms/ToggleBtn/ToggleBtn";
import "./Navbar.css";

const Navbar = () => {
  const ArrEle = ["Home", "News", "About", "Contact"];
  const ArrLink = ["#", "#", "#", "#"];

  return (
    <div className="NavbarMain">
      <div className="itemImg">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="NavbarList">
        {ArrEle.map((item, index) => (
          <li key={index} className="NavbarItems">
            <a href={ArrLink[index]}>{item}</a>
          </li>
        ))}

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            More
          </a>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </li>
      </ul>
      {/* Toggle Button */}
      <div className="toggle-container">
        <ToggleBtn className="ToggleBtn" />
      </div>
    </div>
  );
};

export default Navbar;
