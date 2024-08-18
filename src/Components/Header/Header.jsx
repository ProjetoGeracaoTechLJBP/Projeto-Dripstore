import LogoDigital from "../../assets/Logo-Digital.png"
import { useState, useEffect } from "react"
import IconCartShop from '../../assets/Icon-cartShop.png'
import usericon from '../../assets/usericon.svg'
import logout from '../../assets/logout.svg'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
    
    // Recupera o usuário do localStorage
    const [user, setUser] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

       //Sair da conta
       const handleLogOut = (e) => {
        // e.preventDefault()
        localStorage.removeItem('user');
        setUser(null);
        navigate('/')
    }

    //Mostrar o nome se tiver logado
    let conteudo
    if (user) {
        conteudo = (
            <>
                <Link className="acc-infos" to="/meuspedidos"><img src={usericon} alt="" />Olá {user.firstname}</Link>
                <button onClick={handleLogOut}>
                    <img src={logout} alt="" />
                </button>

            </>
        )
    } else {
        conteudo = (
            <>
                <Link to="/criarLogin"><div id='Register'><a href="#">Cadastre-se</a></div></Link>
                <Link to="/login"><button id='Btn-Enter'><a href="#">Entrar</a></button></Link>
            </>
        )
    }

    return (
        <>
            <header id="Header">
                <div id="Logo-Img-Digital">
                    <Link to="/"><img src={LogoDigital} alt="Logo-Digital-college" id="Img-Digital" /></Link>
                </div>
                <div id='Input-search'>
                    <input type="text" placeholder='Pesquisar produto...' />
                </div>
                <div id='Access-Part'>
                    <div id='Icon-CartShop'><img src={IconCartShop} alt="icon-de-compra" /></div>
                    {conteudo}
                </div>
            </header>
        </>
    )
}
export default Header