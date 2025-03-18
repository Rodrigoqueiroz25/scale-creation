import WeeklyMassSchedule from "../../../domain/entities/WeeklyMassSchedule";
import IWeeklyMassScheduleGateway from "../../../domain/gateways/weekly-mass-schedule.gateway";
import IndexedDBAdapter from "../../adapters/indexeddb/IndexedDBAdapter";
import WeeklyMassScheduleMapper from "../../../domain/mapper/WeeklyMassScheduleMapper";
import WeeklyMassScheduleDTO from "../../../domain/models/dto/weekly-mass-schedule-dto";


export default class WeeklyMassScheduleIndexeddbGateway implements IWeeklyMassScheduleGateway{

    constructor(
        private idb: IndexedDBAdapter<WeeklyMassScheduleDTO>
    ) {
    }

    public async get(weekId: number): Promise<WeeklyMassSchedule | undefined> {
        try{
            const result = await this.idb.get(weekId);
            return result !== undefined ? WeeklyMassScheduleMapper.toEntity(result) : undefined;
        }
        catch (error: any) {
            console.error(error.message);
            console.error('Failed to get data');
        }
    }

    public async save(massSchedule: WeeklyMassSchedule): Promise<void> {
        try {
           await this.idb.put(WeeklyMassScheduleMapper.toDTO(massSchedule));
        }
        catch (error: any) {
            console.error(error.message);
            console.error('Failed to save data');
        }
    }

    delete(weekId: number): Promise<void> {
        return Promise.resolve(undefined);
    }



}
