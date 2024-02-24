import styles from '../components/Input.module.css'

export function Input() {
    return (
        <input placeholder="Adicione uma nova tarefa" className={styles.input} type="text"/>
    )
}  