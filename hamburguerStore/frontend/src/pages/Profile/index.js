import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import logoImg from '../../assets/logo.png';

import './styles.css';

export default function Profile() {
    const [lanches, setLanches] = useState([]);

    const history = useHistory();

    const loginId = localStorage.getItem('loginId');
    const userName = localStorage.getItem('userName');

    useEffect(() => {
        api.get('lanches', {
            headers: {
                Authorization: loginId,
            }
        }).then(response => {
            setLanches(response.data);
        })
    }, [loginId]);

    async function handleDeleteLanche(id) {
        try {
            await api.delete(`/lanches/${id}`, {
                headers: {
                    Authorization: loginId,
                }
            });

            setLanches(lanches.filter(lanche => lanche.id !== id));
        } catch (err) {
            alert('Erro ao deletar lanche, tente novamente!');
        }
    }

    function handleLogout() {
        localStorage.clear();

        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} className="logoImgProfile" alt="royal steak burguer" />
                <span>Bem vindo, {userName}</span>

                <Link className="button" to="/lanches/cadastrar">Cadastrar novo Lanche</Link>
                <Link className="button" to="/lanches/cadastrar">Cadastrar Acompanhamentos</Link>
                <Link className="button" to="/lanches/cadastrar">Cadastrar Bebidas</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
            <h1>Lanches cadastrados</h1>
            <ul>
                {lanches.map(lanche => (
                    <li key={lanche.id}>
                        <strong>Lanche:</strong>
                        <p>{lanche.nome_lanche}</p>

                        <strong>Descrição</strong>
                        <p>{lanche.descricao_lanche}</p>

                        <strong>Valor:</strong>
                        <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(lanche.valor_lanche)}</p>

                        <button onClick={() => handleDeleteLanche(lanche.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                        <label className="switch">
                            <input id="isLancheEnabled" type="checkbox" defaultChecked/>
                            <span className="slider round"></span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}