import './CriarConta.css';
import InputCadastro from '../../PropsPages/InputCadastro'
import { Link } from 'react-router-dom';


function CriarConta() {
        const handleSubmit = (event) => {
            event.preventDefault()
            
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData.entries())
            fetch('http://localhost:3000/api/users', {
                body: JSON.stringify(data),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: localStorage.getItem('token')
                }

            })    
            .then(response => response.json())                      
        }
    return (
        <>
            <section className="container_title-and-forms">
                <h1 className="cadastroTitle">Criar Conta</h1>
                <div className="container-form">

                    <div className="form-container" >

                        <p className="text-form">Informações pessoais</p>
                        <hr className="line-form" />

                        <form className='formulario' onSubmit={handleSubmit}>

                            <div className="form-group">
                                <InputCadastro
                                    title="Informações pessoais"
                                    label="Nome*"
                                    placeholder="Insira seu nome"
                                    name="firstname"
                                />
                            </div>

                            <div className="form-group">
                                <InputCadastro
                                    label="Sobrenome*"
                                    type="text"
                                    placeholder="Insira seu sobrenome"
                                    name="surname"
                                />
                            </div>

                            <div className="form-group">
                                <InputCadastro
                                    label="Email*"
                                    type="text"
                                    placeholder="Insira seu email"
                                    name="email"
                                />
                            </div>
                            <div className="form-group">
                                <InputCadastro
                                    label="Senha*"
                                    type="password"
                                    placeholder="Insira sua senha"
                                    name="password"
                                />
                            </div>
                            <div className="checkbox-email">
                                <input className='ipt-checkbox' type="checkbox" />
                                <label className='label-checkbox' htmlFor="#">Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</label>
                            </div>

                            <div className="button-criar">
                                <button className='button-submit'>Criar Conta</button>

                            </div>
                        </form>

                    </div>

                </div>

            </section>
        </>
    )
}


export default CriarConta

