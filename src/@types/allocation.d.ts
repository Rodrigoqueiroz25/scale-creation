
export type Allocation = {
    day: number;
    time: string;
    local: string;
    numVacancy?: number;
}

export type Allocations = {
    [ option: string ]: Allocation[];
}