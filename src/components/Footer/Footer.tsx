
import styles from './Footer.module.css';

export function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <p>Gerador de escala 2023</p>
            </div>
        </footer>
    );
}