//lógica de estados
import {useEffect, useState} from "react";
import WeeklyMassSchedule from "../../../core/domain/entities/WeeklyMassSchedule";
import {useServices} from "../../context/use-case.provider";

type Props = {
    nameMonth: string;
    totalWeeks: number;
}

export function useBuildWeeklySchedule(props: Props) {

    const { nameMonth, totalWeeks } = props;

    const { getWeeklyMassSchedule } = useServices();

    const [week, setWeek] = useState(1);
    const [weeklyMassSchedule, setWeeklyMassSchedule] = useState<WeeklyMassSchedule>();


    async function handleClickNextWeek() {
        if (week < totalWeeks) {
            setWeek(week + 1);
        }
    }

    async function handleClickPreviousWeek() {
        if (week > 1) {
            setWeek(week - 1);
        }
    }

    useEffect(() => {
        const loadWeeklyMassSchedule = async () => {
            const weeklyMassSchedule = await getWeeklyMassSchedule.exec(week);
            setWeeklyMassSchedule(weeklyMassSchedule);
        }
        loadWeeklyMassSchedule();
    }, [week]);


    return {
        nameMonth,
        week,
        weeklyMassSchedule,
        handleClickNextWeek,
        handleClickPreviousWeek,
    }
}