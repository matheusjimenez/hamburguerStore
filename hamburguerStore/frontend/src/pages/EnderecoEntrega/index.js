import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; //useHistory removido pra não me tiltar com warnings
import { FiSkipBack, FiDollarSign, FiCreditCard } from 'react-icons/fi';

import backGround from '../../assets/merchanEntrega.png'

import './styles.css';

export default function EnderecoEntrega() {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numeroCasa, setNumeroCasa] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [pontoReferencia, setPontoReferencia] = useState('');
    const [nome, setNome] = useState('');
    const [ddd, setDdd] = useState('');
    const [celular, setCelular] = useState('');
    const [items, setItems] = useState('');
    const [loadApi, setLoadApi] = useState('');
    const [showTrocoArea, setShowTrocoArea] = useState(false);

    

    useEffect(() => {
        fetch(`https://viacep.com.br/ws/${cep}/json`)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                },
                (error) => {
                    if (loadApi)
                        alert('Cep não pode ser carregado pelo erro: ' + error);
                }
            )
    }, [cep])

    function limpa_formulário_cep() {
        setEndereco('');
        setCep('');
        setBairro('');
    }

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            setEndereco(conteudo.logradouro);
            setBairro(conteudo.bairro);
        }
        else {
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    }

    async function pesquisacep(valor) {

        var cep = valor.replace(/\D/g, '');

        if (cep != "") {
            var validacep = /^[0-9]{8}$/;

            if (await validacep.test(cep)) {
                setLoadApi(true);
                meu_callback(items);

            }
            else {
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        }
        else {
            limpa_formulário_cep();
        }
    };


    function handleEntrega(e) {
        e.preventDefault();

        const data = {
            cep,
            endereco,
            numeroCasa,
            complemento,
            bairro,
            pontoReferencia,
            nome,
            ddd,
            celular
        };

        let metodoPagamento = document.getElementsByName("payments")

        for (var i = 0, length = metodoPagamento.length; i < length; i++) {
            if (metodoPagamento[i].checked) {
                metodoPagamento = metodoPagamento[i].value;

                break;
            }
        }

        let valorPedido = '';
        let pedidoStorage = JSON.parse(localStorage.getItem('shopping-cart'));
        let pedido = pedidoStorage.map(lanches => {
            return `           🍔${lanches.nome} %0a`
        });


        let textContent = `
        
        ✏*Pedido enviado por: ${nome}* ⭐%0a
            🗺CEP: ${cep} %0a
            Endereço: ${endereco} %0a
            Complemento: ${complemento} %0a
            Numero da casa: ${numeroCasa} %0a
            Bairro: ${bairro} %0a
            Ponto de Referência: ${pontoReferencia} %0a %0a
            ☎Telefone do cliente: (${ddd}) ${celular} %0a %0a
            lanches:%0a *${pedido}* %0a
            💲Pagamento: ${metodoPagamento}%0a
            *Valor do pedido:* ${valorPedido}
         `;
        window.open(`https://api.whatsapp.com/send?phone=+55${ddd + celular}&text=${textContent}`);
    }

    return (
        <div className="entrega-container">
            <div className="content">
                <section>
                    <Link className="back-link" to="/">
                        <FiSkipBack size={16} color="#E02041"></FiSkipBack>
                        Voltar para o menu
                    </Link>
                    {/* <img src={backGround} className="imageEntrega" alt="royal steak burguer" /> */}

                    <h1>Insira o endereço</h1>
                    <p>Faça seu cadastro, entre na plataforma e facilite seu próximo pedido.</p>


                </section>

                <form onSubmit={handleEntrega}>
                    <input
                        placeholder="CEP"
                        onBlur={() => { pesquisacep(cep) }}
                        value={cep}
                        onChange={e => setCep(e.target.value)}
                    />
                    <input
                        placeholder="Endereço"
                        value={endereco}
                        onChange={e => setEndereco(e.target.value)}
                    />
                    <input
                        placeholder="Número da residência"
                        required
                        value={numeroCasa}
                        onChange={e => setNumeroCasa(e.target.value)}
                    />
                    <input
                        placeholder="Complemento"
                        required
                        value={complemento}
                        onChange={e => setComplemento(e.target.value)}
                    />
                    <input
                        placeholder="Bairro"
                        value={bairro}
                        onChange={e => setBairro(e.target.value)}
                    />
                    <input
                        placeholder="Ponto de Referência"
                        value={pontoReferencia}
                        onChange={e => setPontoReferencia(e.target.value)}
                    />
                    <input
                        placeholder="Nome"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <input
                        placeholder="ddd"
                        value={ddd}
                        onChange={e => setDdd(e.target.value)}
                    />
                    <input
                        placeholder="Celular"
                        value={celular}
                        onChange={e => setCelular(e.target.value)}
                    />

                    <div id="payments">
                        <h2>Método de pagamento:</h2>
                        <div className="paymentLabel">
                            <input onChange={()=>{setShowTrocoArea(true);}} type="radio" id="dinheiro" name="payments" value="dinheiro" />
                            <label for="male">Dinheiro</label><FiDollarSign></FiDollarSign>
                            <br />
                        </div>
                        <div className="paymentLabel">
                            <input onChange={()=>{setShowTrocoArea(false);}} type="radio" id="debito" name="payments" value="debito" />
                            <label for="female">Cartão de débito</label><FiCreditCard></FiCreditCard><br />
                        </div>
                        <div className="paymentLabel">
                            <input onChange={()=>{setShowTrocoArea(false);}} type="radio" id="other" name="payments" value="credito" />
                            <label for="other">Cartão de crédito</label><FiCreditCard></FiCreditCard>
                        </div>
                    </div>
                            { showTrocoArea ? <input type="text" placeholder="Precisa de troco?" id="trocoPara"></input> : null }



                    {/* <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{width:80}} />
                    </div> */}

                    <button className="button" type="submit">Enviar pedido para o resaturante</button>
                </form>
            </div>
        </div>

    );
}