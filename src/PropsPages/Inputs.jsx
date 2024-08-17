import { useState } from 'react'
import React from 'react'
function Inputs(props) {

    return (
        <>
            <div className="ipt-container">
                <label className="lbl-global" htmlFor="#">{props.label}</label>
                <div className="ipt-btn">
                    <input className="ipt-global" type="text" placeholder={props.placeholder} />
                    <button id="btn-confirm">{props.btn}</button>
                </div>
            </div>

        </>
    )
}

export default Inputs