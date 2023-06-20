import styles from '../styles/Button.module.css'

interface buttonProps {
    texto: string
    fundoAzul?: boolean
    quadrado?: boolean
    
}

export default (props: buttonProps) => {
    return (
        <button className={`${styles.button} ${props.quadrado ? styles.quadrado: ''}`}>
                {props.texto}
        </button>
    )
}