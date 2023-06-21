import Button from "./Button"
import styles from '../styles/Resultado.module.css'
import { useState } from "react"

interface resultadoProps {
    urlOriginal: string
    urlEncurtada: string
}

const Resultado = (props: resultadoProps) => {

    const [copiado, setCopiado] = useState(false)

    function copiar(){
       try{
        const url = props.urlEncurtada
        navigator.clipboard.writeText(url)
        setCopiado(!copiado)
       } catch {
        console.log('Não foi possivel copiar!')
       }
    }

    return (
        <div className={styles.divPrincipal}>
            <span className={styles.urlOriginal}>{props.urlOriginal}</span>
            <div className={styles.divInterna}>
                <span>{props.urlEncurtada}</span>
                <Button 
                    texto={copiado ? 'Copiado': 'Copiar'} 
                    quadrado pequeno 
                    copiado={copiado}
                    copiar={copiar}/>
            </div>
        </div>
    )
}

export default Resultado