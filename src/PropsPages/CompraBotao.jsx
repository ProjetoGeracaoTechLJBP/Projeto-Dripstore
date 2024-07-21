import { useState } from 'react'
import React from 'react'
function CompraBotao(props) {

  return (
    <>  
        <a href='#' id='btn-compra'>
          {props.title}
        </a>
        
    </>
  )
}

export default CompraBotao
