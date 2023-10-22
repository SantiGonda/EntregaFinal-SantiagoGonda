import React from "react";
import { NavLink } from 'react-router-dom'
import ImgGreen from "./imgNav/GS-logo-blanco.png";
import "./NavBar.css"
import Acordeon from "./Acordeon";
import { getCategories } from "../../Data";

/*
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
*/


function NavBar() {
    return (
<nav className="navbar navbar-expand-lg" data-bs-theme="dark">
<div className="container-fluid">

 <NavLink to={ '/' } className="navbar-brand ps-3" ><img src={ImgGreen} alt="Logo green"/> </NavLink>

    <div className="justify-content-end">

        <ul className="navbar-nav text-center">

            <li className="nav-item links">
             <NavLink to={ '/' } className="nav-link" >HOME</NavLink>
            </li>

            <li className="nav-item links">
            <Acordeon categorias={getCategories()} />
            </li>


            <li className="nav-item links">
            <NavLink to={ '/' } className="nav-link disabled" >SINCE 2022</NavLink>
            </li>

        </ul>
    </div>
</div>
</nav>
    )
}

export default NavBar


/* 
            <li className="nav-item links">
            <NavLink to={ '/geneticas' } className="nav-link" >Genéticas </NavLink>
            </li> */