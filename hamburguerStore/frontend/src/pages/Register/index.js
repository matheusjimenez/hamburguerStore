import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.png';

export default function Register() {
    const [nome, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone_cliente, setTelefone] = useState('');
    const [senha, setPassword] = useState('');
    const [confirm_password, setConfirm_Password] = useState('');

    var confirm_password1 = document.getElementById("confirm_password");

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        
        const data = {
            nome, 
            email, 
            senha, 
            telefone_cliente
        };
        

        try{
            const response = await api.post('/user', data);

            history.push('/');
        }catch(err){
            alert('Erro no cadastro, tente novamente! Verifique se você já possui cadastro');
        }
    }

    function validatePassword() {
        if(senha != confirm_password) {
            confirm_password1.setCustomValidity("As senhas estão diferentes");
            return false;
          } else {
            confirm_password1.setCustomValidity('');
        }
        return true
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} className="logoImgRegister" alt="royal steak burguer" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e facilite seu próximo pedido.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"></FiArrowLeft>
                        Já tenho cadastro
                    </Link>

                </section>

                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Seu Nome"
                        value={nome}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Seu E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="Sua Senha"
                        id="password"
                        required
                        type="password"
                        value={senha}
                        onChange={validatePassword}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <input
                        placeholder="Confirme sua Senha"
                        id="confirm_password"
                        type="password"
                        required
                        value={confirm_password}
                        onKeyUp={validatePassword}
                        onChange={e => setConfirm_Password(e.target.value)}
                    />
                    <input
                        placeholder="Seu Telefone"
                        value={telefone_cliente}
                        onChange={e => setTelefone(e.target.value)}
                    />

                    {/* <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{width:80}} />
                    </div> */}

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>

    );
}