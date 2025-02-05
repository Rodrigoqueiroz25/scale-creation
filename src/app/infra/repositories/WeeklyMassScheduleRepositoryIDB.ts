import WeeklyMassSchedule from "../../domain/entities/WeeklyMassSchedule";
import WeeklyMassScheduleRepository from "./WeeklyMassScheduleRepository";
import IndexedDBAdapter from "../adapters/indexeddb/IndexedDBAdapter";


export default class WeeklyMassScheduleRepositoryIDB implements WeeklyMassScheduleRepository{

    constructor(
        private idb: IndexedDBAdapter<WeeklyMassSchedule>
    ) {
    }

    public async get(weekId: number): Promise<WeeklyMassSchedule | undefined> {
        try{
            return await this.idb.get(weekId);
        }
        catch (error: any) {
            console.error(error.message);
            console.error('Failed to get data');
        }
    }

    public async save(massSchedule: WeeklyMassSchedule): Promise<void> {
        try {
           await this.idb.put(massSchedule);
        }
        catch (error: any) {
            console.error(error.message);
            console.error('Failed to save data');
        }
    }

}
