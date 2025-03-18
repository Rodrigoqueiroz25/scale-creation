
import AltarServerAssignmentRule from "./altar-server-assignment-rule";
import {DaysWeek} from "../../../../shared/enums/DaysWeek.enum";
import IWeeklySchedule from "../../interfaces/IWeeklySchedule";
import {AltarServer} from "../../models/altar-server";

export default class WeekDayAssigmentRule implements AltarServerAssignmentRule {

    public canAssign(altarServer: AltarServer, weeklySchedule: IWeeklySchedule): boolean {
        const masses = weeklySchedule.getMassesBetweenDays(DaysWeek.TERCA, DaysWeek.SABADO);
        for (const day in masses) {
            if(masses[day as DaysWeek].some(mass => mass.isAltarServerAssign(altarServer.id)))
                return false;
        }
        return true;
    }

}
