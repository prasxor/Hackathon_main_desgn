import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
    <div className="backgroundContainer">
      <Router>
        <div className="navbarMainApp">
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
      </Router>
      
    </div>
  );
}

export default App;
