import gmail from "../../assets/gmail.png"
import facebook from "../../assets/Original.png"
import sapatos from "../../assets/sapatosCriarConta.png"
import "./SectionCriar.css"
function SectionCriar() {
    return(
        <div className="SectionCriar">

        <div className="FormCriar"> 
            <form >
                <div className="TitleFormCriar">
                    <h1>Crie sua conta</h1>
                    <p>Já possui uma conta? Entre <a href="#">aqui</a></p>
                </div>

                <div className="InputCriar">
                    <label>Email *</label>
                    <input type="email" placeholder="Insira seu login ou email"/>
                </div>

                <div className="ButtonLogin">
                    <button>Criar Conta</button>

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
export default SectionCriar