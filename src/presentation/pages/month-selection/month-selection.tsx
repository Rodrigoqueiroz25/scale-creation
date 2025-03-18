
import styles from './styles.module.css';
import stylesApp from '../../../main/App.module.css';
import { useNavigate } from 'react-router-dom';
import React, { ChangeEvent, useState } from 'react';
import {NameMonths} from "../../../shared/enums/NameMonths.enum";
import Button from "../../components/button/button";
import {arrowRight} from "../../../shared/constants/svg-path";
import MonthFactory from "../../../modules/calendar/month.factory";
import {useServices} from "../../context/use-case.provider";


export function MonthSelection(){

    const { createWeeklyMassSchedule  } = useServices();
    const [monthSelected, setMonthSelected] = useState<string>(NameMonths.JANEIRO);
    const navigate = useNavigate();


    async function handleClickButton(e: React.MouseEvent<HTMLButtonElement>){
        try {
            e.preventDefault();
            const month = MonthFactory.create(monthSelected, new Date().getFullYear());
            for (let index = 1; index <= month.totalWeeks; index++) {
                await createWeeklyMassSchedule.exec(month.getWeek(index));
            }

            navigate('/criar-escala',{
                state: {
                    nameMonth: month.getName(),
                    totalWeeks: month.totalWeeks
                }
            });
        } catch (err) {
            console.error("Erro ao criar escala semanal:", err);
        }
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
                    <Button title={"Preencher Vagas"} handleClick={handleClickButton} path={arrowRight}/>
                </div>
            </form>
        </section>
    );
}