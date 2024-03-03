
import { Vacancy } from '../vacancy/vacancy';
import styles from './style.module.css';

type Props = {
    numVacancies: number;
}

export function GroupVacancies({ numVacancies }: Props) {

    const renderSelects = () => {
        const selects = [];
        for (let index = 0; index < numVacancies; index++) {
            selects.push(
                <Vacancy key={index} num={index}/>
            )
        }
        return selects;
    }

    return (
        <div className={styles.selects}>{renderSelects()}</div>
    );
}