import { create } from "zustand";
import { Allocation, Allocations } from "../@types/allocation";
import { OptionsFillVacancies } from "../data/options";

interface AllocationStore {
    allocations: Allocations;
    to_allocate: (option: string, location: Allocation) => void;
    deallocate: (option: string, location: Allocation) => void;
    getAllocationsOption: (option: string) => Allocation[];
    getAllocations: () => Allocations;
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

function deallocate(state: AllocationStore, location: Allocation, option: string): AllocationStore{
    return {
        ...state,
        allocations: {
            ...state.allocations,
            [option]: [...(state.allocations[option].filter((allocation) => 
                (allocation.dayWeekId !== location.dayWeekId) && (allocation.local !== location.local) &&
                (allocation.numVacancy !== location.numVacancy) && (allocation.time !== location.time) && (allocation.dayMonth !== location.dayMonth)) || [])]
        }
    }
}



export const useAllocationStore = create<AllocationStore>()((set, get) => ({
    allocations: OptionsFillVacancies.reduce((obj: Allocations, option) => { 
        obj[option.name] = []; return obj
    }, {}),
    to_allocate: (option, location) => set((state) => allocate(state, location, option)),
    deallocate: (option, location) => set((state) => deallocate(state, location, option)),

    getAllocationsOption: (option) => get().allocations[option],
    getAllocations: () => get().allocations
}));

