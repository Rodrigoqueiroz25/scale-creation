
import { useEffect, useState } from 'react';
import styles from './style.module.css';

type Props = {
    listName: string[];
    num: number;
}

export function GroupOptionVacancie({ listName, num }: Props) {

    const [nameSelected, setNameSelected] = useState('');

    return (
        <select className={styles.select} onChange={(e) => setNameSelected(e.target.value)}>
            {
                listName.map((name, key) => (
                    <option value={name+key+num}>{name}</option>    
                ))
            }

        </select >
    )
}