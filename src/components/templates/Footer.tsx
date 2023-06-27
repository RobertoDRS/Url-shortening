import Image from 'next/image'
import styles from '../../styles/Footer.module.css'
import logo from '../../logos'

const Footer = () => {

    return (
        <footer className={styles.footer}>

            <div className={styles.divPrincipal}>
                <div className={styles.div1}>
                    <Image className={styles.logo}
                        src={logo.shortly} 
                        alt="Logo da Shortly" 
                        width={140} height={35}
                    />
                </div>

                <div className={styles.div2}>
                    <div>
                        <span>Características</span>
                        <a href="#">Encurtamento de links</a>
                        <a href="#">Links de marca</a>
                        <a href="#">Análises</a>
                    </div>

                    <div>
                        <span>Recursos</span>
                        <a href="#">Blogue</a>
                        <a href="#">Programadores</a>
                        <a href="#">Suporte</a>
                    </div>

                    <div>
                        <span>Empresa</span>
                        <a href="#">Sobre</a>
                        <a href="#">Nossa equipe</a>
                        <a href="#">Carreiras</a>
                        <a href="#">Contato</a>
                    </div>
                </div>

                <div className={styles.div3}>
                    <a href="#" >
                        <Image className={styles.redesSociais} src={logo.facebook} alt='logo Facebook'/>
                    </a>

                    <a href="#">
                        <Image className={styles.redesSociais} src={logo.twitter} alt='logo Twitter'/>
                    </a>

                    <a href="#">
                        <Image className={styles.redesSociais} src={logo.pinterest} alt='logo Pinterest'/>
                    </a>

                    <a href="#">
                        <Image className={styles.redesSociais} src={logo.instagram} alt='logo Instagram'/>
                    </a>
                </div>

            </div>
        </footer>
    )
}

export default Footer