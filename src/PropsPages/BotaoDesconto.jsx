import { useState } from 'react'
import React from 'react'
function botaoDesconto(props) {

  return (
    <>  
        <div id='bn-discount'>
          <p id='bn-title-discount' >{props.title}</p>
        </div>
    </>
  )
}

export default botaoDesconto
