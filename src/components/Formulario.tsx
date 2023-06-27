import Button from "./Button"
import styles from '../styles/Formulario.module.css'
import { useState } from "react"
import Resultado from "./Resultado"

interface formularioProps{
    alternarResultadoApresentado: (v:boolean) => void
}

const Formulario = (props: formularioProps) => {

    const [link, setLink] = useState<string>('')
    const [resp, setResp] = useState<any>(false)
    const [inputVazio, setInputVazio] = useState<boolean>(false)
    const [urlIncorreta, setUrlIncoreta] = useState<boolean>(false)


    function quandoClicado() {
        if(link.trim().length != 0){
            setInputVazio(false)
            fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
                .then(res => res.json())
                .then(data => {
                    setResp(false)
                    props.alternarResultadoApresentado(true)
                    const response = data.result.full_short_link
                    setResp(<Resultado urlOriginal={link} urlEncurtada={response}/>)
                    setUrlIncoreta(false)
                })
                .catch(() => {
                    setUrlIncoreta(true)
                    props.alternarResultadoApresentado(false)
                })
        }else {
            setInputVazio(true)
            setResp(false)
            props.alternarResultadoApresentado(false)
        }
    }

    return (
        <div className={styles.containerFormulario}>
            <form onSubmit={e => e.preventDefault()} className={styles.formulario}>
                <div className={styles.divForm}>
                    <input 
                        type="text" 
                        className={`${styles.input} ${(inputVazio || urlIncorreta) && styles.inputErro}`}
                        placeholder="Encurte um link aqui..."  
                        value={link} onChange={e => setLink(e.target.value)}/>

                    <Button quandoClicado={quandoClicado} texto="Encurtar!"  quadrado/>
                </div>
                <div>
                    {inputVazio && <span className={styles.spanErro}>Por favor, adicione um link</span>}
                    {urlIncorreta && <span className={styles.spanErro}>Url incorreta</span>}
                </div>
            </form>

            <div className={styles.resultados}>
                {resp}
            </div>
        </div>
    )
}

export default Formulario