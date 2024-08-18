import LogoDigital from "../../assets/Logo-Digital.png"
import { useState, useEffect } from "react"
import IconCartShop from '../../assets/Icon-cartShop.png'
import usericon from '../../assets/usericon.svg'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {

    const [user, setUser] = useState()

    useEffect(() => {
        // Recupera o usuário do localStorage
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    let conteudo 
    if (user){
        conteudo =   <Link className="acc-infos" to="/meuspedidos"><img src={usericon} alt="" />Olá {user.firstname}</Link>
    } else{
        conteudo = (
            <>
                <Link to="/criarLogin"><div id='Register'><a href="#">Cadastre-se</a></div></Link>
                <Link to="/login"><button id='Btn-Enter'><a href="#">Entrar</a></button></Link>
            </>
        )
    }

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
                    {conteudo}
                    <div id='Icon-CartShop'><img src={IconCartShop}  alt="icon-de-compra" /></div>
                </div>
            </header>
        </>           
    )
}
export default Header