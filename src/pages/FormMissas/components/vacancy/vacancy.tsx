
import { useEffect, useState } from 'react';
import styles from './style.module.css';
import { OptionsFillVacancies } from '../../../../data/options'
import { useAllocationStore } from '../../../../hooks/useAllocationsStore';
import { useShallow } from 'zustand/react/shallow'
import { useOptionsVacancies } from '../../../../hooks/useOptionsVacancies';
import { Allocation } from '../../../../@types/allocation';
import { Selector } from '../../../../components/Selector/Selector';
import { descriptionsVacancies } from '../../../../data/descriptions-vacancies';


type Props = {
    id: Allocation;
}

export function Vacancy({ id }: Props) {

    const [ description, setDescription ] = useState(" ");

    const [ option, setOption ] = useState(" ");
    const { to_allocate, deallocate, isVacancyHasOptionAllocated, allocations } = useAllocationStore();
    const { getListOptions, getListDescriptions } = useOptionsVacancies();


    function handleChangeOptions(newValue: string) {
        if (option !== ' ') {
            deallocate(option, id);
        }
        to_allocate(newValue, {...id, description: description});
        setOption(newValue);
    }

    function handleChangeDescriptions(newValue: string){
        if(newValue !== description && option !== " ") {
            deallocate(option, id);
            to_allocate(option, {...id, description: newValue});
        }
        setDescription(newValue);
    }

    useEffect(() => {
        console.log(allocations);
    },[allocations]);

    return (
        <div className={styles.vacancy}>
            <Selector 
                key={'descriptions'}
                onHandleSelector={handleChangeDescriptions}
                options={getListDescriptions(id)}
                optPreSelected={isVacancyHasOptionAllocated(id)[1]}
            />
            <span>-</span>
            <Selector
                key={'options'} 
                onHandleSelector={handleChangeOptions}
                options={getListOptions(id)}
                optPreSelected={isVacancyHasOptionAllocated(id)[0]}
            />
        </div>
    )
}