import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import styles from "./BuildWeeklySchedule.module.css";
import stylesApp from '../../App.module.css';
import MonthFactory from "../../app/domain/factories/MonthFactory";
import {PlannedMassGatewayMemory} from "../../app/infra/gateways/plannedMass/PlannedMassGatewayMemory";
import PlannedMassGateway from "../../app/infra/gateways/plannedMass/PlannedMassGateway";
import {plannedMasses} from "../../app/shared/data/plannedMassesParish";
import {MassForm} from "./components/MassForm/MassForm";
import WeeklyMassSchedule from "../../app/domain/entities/WeeklyMassSchedule";
import WeeklyAltarServerMassAssignmentManager from "../../app/application/usecases/WeeklyAltarServerMassAssignmentManager";
import AltarServerList from "../../app/application/services/AltarServerList";
import AltarServersGateway from "../../app/infra/gateways/altarServers/AltarServersGateway";
import AltarServersGatewayMemory from "../../app/infra/gateways/altarServers/AltarServersGatewayMemory";
import {altarServersParoch} from "../../app/shared/data/altarServers";
import WeeklyMassScheduleRepositoryIDB from "../../app/infra/repositories/WeeklyMassScheduleRepositoryIDB";
import IndexedDBAdapter from "../../app/infra/adapters/indexeddb/IndexedDBAdapter";
import IndexedDBAdapterNative from "../../app/infra/adapters/indexeddb/IndexedDBAdapterNative";


export function BuildWeeklySchedule() {

    const location = useLocation();
    const datesMonth = MonthFactory.create(location.state.mes, new Date().getFullYear());
    const plannedMassGateway: PlannedMassGateway = new PlannedMassGatewayMemory(plannedMasses);
    const altarServersGateway: AltarServersGateway = new AltarServersGatewayMemory(altarServersParoch);
    const indexedDBAdapter: IndexedDBAdapter = new IndexedDBAdapterNative("dbSchedules", 1, "schedules");
    const weekScheduleRepository: WeeklyMassScheduleRepositoryIDB = new WeeklyMassScheduleRepositoryIDB(indexedDBAdapter);

    const [week, setWeek] = useState(1);
    const [renderr, setRenderr] = useState(true);
    const [weeklyMassSchedule, setWeeklyMassSchedule] = useState<WeeklyMassSchedule>();
    const [altarServerMassAssignmentManager, setAltarServerMassAssignmentManager] = useState<WeeklyAltarServerMassAssignmentManager>({} as WeeklyAltarServerMassAssignmentManager);
    const [altarServerList, setAltarServerList] = useState<AltarServerList>();

    async function handleClickNextWeek() {
        if (week < datesMonth.totalWeeks) {
            setWeek(week + 1);
        }
        if(weeklyMassSchedule)
            await weekScheduleRepository.save(weeklyMassSchedule)
    }

    async function handleClickPreviousWeek() {
        if (week > 1) {
            setWeek(week - 1);
        }
        if(weeklyMassSchedule)
            await weekScheduleRepository.save(weeklyMassSchedule)
    }

    function rerender(){
        setRenderr(!renderr);
    }


    useEffect(() => {
        const getPlannedMasses = async () => {
            //ver se já tem agendamentos persistidos para a semana. faz um get com id da semana.
            const weeklySchedule = await weekScheduleRepository.get(week);
            if(weeklySchedule){
                setWeeklyMassSchedule(weeklySchedule)
            }
            else{
                //cria um weeklyMassSchedule do zero.
                let plannedMasses = await plannedMassGateway.getAll();
                setWeeklyMassSchedule(WeeklyMassSchedule.create(datesMonth.getWeek(week), plannedMasses));
            }
        }
        getPlannedMasses();
    }, [week]);


    useEffect(() => {
        const getAltarServers = async (schedule: WeeklyMassSchedule) => {
            let altarServers = await altarServersGateway.getAll();
            setAltarServerList(new AltarServerList(altarServers, schedule));
        }
        if(weeklyMassSchedule){
            getAltarServers(weeklyMassSchedule);
            setAltarServerMassAssignmentManager(new WeeklyAltarServerMassAssignmentManager(weeklyMassSchedule));
        }
    }, [weeklyMassSchedule]);


    return (
        <section className={stylesApp.contentFlex}>
            <h1 className={styles.mes}>{datesMonth.getName()}</h1>
            <h2 className={styles.semana}>{week}º Semana</h2>
            {
                weeklyMassSchedule && altarServerList ?
                    weeklyMassSchedule.getSchedule().map((mass) => (
                        <MassForm
                            func={rerender}
                            key={mass.id}
                            mass={mass}
                            altarServerMassAssignment={altarServerMassAssignmentManager}
                            altarServerList={altarServerList.getList(mass)}
                        />
                    )) : null
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
