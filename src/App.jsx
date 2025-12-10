import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
// import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import NewLandingPage from "./pages/NewLandingPage";
import "./App.css";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<NewLandingPage />} />
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
