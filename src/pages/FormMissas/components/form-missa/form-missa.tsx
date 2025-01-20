
import { useEffect, useState } from 'react';
import styles from './style.module.css';
import { daysWeek } from '../../../../constants/calendar';
import { Vacancy } from '../vacancy/vacancy';

type Props = {
    dayWeek: string;
    dayWeekId: number;
    date: string;
    time: string;
    weekId: number;
    numVacancies: number;
    nameCelebration: string;
    local: string;
    dayMonth: number
}

export function FormMissa({
    date, dayWeekId, dayWeek, time, nameCelebration, numVacancies, local, dayMonth, weekId
}: Props) {

    const [celebration, setCelebration] = useState(nameCelebration);
    const [vacancies, setVacancies] = useState<number>(numVacancies);

    function handleClickPlus() {
        setVacancies(vacancies + 1);
    }

    function handleClickLess() {
        if (vacancies > 2) {
            setVacancies(vacancies - 1);
        }
    }

    const renderSelects = () => {
        const selects = [];
        for (let index = 0; index < vacancies; index++) {
            selects.push(
                <Vacancy key={index} id={{dayWeekId, dayMonth, weekId, time, local, numVacancy: index}} />
            )
        }
        return selects;
    }

    return (
        <div className={styles.container}>
            <span>{dayWeek}</span>
            <span>{date}</span>
            <span>{time} horas</span>
            <div className={styles.contain}>
                <div className={styles.selects}>{renderSelects()}</div>
                <div className={styles.buttons}>
                    <button type='button' onClick={handleClickPlus}>+</button>
                    <button type='button' onClick={handleClickLess}>-</button>
                </div>
            </div>
            <div className={styles.celebration}>
                <label htmlFor="celebration">Celebração: </label>
                <input
                    type='text'
                    id='celebration'
                    value={celebration}
                    onChange={(e) => setCelebration(e.target.value)}
                />
            </div>
        </div>
    );
}