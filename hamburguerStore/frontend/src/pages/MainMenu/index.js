import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';
// import { FiPower, FiTrash2, FiPlus, FiMinus, FiX, FiShoppingCart, FiUnderline } from 'react-icons/fi';

import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';
import api from '../../services/api';
import SideBarMenu from '../SideBarMenu';
import Section2 from '../Section2';

import logoImg from '../../assets/logo.png';
import sliderFirstImage from '../../assets/slider1.png';
import sliderSecondImage from '../../assets/merchanEntrega.png';
import sliderThirdImage from '../../assets/royalImg.png';
    
import './styles.css';

export default function MainMenu() {
    // let cartCount;
    // const [lanches, setLanches] = useState([]);
    // const [cart, setCart] = useState([]);

    // // setCart(JSON.parse(localStorage.getItem('shopping-cart')));
    // if (!(localStorage.getItem('shopping-cart'))) {
    //     cartCount = 0;
    // }
    // else {
    //     let cart = JSON.parse(localStorage.getItem('shopping-cart'));
    //     cartCount = cart.length;
    // }
    

    // async function handleDeleteFromCart(id) {

    //     setLanches(lanches.filter(lanche => lanche.id !== id));

    // }

    // function clearCart() {
    //     // localStorage.removeItem('shopping-cart');
    // }
    return (
        <div className="corpo">
            <div className="page">
                <img className="logotopo" src={logoImg} />
                <div className="section1 ">

                    <h2>Royal Steak Burger</h2>
                    <h4 className="txtSub">Lanchonete de Hamburgueres Artesanais</h4>
                    <div className="miniTabela">
                        <div className="celula" >
                            <p className="txtCelula">Prazo aproximado de entrega: 50 minutos</p>
                        </div>
                        <div className="celula">
                            <p className="txtCelula">Valor minimo de peddio: R$15,00</p>
                        </div>
                        <div className="celula" >
                            <span className="dot" margin-top="50px"></span>
                            <p className="txtCelula">Aberto</p>
                        </div>

                    </div>
                </div>

                <div className="bagulho" >

                    <Carousel id="carouselExampleControls">
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={sliderFirstImage}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                {/* <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={sliderSecondImage}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                {/* <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={sliderThirdImage}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                {/* <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>


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

                    <Section2 />
                </div>
            </div>
        </div>
    );
}