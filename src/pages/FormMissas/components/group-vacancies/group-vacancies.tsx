
import { useState } from 'react';
import { Vacancy } from '../vacancy/vacancy';
import styles from './style.module.css';

type Props = {
    numVacancies: number;
}

export function GroupVacancies({ numVacancies }: Props) {

    const [vacancies, setVacancies] = useState<number>(numVacancies);

    const renderSelects = () => {
        const selects = [];
        for (let index = 0; index < vacancies; index++) {
            selects.push(
                <Vacancy key={index} num={index}/>
            )
        }
        return selects;
    }

    function handleClickPlus(){
        setVacancies(vacancies + 1);
    }

    function handleClickLess(){
        if(vacancies > 2){
            setVacancies(vacancies - 1);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.selects}>{renderSelects()}</div>
            <div className={styles.buttons}>
                <button type='button' onClick={handleClickPlus}>+</button>
                <button type='button' onClick={handleClickLess}>-</button>
            </div>
        </div>
    );
}