
import { useEffect, useState } from 'react';
import { Option } from '../../@types/option';
import styles from './styles.module.css';

type Props = {
    options: Option[];
    optPreSelected: string;
    onHandleSelector: (newValue: string, oldValue?: string) => void;
}

export function Selector({ options, optPreSelected = ' ', onHandleSelector }: Props){

    const [nameSelected, setNameSelected] = useState(' ');

    function handleChange(value: any) {
        onHandleSelector(value, nameSelected);
        setNameSelected(value);
    }

    useEffect(() => {
        setNameSelected(optPreSelected);
    }, [optPreSelected]);


    return (
        <div className={styles.container}>
            <select name='t' className={styles.select} onChange={(e) => handleChange(e.target.value)} value={nameSelected}>
                <option key={-1} value=" "></option>
                {
                    options.map((opt) => (
                        <option key={opt.id} value={opt.name}>{opt.name}</option>
                    ))
                }
            </select >
        </div>
    );
}