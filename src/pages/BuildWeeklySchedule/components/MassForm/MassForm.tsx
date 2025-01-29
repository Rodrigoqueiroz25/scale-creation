import {useState} from 'react';
import styles from './style.module.css';
import Mass from "../../../../app/domain/entities/Mass";
import {Selector} from "../../../../components/Selector/Selector";

import WeeklyAltarServerMassAssignmentManager from "../../../../app/application/usecases/WeeklyAltarServerMassAssignmentManager";
import {Option} from "../../../../@types/option";

type Props = {
    mass: Mass;
    altarServerMassAssignment: WeeklyAltarServerMassAssignmentManager;
    altarServerList: Option[];
    func: () => void;
}

export function MassForm({mass, altarServerMassAssignment, altarServerList, func}: Props) {

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
            altarServerMassAssignment.unassignFromMass(id, mass.getMassId());
        }
        if (newOption)
            altarServerMassAssignment.assignToMass(newOption, id, mass.getMassId());
        func()
    }

    function renderSelects(altarServers: Option[]) {
        const selects: any[] = [];
        for (let index = 1; index <= vacancies; index++) {
            selects.push(
                <Selector
                    key={index}
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