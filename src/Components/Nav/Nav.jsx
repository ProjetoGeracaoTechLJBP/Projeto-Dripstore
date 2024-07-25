import { Link } from "react-router-dom";
import './nav.css'

function Nav() {
    return (
        <>
            <section id="navigation">
                <li><Link to="/" id="link">Home</Link></li>
                <li><Link to="/" id="link">Produto</Link></li>
                <li><Link to="/" id="link">Categorias</Link></li>
                <li><Link to="/" id="link">Meus Pedidos</Link></li>
            </section>
        </>
    )
}

export default Nav