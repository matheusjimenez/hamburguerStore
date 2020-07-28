import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiX, FiShoppingCart } from 'react-icons/fi';
import { useSelector, useDispatch } from 'react-redux';

import SimpleModal from '../SimpleModal';
import Table from 'react-bootstrap/Table';
import CardLanche from '../../components/CardLanche'

import { getLanches } from '../../store/fetchActions'

import defaultLanche from '../../assets/uploadedItens/Bacon.png'

import './styles.css';
import { configure } from '@testing-library/react';

export default function Section2() {
    let cartCount = parseInt(0);
    const history = useHistory();
    const [cart, setCart] = useState([]);
    const [subTotal, setSubTotal] = useState();

    //REDUX
    const lanches = useSelector((state) => state.lanches);
    const dispatch = useDispatch();

    // console.log('esse é o subtotal '+ subTotal);

    useEffect(
        () => {
            dispatch(getLanches());
        },
        [dispatch]
    );

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

        if (isNaN(parseFloat(subTotal))) {
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
                {lanches.map((lanche, index) => <CardLanche key = {index} lanche={ lanche } />)}
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