
import { Allocation } from "../@types/allocation";


export function isEqualAllocations(obj1: Allocation, obj2: Allocation): boolean{
    let bool =  (obj1.dayWeekId === obj2.dayWeekId) && (obj1.local === obj2.local) && 
                (obj1.time === obj2.time) && (obj1.dayMonth === obj2.dayMonth) && (obj1.weekId === obj2.weekId);
    if(obj1.numVacancy !== undefined && obj2.numVacancy !== undefined)
        bool = bool && (obj1.numVacancy === obj2.numVacancy);
    return bool;
}


export function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}