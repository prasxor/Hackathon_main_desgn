// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./Components/Elements/Navbar/Navbar";
// import Home from "./Components/Pages/Home/Home";
// import About from "./Components/Pages/About/About";
// import ContactUs from "./Components/Pages/ContactUs/ContactUs";
// import Footer from "./Components/Elements/Footer/Footer";
// import News from "./Components/Pages/News/News";
// import "./App.css";
// import NotFoundPage from "./Components/Pages/NotFoundPage/NotFoundPage";

// function App() {
//   return (
//     <div className="backgroundContainer">
//       <Router>
//         <div className="navbarMainApp">
//           <Navbar />
//         </div>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/news" element={<News />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<ContactUs />} />
//           <Route path="/NotFoundPage" element={<NotFoundPage />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Navbar from "./Components/Elements/Navbar/Navbar";
// import Home from "./Components/Pages/Home/Home";
// import About from "./Components/Pages/About/About";
// import ContactUs from "./Components/Pages/ContactUs/ContactUs";
// import Footer from "./Components/Elements/Footer/Footer";
// import News from "./Components/Pages/News/News";
// import "./App.css";
// import NotFoundPage from "./Components/Pages/NotFoundPage/NotFoundPage";
// import CategoriesPage from "./Components/Elements/NewsPageCompoent/CategoriesPage/CategoriesPage";

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// function AppContent() {
//   const location = useLocation(); // Get current route
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolling(true);
//       } else {
//         setScrolling(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const isNewsPage = location.pathname === '/news';

//   return (
//     <div className="backgroundContainer">
//       <div className={`navbarMainApp ${isNewsPage && scrolling ? "hidden" : ""}`}>
//         <Navbar />
//       </div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/news" element={<News />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="/CategoriesPage" element={<CategoriesPage />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// export default App;



// import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
// import Navbar from "./Components/Elements/Navbar/Navbar";
// import Home from "./Components/Pages/Home/Home";
// import About from "./Components/Pages/About/About";
// import ContactUs from "./Components/Pages/ContactUs/ContactUs";
// import Footer from "./Components/Elements/Footer/Footer";
// import News from "./Components/Pages/News/News";
// import CategoriesPage from "./Components/Elements/NewsPageCompoent/CategoriesPage/CategoriesPage";
// import NotFoundPage from "./Components/Pages/NotFoundPage/NotFoundPage";
// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <AppContent />
//     </Router>
//   );
// }

// function AppContent() {
//   const location = useLocation(); 

//   const isNewsPage = location.pathname === "/News"; 
//   console.log("Current Route:", location.pathname);


//   return (
//     <div className="backgroundContainer">
//       {!isNewsPage && <Navbar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/news" element={<News />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<ContactUs />} />
//         <Route path="/CategoriesPage" element={<CategoriesPage />} />
//         <Route path="/categories" element={<CategoriesPage/>}/>
//         <Route path="/top-stories" element={<CategoriesPage/>}/>
//         <Route path="/sports" element={<CategoriesPage/>}/>
//         <Route path="/business" element={<CategoriesPage/>}/>
//         <Route path="/entertainment" element={<CategoriesPage/>}/>
//         <Route path="/health" element={<CategoriesPage/>}/>
//         <Route path="/general" element={<CategoriesPage/>}/>
//         <Route path="/science" element={<CategoriesPage/>}/>
//         <Route path="/technology" element={<CategoriesPage/>}/>
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//       <Footer />
//     </div>
    
//   );
  
// }

// export default App;

import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Elements/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import Footer from "./Components/Elements/Footer/Footer";
import News from "./Components/Pages/News/News";
import CategoriesPage from "./Components/Elements/NewsPageCompoent/CategoriesPage/CategoriesPage";
import NotFoundPage from "./Components/Pages/NotFoundPage/NotFoundPage";
import "./App.css";
import FinalNewsPage from "./Components/Elements/NewsPageCompoent/FinalNewsPage/FinalNewsPage"

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation(); 

  // Array of paths for "news-related" routes
  const newsPages = [
    "/News",
    "News/top-stories",
    "News/sports",
    "News/business",
    "News/entertainment",
    "News/health",
    "News/general",
    "News/science",
    "News/technology",
  ];

  // Check if the current route is part of newsPages
  const isNewsPage = newsPages.includes(location.pathname); 
  console.log("Current Route:", location.pathname);

  return (
    <div className="backgroundContainer">
      {/* Conditionally render the Navbar for non-news pages */}
      {!isNewsPage && <Navbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="News/CategoriesPage" element={<CategoriesPage />} />
        <Route path="News/categories" element={<CategoriesPage />} />
        <Route path="News/top-stories" element={<CategoriesPage />} />
        <Route path="News/sports" element={<CategoriesPage />} />
        <Route path="News/business" element={<CategoriesPage />} />
        <Route path="News/entertainment" element={<CategoriesPage />} />
        <Route path="News/health" element={<CategoriesPage  />} />
        <Route path="News/general" element={<CategoriesPage />} />
        <Route path="News/science" element={<CategoriesPage />} />
        <Route path="News/technology" element={<CategoriesPage />} />
        <Route path="*" element={<FinalNewsPage />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
