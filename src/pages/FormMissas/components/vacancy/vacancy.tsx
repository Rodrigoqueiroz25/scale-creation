
import { useEffect, useState } from 'react';
import styles from './style.module.css';
import { OptionsFillVacancies } from '../../../../data/options'
import { useAllocationStore } from '../../../../hooks/useAllocationsStore';
import { useShallow } from 'zustand/react/shallow'


type Props = {
    num: number;
}

export function Vacancy({ num }: Props) {

    const [nameSelected, setNameSelected] = useState('');

    const { allocations, to_allocate, deallocate } = useAllocationStore();

    function handleChange(valor: any) {
        if (nameSelected !== '') {
            deallocate(nameSelected, {
                day: '2',
                time: '13:00',
                local: 'matriz',
                numVacancy: num
            })
        }
        setNameSelected(valor);
        to_allocate(valor, {
            day: '2',
            time: '13:00',
            local: 'matriz',
            numVacancy: num
        })
        // to_allocate({
        //     option: valor,
        //     location: [{
        //         day: 'terça-feira',
        //         local: 'matriz',
        //         numVacancy: num,
        //         time: '19:00'
        //     }]
        // })
    }

    useEffect(() => {
        console.log(allocations);
    }, [allocations]);

    return (
        <select className={styles.select} onChange={(e) => handleChange(e.target.value)}>
            {
                OptionsFillVacancies.map((name, key) => (
                    <option key={key} value={name}>{name}</option>
                ))
            }

        </select >
    )
}