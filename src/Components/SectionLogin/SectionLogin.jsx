import gmail from "../../assets/gmail.png"
import facebook from "../../assets/Original.png"
import sapatos from "../../assets/sapatosCriarConta.png"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import "./SectionLogin.css"



function SectionLogin() {
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                body: JSON.stringify({ email, password }),
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            // Vê se deu certo 
            if (!response.ok) {
                throw new Error(`Ocorreu erro na requisição: ${response.status}`);
            }

            // Converter a resposta para JSON
            const data = await response.json();
            console.log('API: ', data);

            if (data.token) {
                localStorage.setItem('token', data.token)
                localStorage.setItem('user', JSON.stringify(data.user));                
            } else {
                throw new Error('O token não foi retornado pela API')
            }
            // Vai pra Home
            navigate('/'); 

        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    };
    return (
        <div className="SectionLogin">
            <div className="FormLogin">
                <form onSubmit={handleLogin} >
                    <div className="TitleFormLogin">
                        <h1>Acesse sua conta</h1>
                        <p>Novo cliente? Então registre-se <Link to="/cadastro">Aqui</Link> </p>
                    </div>

                    <div className="InputLogin">
                        <label>Login *</label>
                        <input type="email" placeholder="Insira seu login ou email" name="email" />
                    </div>

                    <div className="InputSenhaLogin">
                        <label>Senha *</label>
                        <input type="password" placeholder="Insira sua senha" name="password" />
                    </div>

                    <div className="EsqueciLogin">
                        <a href="#">Esqueci minha senha</a>
                    </div>

                    <div className="ButtonLogin">
                        <button>Acessar Conta</button>

                    </div>
                    <div className="OutrosLogins">
                        <p>Ou faça login com</p>
                        <img src={gmail} alt="" />
                        <img src={facebook} alt="" />
                    </div>

                </form>
            </div>

            <div className="container_ImgSapatos">
                <img className="ImgSapatos" src={sapatos} alt="" />
            </div>
        </div>
    )
}

export default SectionLogin

