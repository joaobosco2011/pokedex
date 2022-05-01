import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <h1 className="navbar_title">Provu Pokedex</h1>

            <ul className="navbar_menu">
                <li className="navbar_menu_inicio">
                    <Link to='/component/pokedex'>Início</Link>
                </li>
                <li className="navbar_menu_sobre">
                    <Link to='/component/sobre'>Sobre</Link>
                </li>
            </ul>
        </>
    )
}

export default Navbar