import React from "react";
import "./NewsSecondNavbar.css"
import { Link } from "react-router-dom";

const NewsSecondNavbar = () => {
  const NavbarList = [
    "Sports",
    "Business",
    "Entertainment",
    "Health",
    "General",
    "Science",
    "Technology",
  ];
  const NavbarListLink = ["#", "#", "#", "#", "#", "#", "#", "#"];
  return (
      <div className="NavbarListMain MiniNavbarMain">
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

export default NewsSecondNavbar;
