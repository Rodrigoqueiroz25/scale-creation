
import styles from './SelecaoMes.module.css';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';


export function SelecaoMes(){

    const [selectValue, setSelectValue] = useState('');
    const list = [
        "Janeiro",
        "Fevereiro",
        "Marco",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];
    
    const navigate = useNavigate();

    function handleClickButton(){
        navigate('/form-missas',{
            state: {
                mes: selectValue
            }
        });
    }

    return (
        <section className="contentFlex">
            <h1>Selecione o mês para criação da escala</h1>
            <form className={styles.form}>
                <div className={styles.select}>
                    <label htmlFor="selecaoMes">Mês: </label>
                    <select 
                        name="selecaoMes" 
                        id="selecaoMes" 
                        value={selectValue} 
                        onChange={(e : ChangeEvent<HTMLSelectElement>) => setSelectValue(e.target.value)}
                    >
                        {list.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.cardContainer}>
                    <button className={styles.card} type="submit" onClick={handleClickButton}>
                    <span>Preencher Vagas</span>
                    <svg className={styles.materialIcons} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                    </button>
                </div>
            </form>
            
        </section>
    
    );
}