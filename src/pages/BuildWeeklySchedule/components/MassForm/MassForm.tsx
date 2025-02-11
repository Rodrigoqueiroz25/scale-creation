import {useState} from 'react';
import styles from './style.module.css';
import Mass from "../../../../app/domain/entities/Mass";
import {Selector} from "../../../../components/Selector/Selector";
import {Option} from "../../../../@types/option";
import IAltarServerAssignment from "../../../../app/domain/interfaces/IAltarServerAssignment";

type Props = {
    mass: Mass;
    altarServerAssignment: IAltarServerAssignment;
    altarServerList: Option[];
    func: () => void;
}

export function MassForm({mass, altarServerAssignment, altarServerList, func}: Props) {

    const [celebration, setCelebration] = useState(mass.getDescription());
    const [vacancies, setVacancies] = useState<number>(mass.getNumVacancies());

    function handleClickPlus() {
        setVacancies(vacancies + 1);
    }

    function handleClickLess() {
        if (vacancies > 2) {
            setVacancies(vacancies - 1);
        }
    }
    
    function altarServerChosen(id: number, newOption: Option, oldOption?: Option) {
        if(oldOption) {
            altarServerAssignment.unassignAltarServer(id, mass.getDateTimeLocal());
        }
        if (newOption)
            altarServerAssignment.assignAltarServer(newOption, id, mass.getDateTimeLocal());
        func()
    }

    function renderSelects(altarServers: Option[]) {
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
                <div className={styles.selects}>{renderSelects(altarServerList)}</div>
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