import { useState } from 'react'
import React from 'react'
function CompraBotao(props) {

  return (
    <>  
        <a href='#' id='btn-compra'>
          <p id='btn-title-compra'>{props.title}</p>
        </a>
        
    </>
  )
}

export default CompraBotao
