import LogoDigital from "../../assets/Logo-Digital.png"
import IconCartShop from '../../assets/Icon-cartShop.png'
import './Header.css'

function Header() {

    return(
        <>
            <header>
                <div id="Logo-Img-Digital">
                    <img src={LogoDigital} alt="Logo-Digital-college" />
                </div>
                <div id='Input-search'>
                    <input type="text" placeholder='Pesquisar produto...'/>
                </div>
                <div id='Access-Part'>
                    <div id='Register'><a href="#">Cadastre-se</a></div>
                    <button id='Btn-Enter'><a href="#">Entrar</a></button>
                    <div id='Icon-CartShop'><img src={IconCartShop}  alt="icon-de-compra" /></div>
                </div>
            </header>
        </>           
    )
}
export default Header