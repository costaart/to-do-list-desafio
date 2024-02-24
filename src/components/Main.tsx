import { HTMLAttributes } from 'react'

import styles from './Main.module.css'

interface MainProps extends HTMLAttributes<HTMLDivElement> {
    
} 

export function Main({children, ...props}: MainProps) {
    return(
        <main className={styles.main}>{children}</main>
    )
}