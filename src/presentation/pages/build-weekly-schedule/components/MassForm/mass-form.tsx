
import styles from './style.module.css';
import Mass from "../../../../../core/domain/entities/Mass";
import {Selector} from "../../../../components/Selector/Selector";
import {useMassForm} from "./mass-form.model";


type Props = {
    weekId: number;
    mass: Mass;
}

export function MassForm({ weekId, mass }: Props) {

    const {
        vacancies,
        altarServers,
        altarServerChosen,
        handleClickLess,
        handleClickPlus,
        celebration,
        setCelebration
    } = useMassForm({weekId, mass});

    function renderSelects() {
        const selects: any[] = [];
        for (let index = 1; index <= vacancies; index++) {
            selects.push(
                <Selector
                    key={`${mass.id}-${index}`}
                    id={index}
                    options={altarServers}
                    onHandleSelector={altarServerChosen}
                    optPreSelected={mass.getAltarServer(index)}
                />
            )
        }
        return selects;
    }

    return (
        <div className={styles.container}>
            <span>{mass.getDate().getDayWeek()}</span>
            <span>{mass.getDate().getDayNumber()}</span>
            <span>{mass.getTime()} horas</span>
            <span>{mass.getLocal()}</span>
            <div className={styles.contain}>
                <div className={styles.selects}>{renderSelects()}</div>
                <div className={styles.buttons}>
                    <button type='button' onClick={handleClickPlus}>+</button>
                    <button type='button' onClick={handleClickLess}>-</button>
                </div>
            </div>
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