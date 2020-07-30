import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.png';
import royalImg from '../../assets/royalImg.png';

export default function Logon() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const response = await api.post('/sessions', {email, senha});

            localStorage.setItem('loginId', response.data.id_cliente);
            localStorage.setItem('userName', response.data.nome);

            // response.header('LoggedUser', response.data.id_cliente);

            history.push('/menu');
        }catch(err){
            alert('Falha no login, tente novamente!');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                {/* <img className="logoImg" src={logoImg} alt="royal Steak Burguer"></img> */}
                <form onSubmit={handleLogin}>
                    <h1>Fazer Login</h1>

                    <input
                        placeholder="Seu email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    >

                    </input>
                    <input
                        placeholder="Sua senha"
                        required
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        type="password"
                    >

                    </input>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"></FiLogIn>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={royalImg} alt="real burguers"></img>
        </div>
    );
}