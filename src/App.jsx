import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./components/Navigation";
import AboutPage from "./pages/AboutPage";
import NewLandingPage from "./pages/NewLandingPage";
import "./App.css";
import ContactPage from "./pages/ContactPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";

// Wrapper component to conditionally show navigation
function AppContent() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <div className="App">
      {/* Only show global navigation on non-landing pages */}
      {!isLandingPage && <Navigation />}
      <Routes>
        <Route path="/" element={<NewLandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
