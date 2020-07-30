import React from "react";

import logoImg from '../../assets/logo.png';
export default function Cabeça(){
    return(
        
            <div>
                <center><img className="logotopo" src={logoImg} alt="logo do topo"/></center>
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
            </div>
    );
}