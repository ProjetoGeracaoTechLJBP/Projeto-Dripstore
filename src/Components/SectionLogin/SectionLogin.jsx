import gmail from "../../assets/gmail.png"
import facebook from "../../assets/Original.png"
import sapatos from "../../assets/sapatosCriarConta.png"
import "./SectionLogin.css"
function SectionLogin() {
    return(
        <div className="SectionLogin">

            <div className="FormLogin"> 
                <form >
                    <div className="TitleFormLogin">
                        <h1>Acesse sua conta</h1>
                        <p>Novo cliente? Então registre-se <a href="#">aqui</a></p>
                    </div>

                    <div className="InputLogin">
                        <label>Login *</label>
                        <input type="email" placeholder="Insira seu login ou email"/>
                    </div>

                    <div className="InputSenhaLogin">
                        <label>Senha *</label>
                        <input type="password"  placeholder="Insira sua senha"/>
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
            
            <div className="ImgSapatos">
                <img src={sapatos} alt="" />
            </div>
        </div>
    ) 
}
export default SectionLogin