import AltarServerAssignmentRule from "./altar-server-assignment-rule";
import {DaysWeek} from "../../../../shared/enums/DaysWeek.enum";
import IWeeklySchedule from "../../interfaces/IWeeklySchedule";
import {AltarServer} from "../../models/altar-server";

export default class SundayAssigmentRule implements AltarServerAssignmentRule {

    public canAssign(altarServer: AltarServer, weeklySchedule: IWeeklySchedule): boolean {
        return weeklySchedule.getMassesByDay(DaysWeek.DOMINGO).every(
            mass => !mass.isAltarServerAssign(altarServer.id)
        )
    }
}
