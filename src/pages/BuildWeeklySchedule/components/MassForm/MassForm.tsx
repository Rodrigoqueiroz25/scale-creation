import {useState, useEffect} from 'react';
import styles from './style.module.css';
import AltarServersGateway from "../../../../application/infra/gateways/altarServers/AltarServersGateway";
import AltarServersGatewayMemory from "../../../../application/infra/gateways/altarServers/AltarServersGatewayMemory";
import {altarServersParoch} from "../../../../application/shared/data/altarServers";
import Mass from "../../../../application/core/entities/Mass";
import {Selector} from "../../../../components/Selector/Selector";
import {Option} from "../../../../@types/option";
import AltarServerWeeklySchedule from "../../../../application/core/entities/AltarServerWeeklySchedule";

type Props = {
    mass: Mass;
    altarServerMassSchedule: AltarServerWeeklySchedule;
}

export function MassForm({mass, altarServerMassSchedule}: Props) {
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
            altarServerMassSchedule.cancelAssignAltarServer(id, mass.getDate(), mass.getTime(), mass.getLocal());
        }
        altarServerMassSchedule.assignToMass(newOption, id, mass.getDate(), mass.getTime(), mass.getLocal());
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