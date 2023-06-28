import styles from '../styles/CardMain.module.css'

import Image from "next/image"

interface cardMainProps {
    titulo: string
    texto: string
    img: any
    cardNumero: number
}

const CardMain = (props: cardMainProps) => {
    return (
        <div 
            className={`
            ${styles.cardMain} 
            ${props.cardNumero === 2 ? styles.card2: props.cardNumero === 3 ? styles.card3: ''}`}>

            <Image 
                className={styles.image} src={props.img} width={70} height={70}
                alt="Imagem sobre estatística"/>
            <h3>{props.titulo}</h3>
            <p>{props.texto}</p>
        </div>
    )
}

export default CardMain