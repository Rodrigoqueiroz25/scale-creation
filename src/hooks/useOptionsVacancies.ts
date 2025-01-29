
import { Allocation } from "../@types/allocation";
import { Option } from "../@types/option";
import { descriptionsVacancies } from "../app/shared/data/descriptions-vacancies";
import AltarServersGateway from "../app/infra/gateways/altarServers/AltarServersGateway";
import { isEqualAllocations } from "../utils/functions";
import { useAllocationStore } from "./useAllocationsStore";


export function useOptionsVacancies(options: AltarServersGateway){

    const { getAllocations } = useAllocationStore();

    /**
     * obter lista de nomes que posso exibir num select.
     *
     */
    async function getListOptions(vacancyRequester: Allocation): Promise<Option[]> {
        //let array: Option[] = OptionsFillVacancies;
        let array: Option[] = await options.getAll();
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