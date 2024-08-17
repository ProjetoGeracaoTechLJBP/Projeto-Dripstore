import { useEffect, useState } from 'react';
import './SectionPedidos.css';

function MeusPedidos() {
    const [usuarios, setUsuario] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/users', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'GET',
        })
        .then(res => res.json())
        .then(data => {
            console.log('Dados recebidos:', data);
            setUsuario(data);  // Atualize o estado com os dados recebidos
        })
        .catch(error => console.error('Erro ao buscar dados:', error));
    }, []);

    const usuario = usuarios[0] || {}; 

    return (
        <>
            <section className="container-infos">
                <div className="container-options">
                    <ul className='options-list'>
                        <li className="meuperfil"><a href="">Meu Perfil</a></li>
                        <hr />
                        <li className="meuspedidios"><a href="">Meus Pedidos</a></li>
                        <hr />
                        <li className="minhas_informacoes"><a href="">Minhas Informações</a></li>
                        <hr />
                        <li className="pagamentos"><a href="">Métodos de pagamento</a></li>
                    </ul>
                </div>

                <div className="container-myinfos">
                    <div className="myinfo">
                        <p className=''>Minha informações</p>
                        <hr />
                        <ul className="personal-info">
                            <li>
                                <p className='info-title'>Nome:</p>
                                <p className='info-data'>{usuario.firstname}{usuario.surname}</p>
                            </li>
                            <li>
                                <p className='info-title'>CPF:</p>
                                <p className='info-data'>{usuario.cpf}</p>
                            </li>
                            <li>
                                <p className='info-title'>Email:</p>
                                <p className='info-data'>{usuario.email}</p>
                            </li>
                            <li>
                                <p className='info-title'>Celular:</p>
                                <p className='info-data'>{usuario.celular}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MeusPedidos;
