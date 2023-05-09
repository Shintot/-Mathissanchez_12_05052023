import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">

      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="#" className="nav-link">Accueil</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Profil</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Réglage</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">Communauté</a>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;
