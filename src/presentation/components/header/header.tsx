
import styles from './header.module.css';

export function Header(){
    return (
        <header className={styles.toolbar}>
            <p className={styles.title}>Gerador de Escala</p>
        </header>
    );
}