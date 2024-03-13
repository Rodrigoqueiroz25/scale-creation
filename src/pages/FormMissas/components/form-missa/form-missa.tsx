
import { useEffect, useState } from 'react';
import styles from './style.module.css';
import { GroupVacancies } from '../group-vacancies/group-vacancies';
import { daysWeek } from '../../../../constants/calendar';

type Props = {
    dayWeekId: number;
    date: string;
    time: string;
    numVacancies: number;
    nameCelebration: string;
    local: string;
    dayMonth: number
}

export function FormMissa({ date, dayWeekId, time, nameCelebration, numVacancies, local, dayMonth }: Props) {

    const [celebration, setCelebration] = useState(nameCelebration);

    return (
        <div className={styles.container}>
            <span>{daysWeek[dayWeekId]}</span>
            <span>{date}</span>
            <span>{time} horas</span>
            <GroupVacancies numVacancies={numVacancies} id={{dayWeekId, local, time, dayMonth}}/>
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