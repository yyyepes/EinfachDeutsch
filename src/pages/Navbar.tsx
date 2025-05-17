import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import { useUser } from '../Context/UserContext';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // 👈 estado hamburguesa
  const { user } = useUser();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://flagcdn.com/w320/de.png" alt="German flag" className="flag" />
        <span><span className="white">EINFACH</span><span className="red">DEUTSCH</span></span>
      </div>

      {/* Botón hamburguesa solo en móvil */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/home">Home</Link>
        <Link to="/practice">Practice</Link>
        <Link to="/progress">Progress</Link>
        <div className="navbar-user" onClick={() => setShowDropdown(!showDropdown)}>
          <span>{user ? user.name : 'USER'} ▾</span>
          {showDropdown && (
            <div className="dropdown">
              <button>Profile</button>
              <button>Language</button>
              <button>Sign out</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
