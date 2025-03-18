//apenas o tsx.
import stylesApp from "../../../main/App.module.css";
import styles from "./styles.module.css";
import {MassForm} from "./components/MassForm/mass-form";
import Button from "../../components/button/button";
import {arrowRight} from "../../../shared/constants/svg-path";
import {useBuildWeeklySchedule} from "./build-weekly-schedule.model";


export default function BuildWeeklyScheduleView(props: ReturnType<typeof useBuildWeeklySchedule>){

    const {
        nameMonth,
        week,
        weeklyMassSchedule,
        handleClickNextWeek,
        handleClickPreviousWeek,
    } = props;


    return (
        <section className={stylesApp.contentFlex}>
            <h1 className={styles.mes}>{nameMonth}</h1>
            <h2 className={styles.semana}>{week}º Semana</h2>
            {
                weeklyMassSchedule ?
                    weeklyMassSchedule.getScheduledMasses().map((mass) => (
                        <MassForm
                            key={mass.id}
                            weekId={week}
                            mass={mass}
                        />
                    )) : null
            }
            <div className={`${stylesApp.cardContainer}`}>
                <Button title={"Próxima Semana"} handleClick={handleClickNextWeek} path={arrowRight}/>
                <Button title={"Voltar Semana"} handleClick={handleClickPreviousWeek} path={arrowRight}/>
            </div>
        </section>
    )
}