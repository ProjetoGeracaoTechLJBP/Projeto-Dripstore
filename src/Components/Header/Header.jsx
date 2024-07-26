import LogoDigital from "../../assets/Logo-Digital.png"
import IconCartShop from '../../assets/Icon-cartShop.png'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {

    return(
        <>
            <header id="Header">
                <div id="Logo-Img-Digital">
                    <Link to="/"><img src={LogoDigital} alt="Logo-Digital-college" id="Img-Digital" /></Link>
                </div>
                <div id='Input-search'>
                    <input type="text" placeholder='Pesquisar produto...'/>
                </div>
                <div id='Access-Part'>
                    <Link to="/criarLogin"><div id='Register'><a href="#">Cadastre-se</a></div></Link>
                    <Link to="/login"><button id='Btn-Enter'><a href="#">Entrar</a></button></Link>
                    <div id='Icon-CartShop'><img src={IconCartShop}  alt="icon-de-compra" /></div>
                </div>
            </header>
        </>           
    )
}
export default Header