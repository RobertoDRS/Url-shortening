import styles from '../../styles/Header.module.css'

import Menu from "../Menu"
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