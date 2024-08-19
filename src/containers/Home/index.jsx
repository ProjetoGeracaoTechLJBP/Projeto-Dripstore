import React, { useState } from 'react';
import axios from 'axios';
import Checkout from './Checkout';
import { Title } from './styles'; 

function Home() {
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [endereco, setEndereco] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [complemento, setComplemento] = useState('');
    const [nomeCartao, setNomeCartao] = useState('');
    const [numeroCartao, setNumeroCartao] = useState('');
    const [validadeCartao, setValidadeCartao] = useState('');
    const [cvv, setCvv] = useState('');
    const [products, setProducts] = useState([
        { id: 1, name: 'Produto 1', quantity: 1, price: 100 },
        { id: 2, name: 'Produto 2', quantity: 2, price: 150 },
    ]);

    const handleQuantityChange = (id, change) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product.id === id
                    ? { ...product, quantity: Math.max(1, product.quantity + change) }
                    : product
            )
        );
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Remover a validação das informações pessoais
        try {
            await axios.post('http://localhost:5000/api/informacoes_pessoais', {
                nome_completo: nomeCompleto,
                cpf,
                email,
                celular,
                endereco,
                bairro,
                cidade,
                cep,
                complemento,
                nome_cartao: nomeCartao,
                numero_cartao: numeroCartao,
                validade_cartao: validadeCartao,
                cvv
            });
            alert('Informações enviadas com sucesso!');
        } catch (error) {
            alert('Erro ao enviar informações: ' + error.message);
        }
    };

    return (
        <div>
            <Title>
                <header>
                    <form className="d-flex" role="search">
                        <nav className="navbar navbar-expand">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#">
                                    <img src="../src/assets/digitalLOGO.png" className="digitalLOGO" alt="Logo Digital Store" />
                                </a>
                                <input className="Pesquisar" placeholder="Pesquisar Produto..." />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    fill="currentColor"
                                    id="lupa"
                                    className="bi bi-search"
                                    viewBox="0 0 18 18"
                                >
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                                <a href="#" id="Cadastre-se" className="navbar-brand">
                                    Cadastre-se
                                </a>
                                <button className="botao1" type="submit">
                                    Entrar
                                </button>
                                <svg
                                    className="carrinho"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 30 30"
                                >
                                    <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                </svg>
                            </div>
                        </nav>
                    </form>
                    <nav className="nav-item" style={{ margin: 3 }}>
                        <b>
                            <a href="http://127.0.0.1:5500/pagina-finalizar-compra/Home/finalizar.html">
                                Home
                            </a>
                            <a href="#">Produtos</a>
                            <a href="#">Categorias</a>
                            <a href="#">Meus Pedidos</a>
                        </b>
                    </nav>
                </header>
                <form className="formulario" onSubmit={handleSubmit}>
                    <h1 className="finaliz">Finalizar Compra</h1>
                    <p className="infoPessoal">Informações Pessoais</p>
                    <hr className="linha" />
                    <div className="mb-3">
                        <label htmlFor="nomeCompleto" className="form-label">
                            Nome Completo
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="nomeCompleto"
                            placeholder="Insira seu nome"
                            value={nomeCompleto}
                            onChange={(e) => setNomeCompleto(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cpf" className="form-label">
                            CPF
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="cpf"
                            placeholder="Insira seu CPF"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Insira seu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="celular" className="form-label">
                            Celular
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="celular"
                            placeholder="Insira seu celular"
                            value={celular}
                            onChange={(e) => setCelular(e.target.value)}
                        />
                    </div>
                    <p className="infoPessoal">Informações de Entrega</p>
                    <hr className="linha" />
                    <div className="mb-3">
                        <label htmlFor="endereco" className="form-label">
                            Endereço
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="endereco"
                            placeholder="Insira seu endereço"
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="bairro" className="form-label">
                            Bairro
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="bairro"
                            placeholder="Insira seu bairro"
                            value={bairro}
                            onChange={(e) => setBairro(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cidade" className="form-label">
                            Cidade
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="cidade"
                            placeholder="Insira sua cidade"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cep" className="form-label">
                            CEP
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="cep"
                            placeholder="Insira seu CEP"
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="complemento" className="form-label">
                            Complemento
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="complemento"
                            placeholder="Insira complemento"
                            value={complemento}
                            onChange={(e) => setComplemento(e.target.value)}
                        />
                    </div>
                    <p className="infoPessoal">Informações de Pagamento</p>
                    <hr className="linha" />
                    <div className="mb-3">
                        <label htmlFor="nomeCartao" className="form-label">
                            Nome do Cartão
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="nomeCartao"
                            placeholder="Insira o nome do cartão"
                            value={nomeCartao}
                            onChange={(e) => setNomeCartao(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="numeroCartao" className="form-label">
                            Número do Cartão
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="numeroCartao"
                            placeholder="Insira número do cartão"
                            value={numeroCartao}
                            onChange={(e) => setNumeroCartao(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="validadeCartao" className="form-label">
                            Data de validade do Cartão
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="validadeCartao"
                            placeholder="Insira a validade do cartão"
                            value={validadeCartao}
                            onChange={(e) => setValidadeCartao(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cvv" className="form-label">
                            CVV
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="cvv"
                            placeholder="CVV"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                        />
                    </div>
                    <p className="infoPessoal">Finalizar Compra</p>
                    <hr className="linha" />
                    <div className="mb-3">
                        <label htmlFor="total" className="form-label">
                        <Checkout products={products} onQuantityChange={handleQuantityChange} />
                        </label>
                    </div>
                    <button className="botao2x" type="submit">
                        Realizar Pagamento
                    </button>
                </form>
                <footer>
                    <div className="rodape" id="contato">
                        <div className="rodape-div">
                            <div className="rodape-div-1">
                                <div className="rodape-div-1-coluna">
                                    <span>
                                        <b>Digital Store</b>
                                    </span>
                                    <p className="ds">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
                                        aliquid iure nam dolor nobis consequuntur modi iste.
                                    </p>
                                </div>
                            </div>
                            <div className="rodape-div-2">
                                <div className="rodape-div-2-coluna">
                                    <span>
                                        <b>Informações</b>
                                    </span>
                                    <p>
                                        <a href="#servicos">Sobre a Drip Store</a>
                                    </p>
                                    <p>
                                        <a href="#empresa">Segurança</a>
                                    </p>
                                    <p>
                                        <a href="#sobre">Wishlist</a>
                                    </p>
                                    <p>
                                        <a href="#sobre">Blog</a>
                                    </p>
                                    <p>
                                        <a href="#sobre">Trabalhe Conosco</a>
                                    </p>
                                    <p>
                                        <a href="#sobre">Meus Pedidos</a>
                                    </p>
                                </div>
                            </div>
                            <div className="rodape-div-3">
                                <div className="rodape-div-3-coluna">
                                    <span>
                                        <b>Categorias</b>
                                    </span>
                                    <p>
                                        <a href="#servicos">Camisetas</a>
                                    </p>
                                    <p>
                                        <a href="#empresa">Calças</a>
                                    </p>
                                    <p>
                                        <a href="#sobre">Bonés</a>
                                    </p>
                                    <p>
                                        <a href="#sobre">Headphones</a>
                                    </p>
                                    <p>
                                        <a href="#sobre">Tênis</a>
                                    </p>
                                </div>
                            </div>
                            <div className="rodape-div-4">
                                <div className="rodape-div-4-coluna">
                                    <span>
                                        <b>Contato</b>
                                    </span>
                                    <p>
                                        Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
                                        60150161
                                    </p>
                                    <p>(85) 3051-3411</p>
                                </div>
                            </div>
                        </div>
                        <p className="rodape-direitos">
                            Copyright © 2023 – Todos os Direitos Reservados.
                        </p>
                    </div>
                </footer>
            </Title>
        </div>
    );
}

export default Home;
