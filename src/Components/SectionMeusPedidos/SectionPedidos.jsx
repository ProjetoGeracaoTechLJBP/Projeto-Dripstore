import { useEffect, useState } from 'react';
import infoUser from "../../LocalStorageDatas/users"
import './SectionPedidos.css';

function MeusPedidos() {

    const user = infoUser()
    console.log(user);

    if (!user) {
        return <div>Loading...</div>;
    }


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
                                <p className='info-data'>{user.firstname} {user.surname}</p>
                            </li>
                            <li>
                                <p className='info-title'>CPF:</p>
                                <p className='info-data'>{user.cpf}</p>
                            </li>
                            <li>
                                <p className='info-title'>Email:</p>
                                <p className='info-data'>{user.email}</p>
                            </li>
                            <li>
                                <p
                                id = 'info-cll'
                                className='info-title'>Celular:</p>
                                <p className='info-data'>{user.celular}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MeusPedidos;
