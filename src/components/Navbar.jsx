// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import Logo from './Logo'; // Custom component for styled "L"

function Navbar() {
  return (
    <nav className="navbar">
      <Logo /> {/* Styled "L" logo */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <button className="theme-toggle">🌓</button>
    </nav>
  );
}

export default Navbar;