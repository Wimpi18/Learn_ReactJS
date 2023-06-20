import React, { useState } from 'react'
import '../../styles/ejemplo.scss'

function Ejemplo2(props) {
    const valorInicial = 0;
    const [contador2, setContador] = useState(valorInicial);
    // const [contador2, setContador] = useState(valorInicial);


    function incrementarContador() {
        // setContador(contador1 + 1);
        setContador(contador2 + 2);
    }

    return (
        <div>
            <h1>{contador2}</h1>
            {props.funcion.name === 'holaMundo' ?
                <button onClick={props.funcion}>{props.children}</button> :
                <button onClick={props.funcion}>Muestra mi edad</button>
            }
        </div>
    )
}

export default Ejemplo2
