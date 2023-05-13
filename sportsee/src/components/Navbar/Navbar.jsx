import React from 'react';
import './Navbar.css';


/**
 * Composant pour afficher la barre de navigation
 * @function Navbar
 * @returns {JSX.Element} Élément JSX représentant la barre de navigation
 */
function Navbar() {
    return (
        <nav className="navbar">
            <img src="https://res.cloudinary.com/dtx8credj/image/upload/v1683639469/la_pw0duv.png" className="logo"
                 alt="logo"/>
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