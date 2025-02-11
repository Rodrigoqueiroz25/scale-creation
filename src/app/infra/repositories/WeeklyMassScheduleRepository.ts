import WeeklyMassSchedule from "../../domain/entities/WeeklyMassSchedule";

export default interface WeeklyMassScheduleRepository {
    save(massSchedule: WeeklyMassSchedule): Promise<void>
    get(weekId: number): Promise<WeeklyMassSchedule | undefined>;
}