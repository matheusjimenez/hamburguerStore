import React from 'react';

// import { Link, useHistory } from 'react-router-dom';
// import { FiPower, FiTrash2, FiPlus, FiMinus, FiX, FiShoppingCart, FiUnderline } from 'react-icons/fi';

import SideBarMenu from '../SideBarMenu';
import Section2 from '../Section2';

import './styles.css';
import Cabeça from '../../components/Cabeça';
import Carrossel from '../../components/carrossel';
import Navbar from "../../components/navbar";

export default function MainMenu() {

    return (
        <div className="corpo">
            <div className="page">
                <Cabeça />

                <div className="bagulho" >
                    <Carrossel />

                        <Navbar/>
                    
                    <Section2/>
                </div>
            </div>
        </div>

    );
}