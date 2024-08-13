import Header from '../Components/Header/Header'
import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Footer/Footer'
import SectionPedidos from "../Components/SectionMeusPedidos/SectionPedidos"
function meusPedidos(params) {
    return(    <>
        <Header />
        <Nav/>
        <SectionPedidos />
        <Footer />
    </>
    )

}

export default meusPedidos;