import { Link } from 'react-router-dom';
import Logo from '../common/Logo'; // Styled "L" logo component

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
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