
import IWeeklySchedule from "../../interfaces/IWeeklySchedule";
import {AltarServer} from "../../models/altar-server";

export default interface AltarServerAssignmentRule {
    canAssign(altarServer: AltarServer, weeklySchedule: IWeeklySchedule): boolean;
}
