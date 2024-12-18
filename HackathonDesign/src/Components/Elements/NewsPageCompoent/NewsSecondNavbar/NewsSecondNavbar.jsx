import React from "react";
import "./NewsSecondNavbar.css";
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
  const NavbarListLink = [
    "/News/sports",
    "/News/business",
    "/News/entertainment",
    "/News/health",
    "/News/general",
    "/News/science",
    "/News/technology",
  ];

  return (
    <div className="NavbarListMain MiniNavbarMain newsSecondNavbar">
      <ul className="NavbarList MiniNavbarList newsSecondNavbarSub">
        {NavbarList.map((item, index) => (
          <li key={index} className="NavbarItemss">
            <Link
              to={{ pathname: NavbarListLink[index], search: `?title=${item}` }}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsSecondNavbar;
