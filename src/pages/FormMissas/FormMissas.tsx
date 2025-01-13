import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./FormMissas.module.css";
import stylesApp from '../../App.module.css';
import { FormMissa } from "./components/form-missa/form-missa";
import { MonthlyCalendar } from "../../helpers/MonthlyCalendar";
import { daysMasses } from "../../constants/masses";


export function FormMissas() {
    const location = useLocation();
    const calendar = new MonthlyCalendar(location.state.mes, new Date().getFullYear());

    const [mes] = useState(location.state.mes);
    const [semana, setSemana] = useState(1);

    function handleClickNextWeek() {
        if (semana < calendar.numberWeeks) {
            setSemana(semana + 1);
        }
    }

    function handleClickPreviousWeek() {
        if (semana > 1) {
            setSemana(semana - 1);
        }
    }

    return (
        <section className={stylesApp.contentFlex}>
            <h1 className={styles.mes}>{mes}</h1>
            <h2 className={styles.semana}>{semana}º Semana</h2>

            {
                calendar.getWeek(semana)?.days.map((day) => (
                    daysMasses[day.getDayWeekId()].map((mass, key) => (
                        <FormMissa
                            date={`${day.getDayNumber()}/${calendar.numMonth}/2024`}
                            dayMonth={day.getMonth()}
                            dayWeekId={day.getDayWeekId()}
                            weekId={semana}
                            time={mass.time}
                            nameCelebration={mass.description}
                            numVacancies={mass.numVacancies}
                            local="Matriz"
                            key={key}
                        />
                    ))
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
