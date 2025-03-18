import SaveWeeklyMassScheduleUseCase
    from "../../core/application/useCases/weeekly-mass-schedule/save-weekly-mass-schedule.use-case";
import GetWeeklyMassScheduleUseCase
    from "../../core/application/useCases/weeekly-mass-schedule/get-weekly-mass-schedule.use-case";
import GetAllAltarServersUseCase from "../../core/application/useCases/altar-server/get-all-altar-servers.use-case";
import AssignAltarServerToMassUseCase from "../../core/application/useCases/mass/assign-altar-server-to-mass.use-case";
import UnassignAltarServerOfMassUseCase
    from "../../core/application/useCases/mass/unassign-altar-server-of-mass.use-case";
import AltarServerListService from "../../core/application/services/altar-server-list-service";
import IndexedDBAdapter from "../../core/infra/adapters/indexeddb/IndexedDBAdapter";
import WeeklyMassScheduleDTO from "../../core/domain/models/dto/weekly-mass-schedule-dto";
import IndexedDBAdapterNative from "../../core/infra/adapters/indexeddb/IndexedDBAdapterNative";
import IPlannedMassGateway from "../../core/domain/gateways/planned-mass.gateway";
import {PlannedMassMemoryGateway} from "../../core/infra/gateways/planned-mass/planned-mass-memory.gateway";
import {plannedMasses} from "../../shared/data/plannedMassesParish";
import IAltarServerGateway from "../../core/domain/gateways/altar-server.gateway";
import AltarServerMemoryGateway from "../../core/infra/gateways/altar-server/altar-server-memory.gateway";
import {altarServersParoch} from "../../shared/data/altarServers";
import IWeeklyMassScheduleGateway from "../../core/domain/gateways/weekly-mass-schedule.gateway";
import WeeklyMassScheduleIndexeddbGateway
    from "../../core/infra/gateways/weekly-mass-schedule/weekly-mass-schedule-indexeddb.gateway";
import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {PlannedMassRecord} from "../../core/domain/models/planned-mass";
import {AltarServer} from "../../core/domain/models/altar-server";
import CreateWeeklyMassScheduleUseCase
    from "../../core/application/useCases/weeekly-mass-schedule/create-weekly-mass-schedule.use-case";
import EventListenersService from "../../core/application/services/event-listeners-service";


const indexedDBAdapter: IndexedDBAdapter<WeeklyMassScheduleDTO> =
    new IndexedDBAdapterNative<WeeklyMassScheduleDTO>("dbSchedules", 1, "schedules");

const plannedMassGateway: IPlannedMassGateway = new PlannedMassMemoryGateway(plannedMasses);
const altarServersGateway: IAltarServerGateway = new AltarServerMemoryGateway(altarServersParoch);
const weekScheduleGateway: IWeeklyMassScheduleGateway = new WeeklyMassScheduleIndexeddbGateway(indexedDBAdapter);

const saveWeeklyMassSchedule = new SaveWeeklyMassScheduleUseCase(weekScheduleGateway);
const getWeeklyMassSchedule = new GetWeeklyMassScheduleUseCase(weekScheduleGateway);
const getAllAltarServers = new GetAllAltarServersUseCase(altarServersGateway);
const assignAltarServer = new AssignAltarServerToMassUseCase(weekScheduleGateway);
const unassignAltarServer = new UnassignAltarServerOfMassUseCase(weekScheduleGateway);
const altarServerList = new AltarServerListService(altarServersGateway, weekScheduleGateway)
const createWeeklyMassSchedule = new CreateWeeklyMassScheduleUseCase(plannedMassGateway, weekScheduleGateway);
const eventListenersService = new EventListenersService();

type ContextType = {
    plannedMasses: PlannedMassRecord,
    altarServers: AltarServer[],
    saveWeeklyMassSchedule: SaveWeeklyMassScheduleUseCase,
    getWeeklyMassSchedule: GetWeeklyMassScheduleUseCase,
    assignAltarServer: AssignAltarServerToMassUseCase,
    unassignAltarServer: UnassignAltarServerOfMassUseCase,
    getAllAltarServers: GetAllAltarServersUseCase,
    altarServerList: AltarServerListService,
    createWeeklyMassSchedule: CreateWeeklyMassScheduleUseCase,
    eventListenersService: EventListenersService,
}

type ProviderProps = {
    children: ReactNode;
}

const ServiceContext = createContext<ContextType | undefined>(undefined);


export const ServiceProvider = ({ children }: ProviderProps) => {

    const [plannedMasses, setPlannedMasses] = useState<PlannedMassRecord>();
    const [altarServers, setAltarServers] = useState<AltarServer[]>([]);

    useEffect(() => {
        const getPlannedMass = async () => {
            const plannedMasses = await plannedMassGateway.getAll();
            setPlannedMasses(plannedMasses);
        }
        getPlannedMass();
    },[]);

    useEffect(() => {
        const getAltarServers = async () => {
            const altarServers = await altarServersGateway.getAll();
            setAltarServers(altarServers);
        }
        getAltarServers();
    },[]);

    const services = {
        getWeeklyMassSchedule,
        saveWeeklyMassSchedule,
        getAllAltarServers,
        assignAltarServer,
        unassignAltarServer,
        altarServerList,
        createWeeklyMassSchedule,
        eventListenersService
    }

    return (
        <ServiceContext.Provider
            value={{
                plannedMasses: plannedMasses as PlannedMassRecord,
                altarServers,
                ...services
            }
        }>{children}</ServiceContext.Provider>
    )

}

export function useServices() {
    const context = useContext(ServiceContext);

    if (context === undefined) {
        throw new Error('useServices deve ser usado dentro de um ServiceProvider');
    }

    return context;
}
