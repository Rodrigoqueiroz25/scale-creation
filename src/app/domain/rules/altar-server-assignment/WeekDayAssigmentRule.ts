import AltarServerAssignmentRule from "./AltarServerAssignmentRule";
import {Option} from "../../../../@types/option";
import WeeklyMassSchedule from "../../entities/WeeklyMassSchedule";
import {DaysWeek} from "../../../shared/enums/DaysWeek.enum";

export default class WeekDayAssigmentRule implements AltarServerAssignmentRule {

    constructor(private readonly weeklyMassSchedule: WeeklyMassSchedule) {
    }

    public canAssign(altarServer: Option): boolean {
        const masses = this.weeklyMassSchedule.getMassesBetweenDays(DaysWeek.TERCA, DaysWeek.SABADO);
        for (const day in masses) {
            if(masses[day as DaysWeek].some(mass => mass.isAltarServerAssign(altarServer.id)))
                return false;
        }
        return true;
    }

}
