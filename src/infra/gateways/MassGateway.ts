import { DaysWeek } from "../../enum/DaysWeek.enum";

export type Mass = {
    time: string;
    local: string;
    vacancies: number;
    description: string;
}

export type MassesByDay = {
    day: DaysWeek;
    masses: Mass[];
}

export default interface MassGateway {
    getByDay(dayWeek: string): Promise<Mass[]>;
    getAll(): Promise<MassesByDay[]>
}

