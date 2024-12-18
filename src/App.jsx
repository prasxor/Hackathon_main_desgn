
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Elements/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import Footer from "./Components/Elements/Footer/Footer";
import News from "./Components/Pages/News/News";
import CategoriesPage from "./Components/Elements/NewsPageCompoent/CategoriesPage/CategoriesPage";
import NotFoundPage from "./Components/Pages/NotFoundPage/NotFoundPage";
import FinalNewsPage from "./Components/Elements/NewsPageCompoent/FinalNewsPage/FinalNewsPage";
import "./App.css";
import NewsHeadlines from "./Components/Elements/NewsPageCompoent/Newsheadlines/NewsHeadlines";

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
    "/News/sports",
    "/News/business",
    "/News/entertainment",
    "/News/health",
    "/News/general",
    "/News/science",
    "/News/technology",
    "/news/sports",
    "/news/business",
    "/news/entertainment",
    "/news/health",
    "/news/general",
    "/news/science",
    "/news/technology",
    "/final-news",
    "/news/headlines"
  ];


  const isNewsPage = newsPages.includes(location.pathname); 
  console.log("Current Route:", location.pathname);

  return (
    <div className="backgroundContainer">
      {!isNewsPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/news/:category" element={<CategoriesPage />} />
        {/* <Route path="/news/*" element={<CategoriesPage />} /> */}
        <Route path="/news/headlines" element={<NewsHeadlines />} />
        <Route path="/final-news" element={<FinalNewsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
