
import { useState } from 'react';
import styles from './style.module.css';
import { OptionsFillVacancies } from '../../../../data/options'

type Props = {
    num: number;
}

export function Vacancy({ num }: Props) {

    const [nameSelected, setNameSelected] = useState('');

    return (
        <select className={styles.select} onChange={(e) => setNameSelected(e.target.value)}>
            {
                OptionsFillVacancies.map((name, key) => (
                    <option key={key} value={name+key+num}>{name}</option>    
                ))
            }

        </select >
    )
}