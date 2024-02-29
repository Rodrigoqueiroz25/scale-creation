
import styles from './style.module.css';

type Props = {
    numVacancies: number;
}

export function OptionsVacancies({ numVacancies }: Props) {

    const renderSelects = () => {
        const selects = [];
        for (let index = 0; index < numVacancies; index++) {
            selects.push(
                <select name='tes'>
                    <option value={1}>{1}</option>
                </select>
            )
        }
        return selects;
    }

    return (
        <div className={styles.selects}>{renderSelects()}</div>
    );
}