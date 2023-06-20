import CardMain from "../CardMain"
import Formulario from "../Formulario"
import styles from '../../styles/Main.module.css'

import reconhecimento from '../../../public/images/icon-brand-recognition.svg'
import registros from '../../../public/images/icon-detailed-records.svg'
import customizavel from '../../../public/images/icon-fully-customizable.svg'
import Button from "../Button"

export default () => {
    return (
        <main className={styles.main}>
            <Formulario/>

            <div className={styles.div1}>
                <h2>
                    Estatísticas avançadas
                </h2>
                <p>
                    Acompanhe o desempenho dos seus links na Web com o nosso
                    painel de estatísticas avançadas.
                </p>
            </div>

            <div className={styles.div2}>
                <CardMain 
                    titulo="Reconhecimento da marca"
                    texto={`
                        Aumente o reconhecimento da sua marca com cada clique. As hiperligações genéricas não significam
                        nada. Os links de marca ajudam a incluir confiança no seu conteúdo.
                    `}
                    img={reconhecimento}
                    cardNumero={1}
                />

                <CardMain
                    titulo="Registos detalhados"
                    texto={`
                        Obtenha informações sobre quem está clicando nos seus links. Saber quando e onde as pessoas
                        se envolvem com o seu conteúdo ajuda a tomar melhores decisões.
                    `}
                    img={registros}
                    cardNumero={2}
                />

                <CardMain
                    titulo="Totalmente personalizável"
                    texto={`
                        Melhore o conhecimento da marca e a capacidade de descoberta do conteúdo através de links personalizáveis.
                        Aumente o envolvimento do público.
                    `}
                    img={customizavel}
                    cardNumero={3}
                />

            </div>

            <div className={styles.div3}>
                <h2>Melhore os seus links hoje</h2>
                <Button texto="Começar"/>
            </div>
        </main>
    )
}