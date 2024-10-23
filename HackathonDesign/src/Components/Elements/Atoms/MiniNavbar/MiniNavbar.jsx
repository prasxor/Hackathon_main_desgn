import React from "react";
import { Link } from "react-router-dom";
import "./MiniNavbar.css";

const MiniNavbar = () => {
  const NavbarList = [
    "Sports",
    "Politics",
    "Business",
    "Entertainment",
    "Health",
    "General",
    "Science",
    "Technology",
  ];
  const NavbarListLink = ["#", "#", "#", "#", "#", "#", "#", "#"];

  return (
    <div className="NavbarListMain">
      <ul className="NavbarList MiniNavbarList">
        {NavbarList.map((item, index) => (
          <li key={index} className="NavbarItemss">
            <Link to={NavbarListLink[index]}>{item}</Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MiniNavbar;
