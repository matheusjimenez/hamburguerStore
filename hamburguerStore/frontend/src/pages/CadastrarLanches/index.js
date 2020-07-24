import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png';

export default function CadastrarLanches() {
    const [nome_lanche, setNome_lanche] = useState('');
    const [descricao_lanche, setDescricao_lanche] = useState('');
    const [valor_lanche, setValor_lanche] = useState('');
    const [vegano, setVegano] = useState('');
    const [imgLanche, setImgLanche] = useState('');

    const history = useHistory();

    const userId = localStorage.getItem('loginId');

    async function handleNewBurguer(e){
        e.preventDefault();

        const data = {
            nome_lanche,
            descricao_lanche,
            valor_lanche,
            vegano,
            imgLanche
        }

        try{
            await api.post('lanches', data,{
                headers:{
                    Authorization: userId
                }
            })

            history.push('/profile');
        }catch(err){
            alert('Erro ao cadastrar lanche, tente novamente.'+ err);
        }

    }

    return (
        <div className="cadastrar-lanches-container">
            <div className="content">
                <section>
                    <img src={logoImg} className="logoImg" alt="royal steak burguer" />

                    <h1>Cadastro novo lanche</h1>
                    <p>Preencha todos os campos para cadastrar novo lanche</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"></FiArrowLeft>
                        Voltar para Home
                    </Link>

                </section>

                <form onSubmit={handleNewBurguer}>
                    <input
                        placeholder="Nome do lanche"
                        value={nome_lanche}
                        onChange={e => setNome_lanche(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição do lanche"
                        value={descricao_lanche}
                        onChange={e => setDescricao_lanche(e.target.value)}
                    />
                    <input
                        placeholder="Valor do lanche"
                        type="text"
                        value={valor_lanche}
                        onChange={e => setValor_lanche(e.target.value)}
                    />
                    <input
                        type="checkbox"
                        id="vegan"
                        name="vegan1"
                        value={vegano}
                        onChange={e => setVegano(e.target.checked)}
                    />
                    <label> Lanche Vegano</label><br />
                    <input type="button" id="sendFoto" value="Enviar foto" />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}