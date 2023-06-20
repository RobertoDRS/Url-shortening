import Button from "./Button"
import styles from '../styles/Formulario.module.css'

export default () => {
    return (
        <form action="" className={styles.formulario}>
            <input 
                type="text" 
                className={styles.input}
                placeholder="Encurte um link aqui..."  
            />
            <Button texto="Encurtar!"  quadrado/>
        </form>
    )
}