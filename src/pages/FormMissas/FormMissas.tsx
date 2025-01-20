import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./FormMissas.module.css";
import stylesApp from '../../App.module.css';
import { FormMissa } from "./components/form-missa/form-missa";
import MonthFactory from "../../helpers/MonthFactory";
import {WeeklyScheduleGatewayMemory} from "../../infra/gateways/WeeklyScheduleGatewayMemory";
import WeeklyScheduleGateway, {ScheduledMass} from "../../infra/gateways/WeeklyScheduleGateway";
import {scheduledMassesParoch} from "../../data/scheduledMasses";

type FormMass = {
    day: number;
    dayWeekId: number;
    dayWeek: string;
    month: number;
    year: number;
    time: string;
    local: string;
    vacancies: number;
    description: string;
}

export function FormMissas() {
    const location = useLocation();
    const datesMonth = MonthFactory.create(location.state.mes, new Date().getFullYear());
    const weeklyScheduleGateway: WeeklyScheduleGateway = new WeeklyScheduleGatewayMemory(scheduledMassesParoch);

    const [week, setWeek] = useState(1);
    const [weeklySchedule, setWeeklySchedule] = useState<ScheduledMass[]>([]);

    function handleClickNextWeek() {
        if (week < datesMonth.totalWeeks) {
            setWeek(week + 1);
        }
    }

    function handleClickPreviousWeek() {
        if (week > 1) {
            setWeek(week - 1);
        }
    }

    function combineObjects() {
        const forms: FormMass[] = [];
        datesMonth.getWeek(week).getAll().forEach((day) => {
            weeklySchedule.forEach((scheduledMass) => {
                if (day.getDayWeek() === scheduledMass.dayWeek) {
                        forms.push({
                            day: day.getDayNumber(),
                            month: day.getMonth(),
                            year: day.getYear(),
                            dayWeek: day.getDayWeek(),
                            dayWeekId: day.getDayWeekId(),
                            time: scheduledMass.time,
                            local: scheduledMass.local,
                            vacancies: scheduledMass.vacancies,
                            description: scheduledMass.description
                        })
                }
            })
        })
        return forms;
    }

    useEffect(() => {
        weeklyScheduleGateway.getAll().then(scheduledMasses => {
            setWeeklySchedule(scheduledMasses);
        })
    }, []);

    return (
        <section className={stylesApp.contentFlex}>
            <h1 className={styles.mes}>{datesMonth.getName()}</h1>
            <h2 className={styles.semana}>{week}º Semana</h2>

            {
                combineObjects().map((mass, key) => (
                    <FormMissa
                        date={`${mass.day}/${mass.month}/${mass.year}`}
                        dayMonth={mass.month}
                        dayWeek={mass.dayWeek}
                        dayWeekId={mass.dayWeekId}
                        weekId={week}
                        time={mass.time}
                        nameCelebration={mass.description}
                        numVacancies={mass.vacancies}
                        local={mass.local}
                        key={key}
                    />
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
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
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
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </svg>
                </button>
            </div>
        </section>
    );
}
