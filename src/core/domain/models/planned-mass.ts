import {DaysWeek} from "../../../shared/enums/DaysWeek.enum";

export type PlannedMass = {
    time: string;
    local: string;
    vacancies: number;
    description: string;
}
export interface PlannedMassRecord extends Record<DaysWeek, PlannedMass[]> {}

