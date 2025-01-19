import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./FormMissas.module.css";
import stylesApp from '../../App.module.css';
import { FormMissa } from "./components/form-missa/form-missa";
import MassGateway, { MassesByDay } from "../../infra/gateways/MassGateway";
import {MassGatewayMemory} from "../../infra/gateways/MassGatewayMemory";
import MonthFactory from "../../helpers/MonthFactory";
import Month from "../../entities/Month";

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
    const datesMonth = MonthFactory.create(location.state.mes, new Date().getFullYear()) as Month;
    const massesByDay: MassGateway = new MassGatewayMemory();

    const [semana, setSemana] = useState(1);
    const [massesWeek, setMassesWeek] = useState<MassesByDay[]>([]);

    function handleClickNextWeek() {
        if (semana < datesMonth.totalWeeks) {
            setSemana(semana + 1);
        }
    }

    function handleClickPreviousWeek() {
        if (semana > 1) {
            setSemana(semana - 1);
        }
    }

    function combineObjects() {
        const forms: FormMass[] = [];
        datesMonth.getWeek(semana).getAll().forEach((day) => {
            massesWeek.forEach((massByDay) => {
                if (day.getDayWeek() === massByDay.day) {
                    massByDay.masses.forEach((mass) => {
                        forms.push({
                            day: day.getDayNumber(),
                            month: day.getMonth(),
                            year: day.getYear(),
                            dayWeek: day.getDayWeek(),
                            dayWeekId: day.getDayWeekId(),
                            time: mass.time,
                            local: mass.local,
                            vacancies: mass.vacancies,
                            description: mass.description
                        })
                    })
                }
            })
        })
        return forms;
    }

    useEffect(() => {
        massesByDay.getAll().then(masses => {
            setMassesWeek(masses);
        })
    }, []);

    return (
        <section className={stylesApp.contentFlex}>
            <h1 className={styles.mes}>{datesMonth.getName()}</h1>
            <h2 className={styles.semana}>{semana}º Semana</h2>

            {
                combineObjects().map((mass, key) => (
                    <FormMissa
                        date={`${mass.day}/${mass.month}/${mass.year}`}
                        dayMonth={mass.month}
                        dayWeekId={mass.dayWeekId}
                        weekId={semana}
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
