import React from "react"
import LogoDigital from "../../assets/Logo-Digital.png"
import IconCartShop from '../../assets/Icon-cartShop.png'
import infoUser from "../../LocalStorageDatas/users"
import usericon from "../../assets/usericon.svg"
import './Header.css'
import { Link } from 'react-router-dom'


function HeaderUser() {
    const user = infoUser()
    console.log(user);

    if (!user) {
        return <div>Loading...</div>;
    }
    
    return(
        <>
            <header id="Header">
                <div id="Logo-Img-Digital">
                    <Link to="/homeuser"><img src={LogoDigital} alt="Logo-Digital-college" id="Img-Digital" /></Link>
                </div>
                <div id='Input-search'>
                    <input type="text" placeholder='Pesquisar produto...'/>
                </div>
                <div id='Access-Part'>
                    <div id='Icon-CartShop'><img src={IconCartShop}  alt="icon-de-compra" /></div>
                    <Link className="acc-infos" to="/meuspedidos"><img src={usericon} alt="" />Olá {user.firstname}</Link>
                </div>
            </header>
        </>           
    )
}
export default HeaderUser