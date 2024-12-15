import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../assets/NavbarLogo.png";
import "./Navbar.css";

const Navbar = () => {
  const ArrEle = ["Home", "About", "Tempo", "Contact"];
  const ArrLink = ["/", "/about", "/CategoriesPage","/contact"];
  const ArrEle2 = ["News"];
  const ArrLink2 = ["/News"];
  const location = useLocation();
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const isActive = (path) => {
    return location.pathname === path ? "hover" : ""; // Apply hover class for active links
  };

  return (
    <div className="NavbarMain">
      <div className="itemImg">
        <img src={Logo} alt="Logo" />
      </div>
      <ul className="NavbarList">
        {ArrEle.map((item, index) => (
          <li key={index} className={`NavbarItems ${isActive(ArrLink[index])}`}>
            {item === "Home" ? (
              <Link to="/" onClick={handleHomeClick}>
                {item}
              </Link>
            ) : item === "FAQ" ? (
              <a href={ArrLink[index]}>{item}</a>
            ) : (
              <Link to={ArrLink[index]}>{item}</Link>
            )}
          </li>
        ))}
      </ul>
      <ul className="NavbarList NavbarList2">
        {ArrEle2.map((item, index) => (
          <li
            key={index}
            className={`NavbarItems NavbarItems2 ${isActive(ArrLink2[index])}`}
          >
            <Link to={ArrLink2[index]}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
