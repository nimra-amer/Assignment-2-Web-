import { Link } from "react-router-dom";
import { useState } from "react";
import "./navigation.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/Home" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/About" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/Projects" onClick={() => setIsOpen(false)}>Projects</Link>
          <Link to="/Contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
