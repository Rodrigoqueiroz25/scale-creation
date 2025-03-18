import {useLocation} from "react-router-dom";
import {useBuildWeeklySchedule} from "./build-weekly-schedule.model";
import BuildWeeklyScheduleView from "./build-weekly-schedule.view";


export function BuildWeeklySchedulePage() {

    const location = useLocation();
    const buildWeeklySchedule = useBuildWeeklySchedule({
        nameMonth: location.state.nameMonth,
        totalWeeks: location.state.totalWeeks
    })

    return <BuildWeeklyScheduleView {...buildWeeklySchedule} />
}
