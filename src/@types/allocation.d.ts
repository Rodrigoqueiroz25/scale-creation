
export type Allocation = {
    dayWeekId: number;
    dayMonth: number;
    weekId: number;
    time: string;
    local: string;
    numVacancy?: number;
    description?: string;
}

export type Allocations = {
    [ option: string ]: Allocation[];
}
