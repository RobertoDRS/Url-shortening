import styles from '../styles/Button.module.css'

interface buttonProps {
    texto: string
    fundoAzul?: boolean
    quadrado?: boolean
    pequeno?: boolean
    copiado?: boolean
    quandoClicado?: () => any
    copiar?: () => any
}

const Button = (props: buttonProps) => { 

    const onclick = props.quandoClicado ? props.quandoClicado : props.copiar ? props.copiar: () => {}

    return (
        <button 
            className={`${styles.button} ${props.quadrado ? styles.quadrado: ''}
                ${props.pequeno ? styles.pequeno: ''} ${props.copiado ? styles.copiado: ''} `}
            onClick={onclick}>
                {props.texto}
        </button>
    )
}

export default Button