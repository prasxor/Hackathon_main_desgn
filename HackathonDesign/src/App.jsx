import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Elements/Navbar/Navbar";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import ContactUs from "./Components/Pages/ContactUs/ContactUs";
import "./App.css";
import Footer from "./Components/Elements/Footer/Footer";
import News from "./Components/Pages/News/News";

function App() {
  return (
    <Router className="routerMain">
      <div className="navbarMainApp">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <div className="FooterMainApp">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
