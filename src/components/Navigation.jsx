import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="logo">
          <h2>Sabi Wallet</h2>
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-links desktop-nav">
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/terms"
              className={location.pathname === "/terms" ? "active" : ""}
            >
              Terms
            </Link>
          </li>
          <li>
            <Link
              to="/privacy"
              className={location.pathname === "/privacy" ? "active" : ""}
            >
              Privacy
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu Button */}
        <button
          className={`hamburger-btn ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Navigation Overlay */}
        <div className={`mobile-nav-overlay ${isMenuOpen ? "active" : ""}`}>
          <ul className="mobile-nav-links">
            <li>
              <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={location.pathname === "/about" ? "active" : ""}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={location.pathname === "/contact" ? "active" : ""}
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className={location.pathname === "/terms" ? "active" : ""}
                onClick={closeMenu}
              >
                Terms
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className={location.pathname === "/privacy" ? "active" : ""}
                onClick={closeMenu}
              >
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
