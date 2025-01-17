
import { useEffect, useState } from 'react';
import styles from './style.module.css';
import { useAllocationStore } from '../../../../hooks/useAllocationsStore';
import { useOptionsVacancies } from '../../../../hooks/useOptionsVacancies';
import { Allocation } from '../../../../@types/allocation';
import { Selector } from '../../../../components/Selector/Selector';
import CoroinhaGateway from '../../../../infra/gateways/coroinha/CoroinhaGateway';
import CoroinhaGatewayMemory from '../../../../infra/gateways/coroinha/CoroinhaGatewayMemory';
import { Option } from '../../../../@types/option';


type Props = {
    id: Allocation;
}

export function Vacancy({ id }: Props) {

    const options: CoroinhaGateway = new CoroinhaGatewayMemory();
    const [ opts, setOpts ] = useState<Option[]>([]);
    const [ description, setDescription ] = useState(" ");

    const [ option, setOption ] = useState(" ");
    const { to_allocate, deallocate, isVacancyHasOptionAllocated, allocations } = useAllocationStore();
    const { getListOptions, getListDescriptions } = useOptionsVacancies(options);


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
        (async () => {
            setOpts(await getListOptions(id));
        })();
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
                options={opts}
                optPreSelected={isVacancyHasOptionAllocated(id)[0]}
            />
        </div>
    )
}