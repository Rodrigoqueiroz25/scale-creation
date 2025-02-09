import WeeklyMassSchedule from "../../domain/entities/WeeklyMassSchedule";
import WeeklyMassScheduleRepository from "./WeeklyMassScheduleRepository";
import IndexedDBAdapter from "../adapters/indexeddb/IndexedDBAdapter";
import WeeklyMassScheduleMapper from "../../application/mapper/WeeklyMassScheduleMapper";


export default class WeeklyMassScheduleRepositoryIDB implements WeeklyMassScheduleRepository{

    constructor(
        private idb: IndexedDBAdapter
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



}
