import Card from "../Card/Card"
import "./StyleCard.css"

function StyleCard() {
    let produtos1 = [
        {
          descontoespecial: "30% OFF",
          nome:"Tênis",
          descricao:"K-Swiss V8 - Masculino",
          valor:'$300',
          desconto:'$200'
        },
        {
          descontoespecial: "30% OFF",
          nome:"Tênis",
          descricao:"K-Swiss V8 - Masculino",
          valor:'$400',
          desconto:'$200'
        },
        {
          
          nome:"Tênis",
          descricao:"K-Swiss V8 - Masculino",
          valor:'$300',
          desconto:'$200'
        },
        {
          
          nome:"Tênis",
          descricao:"K-Swiss V8 - Masculino",
          valor:'$600',
          desconto:'$200'
        }
        // {
        //     nome:"Tenis",
        //     descricao:"Tenis legal",
        //     valor:300
        //   },
        //   {
        //     nome:"Tenis",
        //     descricao:"Tenis legal",
        //     valor:300,
        //     discount:true
        //   },
        //   {
        //     nome:"Tenis",
        //     descricao:"Tenis legal",
        //     valor:300
        //   },
        //   {
        //     nome:"Tenis",
        //     descricao:"Tenis legal",
        //     valor:300
        //   },
    
    ]


    return(
    <>
    <div className='Card-Style'>
      {
          produtos1.map((produto,index) => (
            <Card 
              key={index}
              descontoespecial={produto.descontoespecial}
              nome={produto.nome}
              descricao={produto.descricao}
              valor={produto.valor}
              desconto={produto.desconto }
            />
          ))
          
        }
    </div> 

    <div className='Card-Style'>
      {
          produtos1.map((produto,index) => (
            <Card 
              key={index}
              nome={produto.nome}
              descricao={produto.descricao}
              valor={produto.valor}
              desconto={produto.desconto}
            />
          ))
          
        }
    </div>   
    </>
    
    
    
    )
}
export default StyleCard