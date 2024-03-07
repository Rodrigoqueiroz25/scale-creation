
export type Allocation = {
    day: string;
    time: string;
    local: string;
    numVacancy: number;
}

export type Allocations = {
    [ option: string ]: Allocation[];
}