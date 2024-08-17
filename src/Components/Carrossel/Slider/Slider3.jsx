import "./Slider3.css"
import Tenis from "../../../assets/Images/Carrossel/Tenis.svg"
import Ornamento from "../../../assets/Images/Carrossel/Ornamento.svg"
import Fire from "../../../assets/Images/Carrossel/fire.png"

function Slider3() {

    return (
        <>
            <section >
                <div className="banner">
                    <div className="banner-text">
                        <div className="text">
                            <strong>Melhores ofertas personalizadas</strong>
                            <h1>Queima de <br /> Estoque Nike <img src={Fire} alt="" /> </h1>
                            <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                        </div>
                        <div className="botao">
                            <button>Ver ofertas</button>
                        </div>
                    </div>
                    <div className="banner-images">
                        <div className="tenis">
                            <img src={Tenis} alt="tenis"/>
                        </div>
                        <div className="ornamento">
                            <img src={Ornamento} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
''
export default Slider3