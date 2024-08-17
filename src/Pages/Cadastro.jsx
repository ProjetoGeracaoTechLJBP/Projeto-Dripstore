import Footer from "../Components/Footer/Footer"
import HeaderLoginCadastro from "../Components/HeaderLoginCadastro/HeaderLoginCadastro"
import CriarConta from "../Components/CriarConta/CriarConta"


function paginaCriarConta() {
    return (
        <>  <HeaderLoginCadastro/>
            <CriarConta/>
            <Footer></Footer>
        </>

    )
}

export default paginaCriarConta