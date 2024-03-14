import { create } from "zustand";
import { Allocation, Allocations } from "../@types/allocation";
import { OptionsFillVacancies } from "../data/options";
import { isEqualAllocations } from "../utils/functions";

interface AllocationStore {
    allocations: Allocations;
    to_allocate: (option: string, location: Allocation) => void;
    deallocate: (option: string, location: Allocation) => void;
    getAllocationsOption: (option: string) => Allocation[];
    getAllocations: () => Allocations;
    isVacancyHasOptionAllocated: (vacancy: Allocation) => string;
}

function allocate(state: AllocationStore, location: Allocation, option: string): AllocationStore{
    return {
        ...state,
        allocations: {
            ...state.allocations,
            [option]: [...(state.allocations[option] || []), location]
        }
    }
}

function deallocate(state: AllocationStore, locationToDealocate: Allocation, option: string): AllocationStore{
    return {
        ...state,
        allocations: {
            ...state.allocations,
            [option]: [...(state.allocations[option].filter((allocation) => !isEqualAllocations(allocation, locationToDealocate)) || [])]
        }
    }
}

function vacancyHasAllocation(vacancy: Allocation, store: Allocations): string{

    for (const opt in store) {
        if(store[opt].find((allocation) => isEqualAllocations(allocation, vacancy)))
            return opt;
    }
    return " ";
}


export const useAllocationStore = create<AllocationStore>()((set, get) => ({
    allocations: OptionsFillVacancies.reduce((obj: Allocations, option) => { 
        obj[option.name] = []; return obj
    }, {}),
    to_allocate: (option, location) => set((state) => allocate(state, location, option)),
    deallocate: (option, location) => set((state) => deallocate(state, location, option)),

    getAllocationsOption: (option) => get().allocations[option],
    getAllocations: () => get().allocations,

    isVacancyHasOptionAllocated: (vacancy) => vacancyHasAllocation(vacancy, get().allocations)
}));

