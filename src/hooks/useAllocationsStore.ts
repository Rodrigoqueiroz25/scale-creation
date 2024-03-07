import { create } from "zustand";
import { Allocation, Allocations } from "../@types/allocation";

interface AllocationStore {
    allocations: Allocations;
    to_allocate: (option: string, location: Allocation) => void;
    deallocate: (option: string, location: Allocation) => void;
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
                allocation.day !== location.day && allocation.local !== location.local &&
                allocation.numVacancy !== location.numVacancy && allocation.time !== location.time) || [])]
        }
    }
}

export const useAllocationStore = create<AllocationStore>()((set, get) => ({
    allocations: { },
    to_allocate: (option, location) => set((state) => allocate(state, location, option)),
    deallocate: (option, location) => set((state) => deallocate(state, location, option)),

    dd: () => get().allocations
}));

