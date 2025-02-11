import AltarServerAssignmentRule from "./AltarServerAssignmentRule";
import {Option} from "../../../../@types/option";
import {DaysWeek} from "../../../shared/enums/DaysWeek.enum";
import IWeeklySchedule from "../../interfaces/IWeeklySchedule";

export default class WeekDayAssigmentRule implements AltarServerAssignmentRule {

    public canAssign(altarServer: Option, weeklySchedule: IWeeklySchedule): boolean {
        const masses = weeklySchedule.getMassesBetweenDays(DaysWeek.TERCA, DaysWeek.SABADO);
        for (const day in masses) {
            if(masses[day as DaysWeek].some(mass => mass.isAltarServerAssign(altarServer.id)))
                return false;
        }
        return true;
    }

}
