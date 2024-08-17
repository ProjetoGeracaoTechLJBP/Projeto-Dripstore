import Filtragem from '../Components/Filtragem/Filtragem'
import ListProduct from '../Components/ListProduct/ListProduct'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Nav from '../Components/Nav/Nav'

function ProductList() {
    return(
        <>
            
            <Header/>
            <Nav/>
            <Filtragem/>
            <ListProduct/>
            <Footer></Footer>
            
        </>
    )
}
export default ProductList