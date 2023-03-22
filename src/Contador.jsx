import { useState } from "react"

export const Contador = ()=>{
    const valor = 400
    const [contador, setearContador] = useState(valor)


    const aumentarValor = () => setearContador(contador+1)
    
    const disminuirValor = () =>setearContador(contador-1)
    
    const resetearValor = () =>setearContador(valor -+ valor)
    
        
    return(
            <>
                <h1>
                    contantando...
                </h1>
                <h3> {contador} </h3>
                <button onClick={aumentarValor}>
                    + 1
                </button>
                <button onClick={disminuirValor}>
                    - 1
                </button>
                <button onClick={resetearValor}>
                    reset
                </button>
            </>
    )
   
}