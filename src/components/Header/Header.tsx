
import styles from './Header.module.css';

export function Header(){
    return (
        <header className={styles.toolbar}>
            <p className={styles.titulo}>Gerador de Escala</p>
        </header>
    );
}