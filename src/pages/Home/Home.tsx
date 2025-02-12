
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import stylesApp from '../../App.module.css';

export function Home(){
    return (
        <div className={stylesApp.contentFlex}>
        
        <h2 className={styles.titulo}>Bem Vindo</h2>

            <div className={stylesApp.cardContainer}>
              <Link className={stylesApp.card} to="/seleciona-mes">
                <svg className={stylesApp.materialIcons} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                <span>Nova Escala</span>
              </Link>
            
              <Link className={stylesApp.card} to="">
                <svg className={stylesApp.materialIcons} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M14.73,13.31C15.52,12.24,16,10.93,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.43,0,2.74-0.48,3.81-1.27L19.59,21L21,19.59L14.73,13.31z M9.5,14C7.01,14,5,11.99,5,9.5S7.01,5,9.5,5S14,7.01,14,9.5 S11.99,14,9.5,14z"/><polygon points="10.29,8.44 9.5,6 8.71,8.44 6.25,8.44 8.26,10.03 7.49,12.5 9.5,10.97 11.51,12.5 10.74,10.03 12.75,8.44"/></g></g></svg>
                <span>Cadastro de coroinha</span>
              </Link>
            
            </div>
            
        </div>
    );
}