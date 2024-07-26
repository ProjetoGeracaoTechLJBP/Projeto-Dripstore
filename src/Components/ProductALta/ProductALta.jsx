import Right from "../../assets/Right.png"
import './ProductALta.css'
import ComponentAlta from "../ComponentAlta/ComponentAlta"

function ProductALta(){
    return(
        <>
        <section className="produtos">
            <div className="sec01">
                <div className="sectionTitle">
                <h4>Produtos relacionados</h4>
            </div>
            
            <div className="textIcon">
            <button className="butTonProdutos"> Ver todos {<img src={Right} alt="" />} </button>
            
            </div>
            </div>
            <ComponentAlta/>
            

        </section>
        </>
    )
}
export default ProductALta 