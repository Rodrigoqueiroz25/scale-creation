
import { Allocation } from "../@types/allocation";
import { Option } from "../@types/option";
import { OptionsFillVacancies } from "../data/options";
import { useAllocationStore } from "./useAllocationsStore";


export function useOptionsVacancies(){

    const { getAllocations } = useAllocationStore();

    /**
     * obter lista de nomes que posso exibir num select.
     * 
     */
    function getListOptions(vacancyRequester: Allocation): Option[] {
        let array: Option[] = OptionsFillVacancies;
        let allocations = getAllocations();

        for (const key in allocations) {
            allocations[key].forEach((allocation) => {
                if(allocation.day === vacancyRequester.day){
                    if(allocation.numVacancy !== vacancyRequester.numVacancy){
                        array = array.filter((opt) => opt.name !== key);
                    }
                }
            })
        }
        return array;
    }


    return { 
        getListOptions
    };

}