import React from 'react'
import { FiX, FiShoppingCart } from 'react-icons/fi';


export default function CardCart({ lanche, removeFromCart }) {
    return (
        <tr >
            <td>{lanche.nome_lanche}</td>
            <td>jacare</td>
            <td>{lanche.valor_lanche}</td>
            <td><button
             onClick={() => removeFromCart(lanche._id)}>
                <FiX></FiX></button></td>
        </tr>
    )
}
