import React from "react";
import { useSelector, useDispatch } from 'react-redux';

//REDUX
import { removeItem } from '../../store/ducks/cart';

//COMPONENTES / ESTILOS
import CardCart from "../../components/CardCart";
import Table from 'react-bootstrap/Table';


export default function Carrinho({ lanche, addToCart }) {

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    function removeFromCart(lanche) {
        dispatch(removeItem(lanche));
    }

    return (
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
                    <React.Fragment>
                        {cart.map((item) => <CardCart key={item._id} lanche={item} removeFromCart={removeFromCart} />)}
                    </React.Fragment>
                </tbody>

            </Table>
            <div className="fim">
                <p className="subtotal">Subtotal: R$pegadinha</p>
                <button className="butn btn-danger">Comprar</button>
            </div>
        </div>
    )
}