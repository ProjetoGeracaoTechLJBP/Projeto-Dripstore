import './CriarConta.css';
import { useNavigate } from 'react-router-dom';
import InputCadastro from '../../PropsPages/InputCadastro'
import { Link } from 'react-router-dom';


function CriarConta() {
    const navigate = useNavigate();
        const handleSubmit = (event) => {
            event.preventDefault()
            
            const formData = new FormData(event.target);
            const data = Object.fromEntries(formData.entries())
            fetch('http://localhost:3000/api/registeruser', {
                body: JSON.stringify(data),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: localStorage.getItem('token')
                }

            })    
            .then(response => response.json())    
            .then((data) => {
                console.log(data);
                navigate('/homeuser');         
            })
            .catch(error =>{
                console.error(error)
            })                
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
                            <div className="form-group">
                                <InputCadastro
                                    label="CPF*"
                                    type="text"
                                    placeholder="Insira seu cpf"
                                    name="cpf"
                                />
                            </div>
                            <div className="form-group">
                                <InputCadastro
                                    label="Celular*"
                                    type="text"
                                    placeholder="Insira seu celular"
                                    name="celular"
                                />
                            </div>
                            <div className="checkbox-email">
                                <input className='ipt-checkbox' type="checkbox" />
                                <label className='label-checkbox' htmlFor="#">Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente.</label>
                            </div>

                            <div className="button-criar">
                                <button className='button-submit'>Criar conta</button>
                            </div>
                        </form>
                      
                    </div>

                </div>

            </section>
        </>
    )
}


export default CriarConta

