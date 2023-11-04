import React from "react";
import { NavLink } from 'react-router-dom'
import ImgGreen from "./imgNav/GS-logo-blanco.png";
import "./NavBar.css"
import Acordeon from "./Acordeon";
// import { getCategories } from "../../Data";
// import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartWidget from "../CartWidget/CartWidget";
import { getDocs, collection} from "firebase/firestore"
import { db } from "./../../config/Firebase"
import { useState } from "react";





function NavBar() {

    const [geneticas, setGeneticas] = useState([]);
    const [categorias, setCategorias] = useState([]);
   

 

        const collectionRef = collection(db, 'geneticas')

        getDocs(collectionRef)
            .then(response => {
                const geneticasFire = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setGeneticas(geneticasFire);
                const categorias = [...new Set(geneticas.map(item => item.cat))];
                setCategorias(categorias);
            })
            .catch(error => {
                console.log(error)
            })
   




    return (
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
            <div className="container-fluid">

                <NavLink to={'/'} className="navbar-brand ps-3" ><img src={ImgGreen} alt="Logo green" /> </NavLink>

                <div className="justify-content-end pages">

                    <ul className="navbar-nav text-center">

                        <li className="nav-item links">
                            <NavLink to={'/'} className="nav-link" >HOME</NavLink>
                        </li>

                        <li className="nav-item links">
                            <Acordeon categorias={categorias} />
                        </li>


                        <li className="nav-item links">
                            <NavLink to={'/'} className="nav-link disabled" >SINCE 2022</NavLink>
                        </li>

                    </ul>
                </div>
                <div className="carrito">
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar

