// import React, { useState } from "react";
// import "./MiniNavbar.css";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Logo from "../../../../assets/NavbarLogo.png";
// import "../../Navbar/Navbar.css";
// import NewsSecondNavbar from "../../NewsPageCompoent/NewsSecondNavbar/NewsSecondNavbar";

// const MiniNavbar = () => {
//   const [showSecondNavbar, setShowSecondNavbar] = useState(false); // State to toggle NewsSecondNavbar visibility
//   const [selected, setSelected] = useState(""); // State to track the selected navbar item

//   const ArrEle = ["Top Stories", "Categories", "Trending"];
//   const ArrLink = ["/categoriesPage", "#", "/CategoriesPage", "#"];
//   const ArrEle2 = ["Home"];
//   const ArrLink2 = ["/"];
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleHomeClick = (e) => {
//     if (location.pathname === "/") {
//       e.preventDefault();
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else {
//       navigate("/");
//     }
//   };

//   const handleCategoriesClick = () => {
//     // Toggle the visibility of the second navbar and reset active class if clicked again
//     if (selected === "Categories") {
//       setSelected(""); // Remove the active class if already selected
//       setShowSecondNavbar(false); // Hide NewsSecondNavbar
//     } else {
//       setSelected("Categories"); // Set Categories as the active button
//       setShowSecondNavbar(true); // Show NewsSecondNavbar
//     }
//   };

//   const isActive = (item) => {
//     return selected === item ? "hover" : ""; // Apply hover class for active links
//   };

//   return (
//     <div className="NavbarMainContainer">
//       <div className="miniNavbarMain">
//         <div className="itemImg">
//           <img src={Logo} alt="Logo" />
//         </div>
//         <ul className="NavbarList">
//           {ArrEle.map((item, index) => (
//             <li
//               key={index}
//               className={`NavbarItems ${isActive(item)}`} // Check if this item is active
//               onClick={item === "Categories" ? handleCategoriesClick : null} // Only toggle for Categories
//             >
//               {item === "Home" ? (
//                 <Link to="/" onClick={handleHomeClick}>
//                   {item}
//                 </Link>
//               ) : item === "FAQ" ? (
//                 <a href={ArrLink[index]}>{item}</a>
//               ) : (
//                 <Link to={ArrLink[index]}>{item}</Link>
//               )}
//             </li>
//           ))}
//         </ul>
//         <ul className="NavbarList NavbarList2">
//           {ArrEle2.map((item, index) => (
//             <li
//               key={index}
//               className={`NavbarItems NavbarItems2 ${isActive(
//                 ArrLink2[index]
//               )}`}
//             >
//               <Link to={ArrLink2[index]}>{item}</Link>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Conditionally render the NewsSecondNavbar */}
//       <div className="categoriesNavbar">
//         {showSecondNavbar && <NewsSecondNavbar />}
//       </div>
//     </div>
//   );
// };

// export default MiniNavbar;

import React, { useState } from "react";
import "./MiniNavbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../../../assets/NavbarLogo.png";
import "../../Navbar/Navbar.css";
import NewsSecondNavbar from "../../NewsPageCompoent/NewsSecondNavbar/NewsSecondNavbar";

const MiniNavbar = () => {
  const [showSecondNavbar, setShowSecondNavbar] = useState(false); // State to toggle NewsSecondNavbar visibility
  const [selected, setSelected] = useState(""); // State to track the selected navbar item

  const navigate = useNavigate();

  // Hardcoded routes with corresponding titleContent
  const navItems = [
    {
      name: "Top Stories",
      path: "/News/top-stories",
      titleContent: "Top Stories Page",
    },
    {
      name: "Categories",
      path: "/News/categories",
      titleContent: "Categories Page",
    },
    { name: "Trending", path: "/News/trending", titleContent: "Trending Page" },
  ];

  const secondaryItems = [
    { name: "Home", path: "/", titleContent: "Home Page" },
  ];

  const handleNavigation = (path, titleContent) => {
    navigate(path, { state: { titleContent } });
  };

  const handleCategoriesClick = () => {
    if (selected === "Categories") {
      setSelected("");
      setShowSecondNavbar(false);
    } else {
      setSelected("Categories");
      setShowSecondNavbar(true);
    }
  };

  const isActive = (item) => {
    return selected === item ? "hover" : ""; // Apply hover class for active links
  };

  return (
    <div className="NavbarMainContainer">
      <div className="miniNavbarMain">
        <div className="itemImg">
          <img src={Logo} alt="Logo" />
        </div>
        <ul className="NavbarList">
          {navItems.map(({ name, path, titleContent }, index) => (
            <li
              key={index}
              className={`NavbarItems ${isActive(name)}`}
              onClick={name === "Categories" ? handleCategoriesClick : null}
            >
              {name === "Categories" ? (
                <span onClick={() => handleCategoriesClick()}>{name}</span>
              ) : (
                <span onClick={() => handleNavigation(path, titleContent)}>
                  {name}
                </span>
              )}
            </li>
          ))}
        </ul>
        <ul className="NavbarList NavbarList2">
          {secondaryItems.map(({ name, path, titleContent }, index) => (
            <li key={index} className="NavbarItems NavbarItems2">
              <span onClick={() => handleNavigation(path, titleContent)}>
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Conditionally render the NewsSecondNavbar */}
      <div className="categoriesNavbar">
        {showSecondNavbar && <NewsSecondNavbar />}
      </div>
    </div>
  );
};

export default MiniNavbar;
