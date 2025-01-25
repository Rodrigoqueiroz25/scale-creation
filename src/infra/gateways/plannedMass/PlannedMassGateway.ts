import { DaysWeek } from "../../../enum/DaysWeek.enum";

export type plannedMass = {
    dayWeek: DaysWeek;
    time: string;
    local: string;
    vacancies: number;
    description: string;
}

export type PlannedMass = {
    //dayWeek: DaysWeek;
    time: string;
    local: string;
    vacancies: number;
    description: string;
}

export interface PlannedMassRecord extends Record<DaysWeek, PlannedMass[]> {}

export default interface PlannedMassGateway {
    get(dayWeek: DaysWeek): Promise<PlannedMass[]>;
    getAll(): Promise<PlannedMassRecord>
}

