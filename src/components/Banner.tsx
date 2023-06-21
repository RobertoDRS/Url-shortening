import Button from "./Button"
import styles from '../styles/Banner.module.css'

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.div1}>
                <h1>
                    Mais do que apenas links mais curtos
                </h1>
                <p>
                    Aumente o reconhecimento da sua marca e obtenha informações detalhadas sobre o desempenho dos seus
                    links.
                </p>
                <Button texto="Começar"/>
            </div>

            <div className={styles.div2}>
               
            </div>
        </div>
    )
}

export default Banner