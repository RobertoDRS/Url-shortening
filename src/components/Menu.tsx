import Image from "next/image"
import Button from "./Button"
import styles from '../styles/Menu.module.css'

import logo from '../../public/images/logo.svg'

export default () => {
    return (
            <div className={styles.menu} >
                <div className={styles.div}>
                    <Image src={logo} alt="Logo da Shortly" width={140} height={30}/>
                    <a href="#" className={styles.links}>Características</a>
                    <a href="#" className={styles.links}>Preços</a>
                    <a href="#" className={styles.links}>Recursos</a>
                </div>

                <div className={styles.div}>
                    <a href="#" className={`${styles.links} ${styles.marginLink}`}>Entrar</a>
                    <Button texto="Cadastrar-se"/>
                </div>
            </div>
    )
}