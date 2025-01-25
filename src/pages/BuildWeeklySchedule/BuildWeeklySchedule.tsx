import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import styles from "./BuildWeeklySchedule.module.css";
import stylesApp from '../../App.module.css';
import MonthFactory from "../../helpers/MonthFactory";
import {PlannedMassGatewayMemory} from "../../infra/gateways/plannedMass/PlannedMassGatewayMemory";
import PlannedMassGateway from "../../infra/gateways/plannedMass/PlannedMassGateway";
import {plannedMasses} from "../../data/plannedMassesParish";
import {MassForm} from "./components/MassForm/MassForm";
import WeeklyMassSchedule from "../../entities/WeeklyMassSchedule";


export function BuildWeeklySchedule() {
    const location = useLocation();
    const datesMonth = MonthFactory.create(location.state.mes, new Date().getFullYear());
    const plannedMassGateway: PlannedMassGateway = new PlannedMassGatewayMemory(plannedMasses);

    const [week, setWeek] = useState(1);
    const [weeklyMassSchedule, setWeeklyMassSchedule] = useState<WeeklyMassSchedule>(new WeeklyMassSchedule([], 0));

    function handleClickNextWeek() {
        if (week < datesMonth.totalWeeks) {
            setWeek(week + 1);
        }
        //chama método pra persistir agendamentos.
    }

    function handleClickPreviousWeek() {
        if (week > 1) {
            setWeek(week - 1);
        }
        //chama método pra persistir agendamentos da semana atual.
    }

    useEffect(() => {
        plannedMassGateway.getAll().then(plannedMasses => {
            setWeeklyMassSchedule(WeeklyMassSchedule.create(datesMonth.getWeek(week), plannedMasses));
        });
        //ver se já tem agendamentos persistidos para a semana. faz um get com id da semana.
    }, [week]);

    return (
        <section className={stylesApp.contentFlex}>
            <h1 className={styles.mes}>{datesMonth.getName()}</h1>
            <h2 className={styles.semana}>{week}º Semana</h2>
            {
                weeklyMassSchedule.massesScheduledForWeek.map((mass, key) => (
                    <MassForm key={key} mass={mass} weeklyMassSchedule={weeklyMassSchedule}/>
                ))
            }
            <div className={`${stylesApp.cardContainer}`}>
                <button
                    className={stylesApp.card}
                    type="submit"
                    onClick={handleClickNextWeek}
                >
                    <span>Próxima Semana</span>
                    <svg
                        className={stylesApp.materialIcons}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                </button>

                <button
                    className={stylesApp.card}
                    type="submit"
                    onClick={handleClickPreviousWeek}
                >
                    <span>Voltar Semana</span>
                    <svg
                        className={stylesApp.materialIcons}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                </button>
            </div>
        </section>
    );
}
