import Carrinho from "./Carrinho";
import React, { useState, useEffect } from 'react';


export function Contador(initialValue = 1) {
    const [count, setCount] = useState(initialValue)
    const [multi, setMult] = useState(219)

    function inc(){
        setCount(count + initialValue)
    }

    function dec(){
        setCount(count - initialValue)
    }

    useEffect(() => {
        setMult(() => 
            count*219
        )
    }, [count])


    return[count, inc, dec, multi]
}

