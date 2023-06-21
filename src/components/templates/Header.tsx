import Menu from "../Menu"
import styles from '../../styles/Header.module.css'
import Banner from "../Banner"

const Header = () => {
    return (
        <header className={styles.header}>
            <Menu/>
            <Banner/>
        </header>
    )
}

export default Header