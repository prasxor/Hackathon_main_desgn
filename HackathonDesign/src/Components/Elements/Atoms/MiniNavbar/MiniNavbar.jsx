// import { Link } from "react-router-dom";
// import "./MiniNavbar.css";

// const MiniNavbar = () => {

//   const NavbarList = [
//     "Sports",
//     "Business",
//     "Entertainment",
//     "Health",
//     "General",
//     "Science",
//     "Technology",
//   ];
//   const NavbarListLink = ["#", "#", "#", "#", "#", "#", "#", "#"];

//   return (
//     <div className="NavbarListMain MiniNavbarMain">
//       <ul className="NavbarList MiniNavbarList">
//         {NavbarList.map((item, index) => (
//           <li key={index} className="NavbarItemss">
//             <Link to={NavbarListLink[index]}>{item}</Link>{" "}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MiniNavbar;

// import "./MiniNavbar.css";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Logo from "../../../../assets/NavbarLogo.png";
// import "../../Navbar/Navbar.css";
// import NewsSecondNavbar from "../../NewsPageCompoent/NewsSecondNavbar/NewsSecondNavbar";

// const MiniNavbar = () => {
//   const ArrEle = ["Top Stories", "Categories", "Trending"];
//   const ArrLink = ["#", "#", "/CategoriesPage", "#"];
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

//   const isActive = (path) => {
//     return location.pathname === path ? "hover" : ""; // Apply hover class for active links
//   };

//   return (
//     <div className="NavbarMain">
//       <div className="itemImg">
//         <img src={Logo} alt="Logo" />
//       </div>
//       <ul className="NavbarList">
//         {ArrEle.map((item, index) => (
//           <li key={index} className={`NavbarItems ${isActive(ArrLink[index])}`}>
//             {item === "Home" ? (
//               <Link to="/" onClick={handleHomeClick}>
//                 {item}
//               </Link>
//             ) : item === "FAQ" ? (
//               <a href={ArrLink[index]}>{item}</a>
//             ) : (
//               <Link to={ArrLink[index]}>{item}</Link>
//             )}
//           </li>
//         ))}
//       </ul>
//       <ul className="NavbarList NavbarList2">
//         {ArrEle2.map((item, index) => (
//           <li
//             key={index}
//             className={`NavbarItems NavbarItems2 ${isActive(ArrLink2[index])}`}
//           >
//             <Link to={ArrLink2[index]}>{item}</Link>
//           </li>
//         ))}
//       </ul>

//     </div>
//   );
// };

// export default MiniNavbar;

// import React, { useState } from "react";
// import "./MiniNavbar.css";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Logo from "../../../../assets/NavbarLogo.png";
// import "../../Navbar/Navbar.css";
// import NewsSecondNavbar from "../../NewsPageCompoent/NewsSecondNavbar/NewsSecondNavbar";

// const MiniNavbar = () => {
//   const [showSecondNavbar, setShowSecondNavbar] = useState(false); // State to toggle NewsSecondNavbar visibility

//   const ArrEle = ["Top Stories", "Categories", "Trending"];
//   const ArrLink = ["#", "#", "/CategoriesPage", "#"];
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
//     setShowSecondNavbar(!showSecondNavbar); // Toggle the visibility of the second navbar
//   };

//   const isActive = (path) => {
//     return location.pathname === path ? "hover" : ""; // Apply hover class for active links
//   };

//   return (
//     <div className="NavbarMainContainer">
//       <div className="NavbarMain">
//         <div className="itemImg">
//           <img src={Logo} alt="Logo" />
//         </div>
//         <ul className="NavbarList">
//           {ArrEle.map((item, index) => (
//             <li
//               key={index}
//               className={`NavbarItems ${isActive(ArrLink[index])}`}
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

//         {/* Conditionally render the NewsSecondNavbar */}
//       </div>
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

  const ArrEle = ["Top Stories", "Categories", "Trending"];
  const ArrLink = ["#", "#", "/CategoriesPage", "#"];
  const ArrEle2 = ["Home"];
  const ArrLink2 = ["/"];
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

  const handleCategoriesClick = () => {
    // Toggle the visibility of the second navbar and reset active class if clicked again
    if (selected === "Categories") {
      setSelected(""); // Remove the active class if already selected
      setShowSecondNavbar(false); // Hide NewsSecondNavbar
    } else {
      setSelected("Categories"); // Set Categories as the active button
      setShowSecondNavbar(true); // Show NewsSecondNavbar
    }
  };

  const isActive = (item) => {
    return selected === item ? "hover" : ""; // Apply hover class for active links
  };

  return (
    <div className="NavbarMainContainer">
      <div className="NavbarMain">
        <div className="itemImg">
          <img src={Logo} alt="Logo" />
        </div>
        <ul className="NavbarList">
          {ArrEle.map((item, index) => (
            <li
              key={index}
              className={`NavbarItems ${isActive(item)}`} // Check if this item is active
              onClick={item === "Categories" ? handleCategoriesClick : null} // Only toggle for Categories
            >
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
              className={`NavbarItems NavbarItems2 ${isActive(
                ArrLink2[index]
              )}`}
            >
              <Link to={ArrLink2[index]}>{item}</Link>
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
