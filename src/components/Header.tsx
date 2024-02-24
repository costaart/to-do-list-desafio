// css modules é preciso importar usando o styles
import styles from './Header.module.css'

export function Header() {
    return(
        // chamar a classe que está no css dessa forma
    <header className={styles.header}>
        <p>Olá mundo!</p>
    </header>
    )
}