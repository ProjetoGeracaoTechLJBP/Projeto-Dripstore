import Carrinho from "./Carrinho";
import React, { useState, useEffect } from 'react';


export function Contador(initialValue = 1) {
    const [count, setCount] = useState(initialValue)

    function inc(){
        setCount(count + initialValue)
    }

    function dec(){
        setCount(count - initialValue)
    }

    return[count, inc, dec]

}