import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import { useUser } from '../Context/UserContext'; // 👈 importa

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { user } = useUser(); // 👈 usa el usuario global

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://flagcdn.com/w320/de.png" alt="German flag" className="flag" />
        <span><span className="white">EINFACH</span><span className="red">DEUTSCH</span></span>
      </div>

      <div className="navbar-links">
        <Link to="/home">Home</Link>
        <Link to="/practice">Practice</Link>
        <Link to="/progress">Progress</Link>
      </div>

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
    </nav>
  );
}
