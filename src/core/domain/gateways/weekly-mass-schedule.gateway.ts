import WeeklyMassSchedule from "../entities/WeeklyMassSchedule";

export default interface IWeeklyMassScheduleGateway {
    save(massSchedule: WeeklyMassSchedule): Promise<void>
    get(weekId: number): Promise<WeeklyMassSchedule | undefined>;
    delete(weekId: number): Promise<void>;
}