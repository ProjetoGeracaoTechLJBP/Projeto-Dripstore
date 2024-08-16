import React from 'react'
function InputCadastro(props) {

    return (
        <>

            <label className='text-form label' htmlFor="nome-completo">{props.label}</label >
            <input className='form-input' type={props.type} name={props.name} placeholder={props.placeholder} required />
        </>
    )
}

export default InputCadastro