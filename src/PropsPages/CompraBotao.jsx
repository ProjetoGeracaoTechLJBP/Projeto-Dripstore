import { useState } from 'react'
import React from 'react'
function CompraBotao(props) {

  return (
    <>  
        <div id='btn-compra'>
          <p id='btn-title-compra'>{props.title}</p>
        </div>
    </>
  )
}

export default CompraBotao
