import AltarServerAssignmentRule from "./AltarServerAssignmentRule";
import {Option} from "../../../../@types/option";
import {DaysWeek} from "../../../shared/enums/DaysWeek.enum";
import IWeeklySchedule from "../../interfaces/IWeeklySchedule";

export default class SundayAssigmentRule implements AltarServerAssignmentRule {

    public canAssign(altarServer: Option, weeklySchedule: IWeeklySchedule): boolean {
        return weeklySchedule.getMassesByDay(DaysWeek.DOMINGO).every(
            mass => !mass.isAltarServerAssign(altarServer.id)
        )
    }
}
