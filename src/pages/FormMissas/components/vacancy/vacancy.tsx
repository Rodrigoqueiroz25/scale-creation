
import { useEffect, useState } from 'react';
import styles from './style.module.css';
import { OptionsFillVacancies } from '../../../../data/options'
import { useAllocationStore } from '../../../../hooks/useAllocationsStore';
import { useShallow } from 'zustand/react/shallow'
import { useOptionsVacancies } from '../../../../hooks/useOptionsVacancies';
import { Allocation } from '../../../../@types/allocation';


type Props = {
    id: Allocation;
}

export function Vacancy({ id }: Props) {

    const [nameSelected, setNameSelected] = useState('');
    const { to_allocate, deallocate } = useAllocationStore();
    const { getListOptions } = useOptionsVacancies();


    function handleChange(valor: any) {
        if (nameSelected !== '') {
            deallocate(nameSelected, id);
        }
        setNameSelected(valor);
        to_allocate(valor, id);
    }


    return (
        <select className={styles.select} onChange={(e) => handleChange(e.target.value)}>
            <option key={-1} value=" "></option>
            {

                getListOptions(id).map((opt) => (
                    <option key={opt.id} value={opt.name}>{opt.name}</option>
                ))
            }

        </select >
    )
}