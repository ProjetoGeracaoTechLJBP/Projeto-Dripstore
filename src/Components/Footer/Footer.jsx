import { Link } from "react-router-dom";
import "./Footer.css"
import logo from "../../assets/logo.png"
import twetter from "../../assets/twetter.png"
import instagram from "../../assets/instagram.png"
import facebook from "../../assets/facebook.png"
function Footer() {

    return (
        <>
            <footer>

                <div className="containerFooter">
                    <div className="desc-logoFooter">
                    <Link to="/"><img className="logo" src={logo} alt="" /></Link>
                        <p className="descricao">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore. </p>
                        <div className="RedesSocias">
                            <img src={facebook} alt="" />
                            <img src={instagram} alt="" />
                            <img src={twetter} alt="" />
                        </div>
                    </div>

                    <div className="margin">
                        <h2>Informação</h2>
                        <p>Sobre Drip Store</p>
                        <p>Segurança</p>
                        <p>Wishlist</p>
                        <p>Blog</p>
                        <p>Trabalhe conosco</p>
                        <p>Meus pedidos</p>
                    </div>

                    <div className="margin">

                        <h2>Categorias</h2>
                        
                        <div className="link-footer">
                        <Link to="/produto">Camisetas</Link>
                        <Link to="/produto">Calças</Link>
                        <Link to="/produto">Bonés</Link>
                        <Link to="/produto">Headphones</Link>
                        <Link to="/produto">Tênis</Link>
                        </div>
                    </div>

                    <div className="margin">
                        <h2>Contatos</h2>
                        <p className="endereco">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                        <p>(85) 3051-3411</p>
                    </div>
                </div>
                <hr className="hrfooter" />
                <div className="copy">
                    <p>@ 2022 Digital College</p>
                </div>

            </footer>
        </>
    )
}
export default Footer