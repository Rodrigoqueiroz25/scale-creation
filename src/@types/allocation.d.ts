
export type Allocation = {
    dayWeekId: number;
    dayMonth: number;
    time: string;
    local: string;
    numVacancy?: number;
}

export type Allocations = {
    [ option: string ]: Allocation[];
}