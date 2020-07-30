import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { configure } from '@testing-library/react';

//STORE
import { getLanches } from '../../store/fetchActions'
import { addItem, removeItem } from '../../store/ducks/cart';

//Componentes e Style
import SimpleModal from '../SimpleModal';
import Table from 'react-bootstrap/Table';
import CardLanche from '../../components/CardLanche'
import CardCart from "../../components/CardCart";
import './styles.css';
import defaultLanche from '../../assets/uploadedItens/Bacon.png'


export default function Section2() {
    //REDUX
    const lanches = useSelector((state) => state.lanches);
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(getLanches());
        },
        [dispatch]
    );

    function addToCart(item) {
        dispatch(addItem(item));
    }

    function removeFromCart(lanche) {
        dispatch(removeItem(lanche));
    }

    return (
        <div className="section2">
            <div className="menu">
                {lanches.map((lanche, index) => <CardLanche key={index} lanche={lanche} addToCart={addToCart} />)}
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
            <SimpleModal />
        </div>

    );
}