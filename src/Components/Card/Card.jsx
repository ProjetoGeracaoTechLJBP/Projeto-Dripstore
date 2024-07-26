import Tenis from "../../assets/Tenis.png"
import './Card.css'
function Card(props) {
    return(
        <div className="cardContainer">
            <div className="back_image">
                <img src={Tenis} alt="" />
                <div className="desconto-absolute">
                    {/* <p>30% OFF</p> */}
                    <p>{props.descontoespecial}</p>
                </div>
                
            </div>
            
            <h5>{props.nome}</h5>
            <p className="descricao">{props.descricao}</p>
            <div className="descValor">
                <p className="desconto">{props.desconto}</p>
                <p className="valor">{props.valor}</p>
            </div>
                
        </div>
    )
}
export default Card