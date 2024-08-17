import './oferta.css'
import TenisOferta from '../../assets/TenisOferta.png'

function Oferta() {
    return (
        <>
            <section id="Middle-Oferta" >
                <div id='Part-Img'>
                    <img src={TenisOferta} alt="Gradient-background" />
                </div>
                    
                <div id='Sect-Oferta'>
                    <div id='Container-Ofert'>
                        <div id='Text-Pink'><p>Oferta especial</p></div>

                        <div id='Tittle'>
                            <h1>Air Jordan edição de colecionador</h1>
                        </div>
                        <div id='Paragraph'>
                            <p>Descubra a oferta irresistível dos tênis Nike, combinando estilo e desempenho em cada passo. Desde os clássicos até os modelos mais inovadores, cada par reflete qualidade e conforto incomparáveis. Encontre o seu estilo e eleve seu jogo com a confiança que só a Nike pode oferecer. Não perca essa oportunidade de calçar a excelência da marca líder em esportes e lifestyle.</p>
                        </div>
                        <button id='Btn-Ofert'><a href="#">Ver Oferta</a></button>
                    </div>
                </div>
            </section>
        </>
    )
}
 export default Oferta