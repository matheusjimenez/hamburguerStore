import React from 'react'


import defaultLanche from "../../assets/uploadedItens/Bacon.png";

export default function CardLanche({ lanche, addToCart }) {
    return (
        <div key={lanche.id} className="card menu-container">
            <img className="card-img-top imageCard" src={defaultLanche} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title nameL">{lanche.nome_lanche}</h5>
                <div className="criancaDaProfecia">
                    <p className="card-text textCardT">{lanche.descricao_lanche}</p>
                    <p>Burguer de Costela com Bacon, Queijo, Muito Bacon e Maionese.</p>
                </div>
                <div className="bottomAreaCard">
                    <button /*onClick={() => { addToCart(lanche.id) }}*/ className="button">R$ 20,00</button>
                </div>
            </div>
        </div>
    )
}
//{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(lanche.valor_lanche)}