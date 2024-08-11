import "./carrossel.css"
import Slider1 from "./Slider/Slider1.jsx"
import Slider2 from "./Slider/Slider2.jsx"
import Slider3 from "./Slider/Slider3.jsx"
import Slider4 from "./Slider/Slider4.jsx"



function Carrossel() {

    return (
        <>
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" id="botao-slide1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" id="botao-slide2" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" id="botao-slide3" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" id="botao-slide4" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Slider1></Slider1>
                    </div>
                    <div className="carousel-item">
                        <Slider2></Slider2>
                    </div>
                    <div className="carousel-item">
                        <Slider3></Slider3>
                    </div>
                    <div className="carousel-item">
                        <Slider4></Slider4>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Carrossel