import React from "react";
import { NavLink } from 'react-router-dom'
import ImgGreen from "./imgNav/GS-logo-negro.png";
import "./NavBar.css"

function NavBar() {
    return (
        <nav className="hero-body navbar">
            <div className="navbar-brand">
                <img src={ImgGreen} alt="LogoGreen" width="200" height="28" />
                </div>
            <div className="navbar-item">
                <p className="title">CLUB CANNÁBICO</p>
            </div>
            <ul className="nave">
                <li>
                    <NavLink to={ '/' } >Home</NavLink>
                </li>
                <li>
                    <NavLink to={ '/geneticas' }>Genéticas </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar

