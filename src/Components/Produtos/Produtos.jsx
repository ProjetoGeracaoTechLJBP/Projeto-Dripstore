import Right from "../../assets/Right.png"
import './produtos.css'
import StyleCard from "../StyleCard/StyleCard"

function Produtos(){
    return(
        <>
        <section className="produtos">
            <div className="sec01">
                <div className="sectionTitle">
                <h4>Produtos em alta</h4>
            </div>
            
            <div className="textIcon">
            <button> Ver todos {<img src={Right} alt="" />} </button>
            
            </div>
            </div>
            <StyleCard/>
            

        </section>
        </>
    )
}
export default Produtos 