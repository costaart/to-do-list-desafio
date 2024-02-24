// css modules é preciso importar usando o styles
import styles from './Header.module.css'

import toDoLogo from '../assets/Logo.svg'

export function Header() {
    return(
        // chamar a classe que está no css dessa forma
    <header className={styles.header}>
            <img src={toDoLogo} className={styles.imagem}></img>
    </header>
    )
}