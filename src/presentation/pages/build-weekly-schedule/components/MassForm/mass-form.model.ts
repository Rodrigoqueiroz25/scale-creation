import {useEffect, useState} from 'react';
import Mass from "../../../../../core/domain/entities/Mass";
import {Option} from "../../../../../../exclude/hooks(deprecated)/@types/option";
import {AltarServer} from "../../../../../core/domain/models/altar-server";
import {useServices} from "../../../../context/use-case.provider";

type Props = {
    weekId: number;
    mass: Mass;
}


export function useMassForm({ weekId, mass }: Props) {

    const [celebration, setCelebration] = useState(mass.getDescription());
    const [vacancies, setVacancies] = useState<number>(mass.getNumVacancies());
    const [altarServers, setAltarServers] = useState<AltarServer[]>([]);
    //const [render, setRender] = useState(true);
    
    const { assignAltarServer, unassignAltarServer, altarServerList, eventListenersService } = useServices();

    // function rerender(){
    //     setRender(!render);
    // }

    function handleClickPlus() {
        setVacancies(vacancies + 1);
    }

    function handleClickLess() {
        if (vacancies > 2) {
            setVacancies(vacancies - 1);
        }
    }

    async function altarServerChosen(id: number, newOption: Option, oldOption?: Option) {
        if(oldOption)
            await unassignAltarServer.exec(weekId, id, mass.getDateTimeLocal())

        if (newOption)
            await assignAltarServer.exec(weekId, newOption, id, mass.getDateTimeLocal())
        // rerender();
        eventListenersService.publish('altar-server-signed');
    }

    async function loadAltarServers() {
        const altarServers = await altarServerList.getList(weekId, mass.getDate());
        setAltarServers(altarServers);
    }

    useEffect(() => {
        loadAltarServers();
    }, []);

    useEffect(() => {
        const unsubscribe = eventListenersService.subscribe('altar-server-signed',
            loadAltarServers
        )

        return () => {
            unsubscribe();
        }

    }, []);


    return {
        handleClickPlus,
        handleClickLess,
        altarServerChosen,
        altarServers,
        vacancies,
        celebration,
        setCelebration
    }
}