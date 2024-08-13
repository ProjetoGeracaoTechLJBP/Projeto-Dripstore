import './SectionPedidos.css'
function meusPedidos(params) {
    return(
        <>
            <section className="container-infos">

                <div className="container-options">
                    <ul className='options-list'>
                        <li className="meuperfil"><a href="">Meu Perfil</a></li>
                        <hr />
                        <li className="meuspedidios"><a href="">Meus Pedidos</a></li>
                        <hr />
                        <li className="minhasinformacoes"><a href="">Minhas Informações</a></li>
                        <hr />
                        <li className="pagamentos"><a href="">Métodos de pagamento</a></li>
                    </ul>
                </div>

                <div className="container-myinfos">
                    <div className="myinfo">
                        <p className='  '>Minha informações</p>
                        <hr />
                        <ul className="personal-info">
                            <li>
                                <p className='info-title'>Nome:</p>
                                <p className='info-data'>Beatriz Lopes</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default meusPedidos;