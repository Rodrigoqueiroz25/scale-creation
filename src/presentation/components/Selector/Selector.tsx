import {useEffect, useState} from 'react';
import styles from './styles.module.css';
import {Option} from "../../../core/domain/models/option";


type Props = {
    id: number;
    options: Option[];
    onHandleSelector: (id: number, newOption: Option, oldOption?: Option) => void;
    optPreSelected?: Option;
}

export function Selector({id, options, onHandleSelector, optPreSelected}: Props) {

    const [optionSelected, setOptionSelected] = useState<Option>();

    function handleChange(optionStringify: string) {
            const option = optionStringify !== "" ? JSON.parse(optionStringify) : undefined;
            onHandleSelector(id, option, optionSelected);
            setOptionSelected(option);
    }

    useEffect(() => {
        if(optPreSelected)
            setOptionSelected(optPreSelected);
    }, [optPreSelected]);


    return (
        <div className={styles.container}>
            <select
                name='t'
                className={styles.select}
                onChange={(e) => handleChange(e.target.value)}
                value={JSON.stringify(optionSelected)}
            >
                <option key={-1} value={""}></option>
                {
                    optionSelected ?
                        <option key={optionSelected?.id} value={JSON.stringify(optionSelected)}>{optionSelected?.name}</option>
                        : null
                }
                {
                    options.map((opt) => (
                        <option key={opt.id} value={JSON.stringify(opt)}>{opt.name}</option>
                    ))
                }
            </select>
        </div>
    );
}