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

import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/Elements/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import Footer from "./Components/Elements/Footer/Footer";
import News from "./Components/Pages/News/News";
import "./App.css";
import NotFoundPage from "./Components/Pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation(); // Get current route
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isNewsPage = location.pathname === '/news';

  return (
    <div className="backgroundContainer">
      <div className={`navbarMainApp ${isNewsPage && scrolling ? "hidden" : ""}`}>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/NotFoundPage" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
