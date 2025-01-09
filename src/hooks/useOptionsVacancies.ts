
import { Allocation } from "../@types/allocation";
import { Option } from "../@types/option";
import { descriptionsVacancies } from "../data/descriptions-vacancies";
import { OptionsFillVacancies } from "../data/options";
import { isEqualAllocations } from "../utils/functions";
import { useAllocationStore } from "./useAllocationsStore";


export function useOptionsVacancies(){

    const { getAllocations } = useAllocationStore();

    /**
     * obter lista de nomes que posso exibir num select.
     * 
     */
    function getListOptions(vacancyRequester: Allocation): Option[] {
        let array: Option[] = OptionsFillVacancies;
        const allocations = getAllocations();
    
        for (const key in allocations) {
            allocations[key].forEach((allocation) => {
                if (((vacancyRequester.dayWeekId > 0 && vacancyRequester.dayWeekId < 7) && (allocation.dayWeekId > 0 && allocation.dayWeekId < 7)) ||
                    (vacancyRequester.dayWeekId === 0 && allocation.dayWeekId === 0)) {
                    if(allocation.weekId === vacancyRequester.weekId){
                        if (!isEqualAllocations(allocation, vacancyRequester)) { // se sao iguais, a opção ta alocada no vacancyRequester
                            array = array.filter((opt) => opt.name !== key);
                        }
                    }
                }
            });
        }
        return array;
    }


    function getListDescriptions(vacancyRequester: Allocation): Option[] {
        let array: Option[] = descriptionsVacancies;
        const allocations = getAllocations();

        for (const key in allocations) {
            allocations[key].forEach((allocation) => {
                if(!isEqualAllocations(allocation, vacancyRequester)){
                    array = array.filter((opt) => opt.name !== allocation.description);
                }
            });
        }

        return array;
    }


    return { 
        getListOptions, getListDescriptions
    };

}