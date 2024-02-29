
import { useState } from 'react';
import styles from './style.module.css';

type Props = {
    day: string;
    date: string;
    hour: string;
    numVacancies: number;
    nameCelebration: string;
}

export function FormMissa({ date, day, hour, nameCelebration, numVacancies }: Props) {

    const [celebration, setCelebration] = useState(nameCelebration);

    const renderSelects = () => {
        const selects = [];
        for (let index = 0; index < numVacancies; index++) {
            selects.push(<select name='tes'><option value={index}>{index}</option></select>)
        }
        return selects;
    }

    return (
        <div className={styles.container}>
            <span>{day}</span>
            <span>{date}</span>
            <span>{hour} horas</span>
            <div className={styles.selects}>{renderSelects()}</div>
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