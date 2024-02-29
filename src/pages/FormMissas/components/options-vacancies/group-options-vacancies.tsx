
import { GroupOptionVacancie } from '../option-vacancie/option-vacancie';
import styles from './style.module.css';

type Props = {
    numVacancies: number;
}

export function OptionsVacancies({ numVacancies }: Props) {

    const renderSelects = () => {
        const selects = [];
        for (let index = 0; index < numVacancies; index++) {
            selects.push(
                <GroupOptionVacancie listName={['wwddddd', 'eeddddddd', 'rttdddddd']} num={index}/>
            )
        }
        return selects;
    }

    return (
        <div className={styles.selects}>{renderSelects()}</div>
    );
}