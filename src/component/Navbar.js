import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'


// ----------------------------------==--------------------------------
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <h1 className="navbar_title">Provu Pokedex</h1>

                <ul className="navbar_menu">
                    <li>
                        <Link className="navbar_menu_inicio" to='/component/pokedex'>Início</Link>
                    </li>
                    <li>
                        <Link className="navbar_menu_sobre" to='/component/sobre'>Sobre</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar