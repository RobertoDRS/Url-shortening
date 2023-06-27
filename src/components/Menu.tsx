import Image from "next/image"
import Button from "./Button"
import styles from '../styles/Menu.module.css'

import logo from '../../public/images/logo.svg'
import menu from '../../public/images/menu.svg'
import { useState } from "react"


const Menu = () => {

    const [menuAberto, setMenuAberto] = useState(false)

    function alternarMenu(){
        setMenuAberto(!menuAberto)
    }

    return (
            <div className={styles.menu} >
                <div className={styles.divMobile}>
                    <div className={styles.barraMenu}>
                        <Image src={logo} alt="Logo da Shortly" width={120} height={30}/>
                        
                        <button className={styles.botao} onClick={alternarMenu}>
                            <Image src={menu} alt="Menu" width={40} height={40} />
                        </button>
                    </div>

                    { menuAberto ? (
                    <div className={styles.menuAberto}>
                        <div>
                            <a href="#" className={styles.links} >Características</a>
                            <a href="#" className={styles.links} >Preços</a>
                            <a href="#" className={styles.links} >Recursos</a>
                        </div>

                        <div className={styles.borda}>
                            <a href="#" className={styles.links}>Entrar</a>
                            <Button largo texto="Cadastrar-se"/>
                        </div>
                    </div>
                    ): false }
                    
                </div>

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

export default Menu