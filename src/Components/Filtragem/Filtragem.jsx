import seta from "../../assets/seta.png"
import "./Filtragem.css"

function Filtragem () {
    return(
        <div className="filsec01">
            <p> <strong>Resultados para “Tênis”</strong>- 389 produtos</p>
            <div className="ordenar">
                <p><strong>Ordernar por:</strong> mais relevantes</p>
                <img src={seta} alt="" />
            </div>
        </div>
    )
}
export default Filtragem