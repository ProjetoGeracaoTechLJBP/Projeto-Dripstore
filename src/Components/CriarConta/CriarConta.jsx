import './CriarConta.css';
import InputCadastro from '../../PropsPages/InputCadastro'


function CriarConta(params) {
    return (
        <>
            <section className="container_title-and-forms">
                <h1 className="cadastroTitle">Criar Conta</h1>
                <div className="container-form">

                    <div className="form-container">

                        <p className="text-form">Informações pessoais</p>
                        <hr className="line-form" />

                        <form className='formulario' action="#" method="post">

                            {/* <label className='text-form' htmlFor="nome-completo">Nome Completo*</label >
                                <input className='form-input' type="text" id="nomeCompleto" name="nome" placeholder='Insira seu nome' required /> */}
                            <div className="form-group">
                                <InputCadastro
                                    title="Informações pessoais"
                                    label="Nome*"
                                    placeholder="Insira seu nome"
                                />
                            </div>

                            <div className="form-group">
                                <InputCadastro
                                    label="Sobrenome*"
                                    type="text"
                                    placeholder="Insira seu sobrenome"
                                />
                            </div>

                            <div className="form-group">
                                <InputCadastro
                                    label="Email*"
                                    type="text"
                                    placeholder="Insira seu email"
                                />
                            </div>
                            <div className="form-group">
                                <InputCadastro
                                    label="Senha*"
                                    type="password"
                                    placeholder="Insira seu celular"
                                />
                            </div>
                            <div className="checkbox-email">
                                <input className='ipt-checkbox' type="checkbox" />
                                <label className='label-checkbox' htmlFor="#">Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</label>
                            </div>
                            
                            <div className="button-criar">
                                <button className='button-submit' type='submit'>Criar Conta</button>
                            </div>
                            </form>

                    </div>

                </div>

            </section>
        </>
    )
}
export default CriarConta
