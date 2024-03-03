
import { useState } from 'react';
import styles from './style.module.css';
import { GroupVacancies } from '../group-vacancies/group-vacancies';

type Props = {
    day: string;
    date: string;
    hour: string;
    numVacancies: number;
    nameCelebration: string;
}

export function FormMissa({ date, day, hour, nameCelebration, numVacancies }: Props) {

    const [celebration, setCelebration] = useState(nameCelebration);

    return (
        <div className={styles.container}>
            <span>{day}</span>
            <span>{date}</span>
            <span>{hour} horas</span>
            <GroupVacancies numVacancies={numVacancies}/>
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