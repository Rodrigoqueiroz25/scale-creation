
import styles from './SelecaoMes.module.css';
import stylesApp from '../../App.module.css';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import {NameMonths} from "../../enum/NameMonths.enum";

export function SelecaoMes(){

    const [monthSelected, setMonthSelected] = useState<string>(NameMonths.JANEIRO);
 
    const navigate = useNavigate();

    function handleClickButton(){
        navigate('/form-missas',{
            state: {
                mes: monthSelected
            }
        });
    }

    return (
        <section className={stylesApp.contentFlex}>
            <h1>Selecione o mês para criação da escala</h1>
            <form className={styles.form}>
                <div className={styles.select}>
                    <label htmlFor="selecaoMes">Mês: </label>
                    <select 
                        name="selecaoMes" 
                        id="selecaoMes" 
                        value={monthSelected} 
                        onChange={(e : ChangeEvent<HTMLSelectElement>) => setMonthSelected(e.target.value)}
                    >
                        {Object.values(NameMonths).map((month, index) => (
                            <option key={index} value={month}>{month}</option>
                        ))}
                    </select>
                </div>
                <div className={stylesApp.cardContainer}>
                    <button className={stylesApp.card} type="submit" onClick={handleClickButton}>
                    <span>Preencher Vagas</span>
                    <svg className={stylesApp.materialIcons} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                    </button>
                </div>
            </form>
        </section>
    );
}