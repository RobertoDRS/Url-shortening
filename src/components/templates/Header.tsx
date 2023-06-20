import Menu from "../Menu"
import styles from '../../styles/Header.module.css'
import Banner from "../Banner"

export default () => {
    return (
        <header className={styles.header}>
            <Menu/>
            <Banner/>
        </header>
    )
}