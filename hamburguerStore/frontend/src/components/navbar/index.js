import React from "react";


export default function Navbar() {
    return (

            <div className="navbar">
                        <a href="#home">Lanches</a>
                        <a href="#news">Bebidas</a>
                        <div className="dropdown">
                            <button className="dropbtn">Acompanhamento
                                    <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content">
                                <a href="#">Link 1</a>
                                <a href="#">Link 2</a>
                                <a href="#">Link 3</a>
                            </div>
                        </div>
                    </div>

    );
}