import WeeklyMassSchedule from "../../domain/entities/WeeklyMassSchedule";

export default interface WeeklyMassScheduleRepository {
    save(massSchedule: WeeklyMassSchedule): void
    get(weekId: number): Promise<WeeklyMassSchedule | undefined>
}