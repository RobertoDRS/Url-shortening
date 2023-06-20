import Image from 'next/image'
import logo from '../../../public/images/logoWhite.svg'
import styles from '../../styles/Footer.module.css'
import facebook from '../../../public/images/icon-facebook.svg'
import twitter from '../../../public/images/icon-twitter.svg'
import pinterest from '../../../public/images/icon-pinterest.svg'
import instagram from '../../../public/images/icon-instagram.svg'

export default () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.divPrincipal}>
                <div className={styles.div1}>
                    <Image src={logo} alt="Logo da Shortly" 
                        width={140} height={35}/>
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
                        <Image src={facebook} alt='logo Facebook'/>
                    </a>
                    <a href="#">
                        <Image src={twitter} alt='logo Twitter'/>
                    </a>
                    <a href="#">
                        <Image src={pinterest} alt='logo Pinterest'/>
                    </a>
                    <a href="#">
                        <Image src={instagram} alt='logo Instagram'/>
                    </a>
                </div>

            </div>
        </footer>
    )
}