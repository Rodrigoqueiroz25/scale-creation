import {useState, useEffect} from 'react';
import styles from './style.module.css';
import AltarServersGateway from "../../../../infra/gateways/altarServers/AltarServersGateway";
import AltarServersGatewayMemory from "../../../../infra/gateways/altarServers/AltarServersGatewayMemory";
import {altarServersParoch} from "../../../../data/altarServers";
import WeeklyMassSchedule from "../../../../entities/WeeklyMassSchedule";
import Mass from "../../../../entities/Mass";
import {Selector} from "../../../../components/Selector/Selector";
import {Option} from "../../../../@types/option";

type Props = {
    mass: Mass;
    weeklyMassSchedule: WeeklyMassSchedule;
}

export function MassForm({mass, weeklyMassSchedule}: Props) {
    const altarServersGateway: AltarServersGateway = new AltarServersGatewayMemory(altarServersParoch);

    const [celebration, setCelebration] = useState(mass.getDescription());
    const [vacancies, setVacancies] = useState<number>(mass.getNumVacancies());
    const [altarServers, setAltarServers] = useState<Option[]>([]);


    function handleClickPlus() {
        setVacancies(vacancies + 1);
    }

    function handleClickLess() {
        if (vacancies > 2) {
            setVacancies(vacancies - 1);
        }
    }
    
    function altarServerChosen(id: number, newOption: Option, oldOption?: Option) {
        //logica para registrar
        if(oldOption) {
            console.log(oldOption);
            weeklyMassSchedule.cancelAssignAltarServer(id, mass.getDate(), mass.getTime(), mass.getLocal());
        }
        weeklyMassSchedule.assignToMass(newOption, id, mass.getDate(), mass.getTime(), mass.getLocal());
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
                />
            )
        }
        return selects;
    }

    useEffect(() => {
        altarServersGateway.getAll().then(altarServers => {
            setAltarServers(altarServers);
        })
    },[])


    return (
        <div className={styles.container}>
            <span>{mass.getDate().getDayWeek()}</span>
            <span>{mass.getDate().getDayNumber()}</span>
            <span>{mass.getTime()} horas</span>
            <span>{mass.getLocal()}</span>
            <div className={styles.contain}>
                <div className={styles.selects}>{renderSelects(altarServers)}</div>
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