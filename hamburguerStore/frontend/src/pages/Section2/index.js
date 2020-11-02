import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//STORE
import { getLanches } from '../../store/fetchActions'
import { addItem } from '../../store/ducks/cart';

//Componentes e Style
import SimpleModal from '../SimpleModal';
import CardLanche from '../../components/CardLanche'

import './styles.css';
import Carrinho from '../../components/carrinho';

export default function Section2() {
    //REDUX
    const lanches = useSelector((state) => state.lanches);
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

    return (
        <div className="section2">
            <div className="menu">
                {lanches.map((lanche, index) => <CardLanche key={index} lanche={lanche} addToCart={addToCart} />)}
            </div>

            <Carrinho/>
        </div>

    );
}