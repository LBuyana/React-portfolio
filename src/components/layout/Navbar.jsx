import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">L</Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/" className="nav-link">Contact</Link>
        <Link to="/" className="nav-link">Projects</Link>
      </div>
    </nav>
  );
}