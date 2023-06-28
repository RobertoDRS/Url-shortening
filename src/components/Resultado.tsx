import styles from '../styles/Resultado.module.css'

import Button from "./Button"

import { useEffect, useState } from "react"

interface resultadoProps {
    urlOriginal: string
    urlEncurtada: string
}

const Resultado = (props: resultadoProps) => {

    const [copiado, setCopiado] = useState(false)

    useEffect(() => setCopiado(false), [props.urlOriginal] )

    function copiar(){
       try {
        const url = props.urlEncurtada
        navigator.clipboard.writeText(url)
        setCopiado(true)
       } catch {
        console.log('Não foi possivel copiar!')
       }
    }

    return (
        <div className={styles.divPrincipal}>
            <span className={styles.urlOriginal}>{props.urlOriginal}</span>
            <div className={styles.divInterna}>
                <span>{props.urlEncurtada}</span>
                <Button texto={copiado ? 'Copiado': 'Copiar'} 
                    quadrado pequeno largo
                    copiado={copiado}
                    copiar={copiar}/>
            </div>
        </div>
    )
}

export default Resultado