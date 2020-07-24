import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiX, FiShoppingCart } from 'react-icons/fi';

import SimpleModal from '../SimpleModal';
import Table from 'react-bootstrap/Table';
import api from '../../services/api';


import defaultLanche from '../../assets/uploadedItens/Bacon.png'

import './styles.css';
import { configure } from '@testing-library/react';

export default function Section2() {
    let cartCount = parseInt(0);
    const history = useHistory();
    const [lanches, setLanches] = useState([]);
    const [cart, setCart] = useState([]);
    const [subTotal, setSubTotal] = useState();

    // console.log('esse é o subtotal '+ subTotal);

    useEffect(() => {
        api.get('lanches').then(response => {
            setTimeout(() => { setLanches(response.data); }, 10000);
        })
    }, [lanches]);

    async function addToCart(productKey) {
        // setCart(JSON.parse(localStorage.getItem('shopping-cart')));
        await lanches.map(pedido => {
            if (pedido.id == productKey) {
                cart.push({
                    "id": cartCount,
                    "nome": pedido.nome_lanche,
                    "Adicionais": "underconstruction",
                    "valor": Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(pedido.valor_lanche),
                    "cartCountId": cartCount
                })
                cartCount++;
            }
        }

        );

        if (isNaN(parseFloat(subTotal))){
            setSubTotal(parseFloat(0));
            console.log('alo marciano');
        }
        if (localStorage.getItem('shopping-cart'))
            JSON.parse(localStorage.getItem('shopping-cart'))
                .map(pedido => {
                    setSubTotal(parseFloat(subTotal) + parseFloat(pedido.valor));
                })

        // (cart);
        localStorage.setItem('shopping-cart', JSON.stringify(cart));


    }

    return (
        <div className="section2">
            <div className="menu">


                {/* <h2>Lanches</h2> */}
                {lanches.map(lanche => (

                    <div key={lanche.id} className="card menu-container">
                        <img className="card-img-top imageCard" src={defaultLanche} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title nameL">{lanche.nome_lanche}</h5>
                            <div className="criancaDaProfecia">
                                <p className="card-text textCardT">{lanche.descricao_lanche}</p>
                                <p>Burguer de Costela com Bacon, Queijo, Muito Bacon e Maionese.</p>
                            </div>
                            <div className="bottomAreaCard">
                                <button onClick={() => { addToCart(lanche.id) }} className="button">{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(lanche.valor_lanche)}</button>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
            <div className="container carrinho">
                <center><h4>Carrinho</h4></center>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Qnt</th>
                            <th>Preço</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(pedidos => (
                            <tr key={pedidos.cartCountId}>
                                <td>{pedidos.nome}</td>
                                <td>1</td>
                                <td>{pedidos.valor}</td>
                                <td><button><FiX></FiX></button></td>
                            </tr>
                        ))}
                    </tbody>

                </Table>
                <div className="fim">
                    <p className="subtotal">Subtotal: R${subTotal}</p>
                    <button onClick={() => {
                        history.push('/endereco');
                    }} className="butn btn-danger">Comprar</button>
                </div>
            </div>
            <SimpleModal />
        </div>

    );
}