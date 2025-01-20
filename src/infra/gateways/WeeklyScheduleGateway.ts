import { DaysWeek } from "../../enum/DaysWeek.enum";

export type ScheduledMass = {
    dayWeek?: DaysWeek;
    time: string;
    local: string;
    vacancies: number;
    description: string;
}

export type WeeklySchedule = {
    day: DaysWeek;
    masses: ScheduledMass[];
}

export default interface WeeklyScheduleGateway {
    get(dayWeek: string): Promise<ScheduledMass[]>;
    getAll(): Promise<ScheduledMass[]>
}

