import { useState } from 'react'
import React from 'react'
import BotaoDesconto from './BotaoDesconto';
import CompraBotao from './CompraBotao';

const Card = ({ imageUrl, title }) => {
    const cardStyle = {
      backgroundImage: `url(${imageUrl})`,
    };

  return (
    <>  
        <div className="card" style={cardStyle}>
            <div className="texts-card" >
              <BotaoDesconto
                title="30% OFF"
              />
              <p className="title-card">{title}</p>
              <CompraBotao
              title="Comprar"
              />
            </div>
          </div>
        
    </>
  
  )
}


export default Card
