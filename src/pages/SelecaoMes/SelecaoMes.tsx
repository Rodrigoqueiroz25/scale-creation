
import styles from './SelecaoMes.module.css';
import '../../App.css';


export function SelecaoMes(){
    return (
        <section className="contentFlex">
            <h1>Selecione o mês para criação da escala</h1>
            <form className={styles.form}>
                <div className={styles.select}>
                    <label htmlFor="selecaoMes">Mês: </label>
                    <select name="selecaoMes" id="selecaoMes">
                        <option value="">Janeiro</option>
                        <option value="Fevereiro">Fevereiro</option>
                        <option value="Marco">Março</option>
                        <option value="Abril">Abril</option>
                        <option value="Maio">Maio</option>
                        <option value="Junho">Junho</option>
                        <option value="Julho">Julho</option>
                        <option value="Agosto">Agosto</option>
                        <option value="Setembro">Setembro</option>
                        <option value="Outubro">Outubro</option>
                        <option value="Novembro">Novembro</option>
                        <option value="Dezembro">Dezembro</option>
                    </select>
                </div>
                <div className={styles.cardContainer}>
                    <button className={styles.card} type="submit">
                    <span>Preencher Vagas</span>
                    <svg className={styles.materialIcons} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                    </button>
                </div>
            </form>
            
        </section>
    
    );
}