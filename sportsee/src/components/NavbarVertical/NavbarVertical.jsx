import React from 'react';
import './NavbarVertical.css';
import {MdDirectionsBike} from 'react-icons/md';
import {BiSwim} from 'react-icons/bi';
import {BiDumbbell} from 'react-icons/bi';
import {GiMeditation} from 'react-icons/gi';


function NavbarV() {
    return (
        <nav className="navbarv">
            <ul className="navbar-navv">

                <li className="nav-itemv">
                    <a href="#" className="nav-linkv">
                        <div className="carre">
                            <GiMeditation className="icon"/>
                        </div>
                    </a>
                </li>
                <li className="nav-itemv">
                    <a href="#" className="nav-linkv">
                        <div className="carre">
                            <BiSwim className="icon"/>
                        </div>
                    </a>
                </li>
                <li className="nav-itemv">
                    <a href="#" className="nav-linkv">
                        <div className="carre">
                            <MdDirectionsBike className="icon"/>
                        </div>
                    </a>
                </li>
                <li className="nav-itemv">
                    <a href="#" className="nav-linkv">
                        <div className="carre">
                            <BiDumbbell className="icon"/>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavbarV;
